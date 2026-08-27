package com.telerik.dts;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * The api-versions.xml an Android platform ships in its data directory, which records the API level
 * every class and member first appeared in, was deprecated in, and - for the ones that did not
 * survive - was removed in.
 *
 * Merged definitions need this: a member the newest platform dropped is still generated, from the
 * older jar that has it, and without a level attached it is indistinguishable from a current one.
 */
public class ApiLevels {

    /** No level recorded, as opposed to a recorded level that happens to be low. */
    private static final int UNKNOWN = 0;

    private static final class Entry {
        private final int since;
        private final int deprecated;
        private final int removed;

        private Entry(int since, int deprecated, int removed) {
            this.since = since;
            this.deprecated = deprecated;
            this.removed = removed;
        }
    }

    /**
     * What is known about one declaration's levels, kept as data rather than rendered text so that
     * declarations which collapse into one can have their levels reconciled before anything is
     * written.
     */
    public static final class Tags {

        public static final Tags NONE = new Tags(UNKNOWN, UNKNOWN, UNKNOWN, false);
        public static final Tags DEPRECATED_IN_BYTECODE = new Tags(UNKNOWN, UNKNOWN, UNKNOWN, true);

        private final int since;
        private final int deprecated;
        private final int removed;
        private final boolean deprecatedWithoutLevel;

        private Tags(int since, int deprecated, int removed, boolean deprecatedWithoutLevel) {
            this.since = since;
            this.deprecated = deprecated;
            this.removed = removed;
            this.deprecatedWithoutLevel = deprecatedWithoutLevel;
        }

        public boolean isEmpty() {
            return !isDeprecated() && since == UNKNOWN;
        }

        private boolean isDeprecated() {
            return deprecatedWithoutLevel || deprecated != UNKNOWN || removed != UNKNOWN;
        }

        /**
         * The levels of two declarations that render identically and so can only be written once.
         *
         * Such a declaration is reachable through any of the members that produced it, so it is
         * available from the lowest level any of them was, and it is only really deprecated when
         * every one of them is - a live overload keeps the signature callable, and striking it
         * through would warn about a call that is perfectly fine.
         */
        public Tags mergedWith(Tags other) {
            int mergedSince = since == UNKNOWN || other.since == UNKNOWN
                    ? UNKNOWN
                    : Math.min(since, other.since);

            if (!isDeprecated() || !other.isDeprecated()) {
                return new Tags(mergedSince, UNKNOWN, UNKNOWN, false);
            }

            return new Tags(
                    mergedSince,
                    lowerOrNone(deprecated, other.deprecated),
                    lowerOrNone(removed, other.removed),
                    true);
        }

        /** A level both sides state, or none: what only one of them says does not hold of the pair. */
        private static int lowerOrNone(int level, int otherLevel) {
            return level == UNKNOWN || otherLevel == UNKNOWN ? UNKNOWN : Math.min(level, otherLevel);
        }

        public List<String> render() {
            List<String> tags = new ArrayList<>(2);
            if (since != UNKNOWN) {
                tags.add("@since " + since);
            }

            // TypeScript honours a single @deprecated, so a declaration that was deprecated and
            // later removed has to say both in one tag. A removal leads: it is the half that breaks
            // a call at runtime, and leading with it keeps "Removed in API" a prefix every removal
            // shares, for a reader skimming hover text or a tool scanning the file.
            if (removed != UNKNOWN && deprecated != UNKNOWN) {
                tags.add("@deprecated Removed in API " + removed + " (deprecated in API " + deprecated + ")");
            } else if (removed != UNKNOWN) {
                tags.add("@deprecated Removed in API " + removed);
            } else if (deprecated != UNKNOWN) {
                tags.add("@deprecated Deprecated in API " + deprecated);
            } else if (deprecatedWithoutLevel) {
                tags.add("@deprecated");
            }
            return tags;
        }
    }

    private final Map<String, Entry> classes = new HashMap<>();
    private final Map<String, Map<String, Entry>> members = new HashMap<>();
    private final Map<String, List<String>> supertypes = new HashMap<>();
    private final int minSdk;

    private ApiLevels(int minSdk) {
        this.minSdk = minSdk;
    }

    public static ApiLevels read(File file, int minSdk) throws IOException, XMLStreamException {
        ApiLevels apiLevels = new ApiLevels(minSdk);
        try (InputStream stream = new BufferedInputStream(new FileInputStream(file))) {
            apiLevels.parse(stream);
        }
        return apiLevels;
    }

    private void parse(InputStream stream) throws XMLStreamException {
        XMLInputFactory factory = XMLInputFactory.newInstance();
        factory.setProperty(XMLInputFactory.IS_SUPPORTING_EXTERNAL_ENTITIES, false);
        factory.setProperty(XMLInputFactory.SUPPORT_DTD, false);

        XMLStreamReader reader = factory.createXMLStreamReader(stream);
        String currentClass = null;

        try {
            while (reader.hasNext()) {
                if (reader.next() != XMLStreamConstants.START_ELEMENT) {
                    continue;
                }

                String element = reader.getLocalName();
                String name = reader.getAttributeValue(null, "name");
                if (name == null) {
                    continue;
                }

                if ("class".equals(element)) {
                    currentClass = name;
                    classes.put(name, entryOf(reader));
                } else if (currentClass != null && ("method".equals(element) || "field".equals(element))) {
                    // A method is keyed by its name and descriptor together, a field by its name
                    // alone, so the two never collide in one map.
                    members.computeIfAbsent(currentClass, key -> new HashMap<>()).put(name, entryOf(reader));
                } else if (currentClass != null && ("extends".equals(element) || "implements".equals(element))) {
                    supertypes.computeIfAbsent(currentClass, key -> new ArrayList<>()).add(name);
                }
            }
        } finally {
            reader.close();
        }
    }

    /** The highest level the file describes, which is the platform it was shipped with. */
    public int highestLevel() {
        int highest = UNKNOWN;
        for (Entry entry : classes.values()) {
            highest = Math.max(highest, Math.max(entry.since, Math.max(entry.deprecated, entry.removed)));
        }
        return highest;
    }

    private static Entry entryOf(XMLStreamReader reader) {
        return new Entry(
                levelOf(reader, "since"),
                levelOf(reader, "deprecated"),
                levelOf(reader, "removed"));
    }

    private static int levelOf(XMLStreamReader reader, String attribute) {
        String value = reader.getAttributeValue(null, attribute);
        if (value == null) {
            return UNKNOWN;
        }

        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            return UNKNOWN;
        }
    }

    public Tags tagsForClass(String className) {
        Entry entry = classes.get(internalName(className));
        if (entry == null) {
            return Tags.NONE;
        }

        return new Tags(sinceWorthStating(entry.since), entry.deprecated, entry.removed, false);
    }

    /**
     * A member carrying no level of its own has its class's, so only a level that departs from the
     * class's says anything the class has not already said.
     */
    public Tags tagsForMember(String className, String memberKey, boolean deprecatedInBytecode) {
        String internalName = internalName(className);
        Map<String, Entry> classMembers = members.get(internalName);
        Entry entry = classMembers == null ? null : classMembers.get(memberKey);
        if (entry == null) {
            // An inherited member is written onto the class that inherits it, whose entry does not
            // list it, so the level has to be taken from wherever it was declared. Matching on the
            // full descriptor throughout: a name alone would land on the wrong overload.
            entry = declaredBySupertype(internalName, memberKey);
        }

        if (entry == null) {
            return deprecatedInBytecode ? Tags.DEPRECATED_IN_BYTECODE : Tags.NONE;
        }

        // A member cannot predate the class holding it, so a level at or under the class's is
        // already covered by the class's own tag. Inherited members make this common: they carry
        // the level of the ancestor that declared them, which is often older than the subclass.
        Entry owner = classes.get(internalName);
        int since = owner != null && entry.since <= owner.since ? UNKNOWN : sinceWorthStating(entry.since);
        return new Tags(since, entry.deprecated, entry.removed, deprecatedInBytecode);
    }

    /** The nearest ancestor declaring the member, or null where none of them does. */
    private Entry declaredBySupertype(String internalName, String memberKey) {
        Deque<String> queue = new ArrayDeque<>(supertypes.getOrDefault(internalName, Collections.<String>emptyList()));
        Set<String> visited = new HashSet<>();

        while (!queue.isEmpty()) {
            String ancestor = queue.remove();
            if (!visited.add(ancestor)) {
                continue;
            }

            Map<String, Entry> ancestorMembers = members.get(ancestor);
            Entry entry = ancestorMembers == null ? null : ancestorMembers.get(memberKey);
            if (entry != null) {
                return entry;
            }

            queue.addAll(supertypes.getOrDefault(ancestor, Collections.<String>emptyList()));
        }

        return null;
    }

    /**
     * Everything the definitions are meant for is present at minSdk, so a level at or below it only
     * adds noise to a file that already runs to six figures of lines.
     */
    private int sinceWorthStating(int since) {
        return since > minSdk ? since : UNKNOWN;
    }

    private static String internalName(String className) {
        return className.replace('.', '/');
    }
}
