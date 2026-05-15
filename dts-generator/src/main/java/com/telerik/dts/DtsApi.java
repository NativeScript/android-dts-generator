package com.telerik.dts;

import com.telerik.InputParameters;

import org.apache.bcel.classfile.Attribute;
import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.FieldOrMethod;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.LocalVariable;
import org.apache.bcel.classfile.LocalVariableTable;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.classfile.Signature;
import org.apache.bcel.generic.ArrayType;
import org.apache.bcel.generic.BasicType;
import org.apache.bcel.generic.ObjectType;
import org.apache.bcel.generic.ReferenceType;
import org.apache.bcel.generic.Type;
import org.apache.bcel.util.BCELComparator;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import edu.umd.cs.findbugs.ba.generic.GenericObjectType;
import edu.umd.cs.findbugs.ba.generic.GenericSignatureParser;
import edu.umd.cs.findbugs.ba.generic.GenericUtilities;

import java.util.Deque;
import java.util.ArrayDeque;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class DtsApi {
    public static List<Tuple<String, Integer>> externalGenerics = new ArrayList<>();
    public static List<Tuple<String, Integer>> generics = new ArrayList<>();
    public static List<String> imports = new ArrayList<>();
    public static String JavaLangObject = "java.lang.Object";

    private static Map<String, String> globalAliases = new HashMap<>();

    private Map<String, String> extendsOverrides = new HashMap<>();
    private Map<String, String> superOverrides = new HashMap<>();
    private Map<String, String> typeOverrides = new HashMap<>();

    private StringBuilder2 sbContent;
    private Set<String> references;
    private JavaClass prevClass;
    private String currentFileClassname;
    private Set<String> baseMethodNames;
    private List<Method> baseMethods;
    private Map<String, Method> mapNameMethod;
    private Map<String, String> aliasedTypes;
    private String[] namespaceParts;
    private int indent = 0;
    private boolean allGenericImplements;
    private Pattern methodSignature = Pattern.compile("\\((?<ArgumentsSignature>.*)\\)(?<ReturnSignature>.*)");
    private Pattern isWordPattern = Pattern.compile("^[\\w\\d]+$");
    private Pattern isVoid = Pattern.compile("V(\\^.*\\;)?");
    private int ignoreObfuscatedNameLength;
    private HashSet<String> warnedMissing = new HashSet<>();
    private Pattern jsFieldPattern = Pattern.compile("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

    private Set<String> reservedJsKeywords = Set.of(
            "abstract", "arguments", "await", "boolean",
            "break", "byte", "case", "catch",
            "char", "class", "const", "continue",
            "debugger", "default", "delete", "do",
            "double", "else", "enum", "eval",
            "export", "extends", "false", "final",
            "finally", "float", "for", "function",
            "goto", "if", "implements", "import",
            "in", "instanceof", "int", "interface",
            "let", "long", "native", "new",
            "null", "package", "private", "protected",
            "public", "return", "short", "static",
            "super", "switch", "synchronized", "this",
            "throw", "throws", "transient", "true",
            "try", "typeof", "var", "void",
            "volatile", "while", "with", "yield"
    );

    public DtsApi(boolean allGenericImplements, InputParameters inputParameters) {
        this.allGenericImplements = allGenericImplements;
        this.ignoreObfuscatedNameLength = inputParameters.getIgnoreObfuscatedNameLength();
        this.indent = 0;

        overrideFieldComparator();
        setOverrides();
        setTypeOverrides();
        setGlobalAliases();

        this.aliasedTypes = new HashMap<>();
    }

    public String generateDtsContent(List<JavaClass> javaClasses) {
        this.prevClass = null;

        if ((javaClasses != null) && (javaClasses.size() > 0)) {
            references = new HashSet<>();
            sbContent = new StringBuilder2();

            // process class scope
            for (int i = 0; i < javaClasses.size(); i++) {
                Set<String> methodsSet = new HashSet<>();

                JavaClass currClass = javaClasses.get(i);
                currentFileClassname = currClass.getClassName();


                String simpleClassName = getSimpleClassname(currClass);
                if (isObfuscated(simpleClassName)) {
                    continue;
                }
                Signature signature = this.getSignature(currClass);
                TypeDefinition typeDefinition = null;
                if (signature != null) {
                    typeDefinition = new TypeDefinition(signature.getSignature(), currentFileClassname);
                }

                if (currentFileClassname.startsWith("java.util.function") ||
                        currentFileClassname.startsWith("android.support.v4.media.routing.MediaRouterJellybeanMr1") ||
                        currentFileClassname.startsWith("android.support.v4.media.routing.MediaRouterJellybeanMr2") ||
                        currentFileClassname.contains(".debugger.") ||
                        currentFileClassname.endsWith("package-info") ||
                        currentFileClassname.endsWith("module-info") ||
                        currentFileClassname.endsWith("Kt") ||
                        currentFileClassname.contains("$$serializer")) {
                    continue;
                }

                // compute namespace parts
                this.namespaceParts = currentFileClassname.split("\\.");
                if (isIgnoredNamespace()) {
                    System.out.println(String.format("Found ignored namespace. %s", String.join(".", this.namespaceParts)));
                    continue;
                }

                boolean isInterface = currClass.isInterface();
                boolean isAbstract = currClass.isAbstract();

                this.indent = closePackage(this.prevClass, currClass);
                this.indent = openPackage(this.prevClass, currClass);

                String tabs = getTabs(this.indent);

                                // Special-case: Kotlin Companion inner object — emit as namespace merge instead of class
                if ((simpleClassName.equals("Companion") || currClass.getClassName().endsWith("$Companion")) && currClass.getClassName().contains("$")) {
                    // compute parent and its simple name
                    String parentFull = currClass.getClassName().substring(0, currClass.getClassName().lastIndexOf("$"));
                    String[] parentParts = parentFull.replace('$', '.').split("\\.");
                    String outerSimple = parentParts[parentParts.length - 1];

                    // Decide whether the outer namespace is already open.
                    // We use namespaceStack (Deque<String>) that tracks currently opened namespaces.
                    boolean outerAlreadyOpen = !namespaceStack.isEmpty() && namespaceStack.peekLast().equals(outerSimple);

                    // Track whether we opened the outer namespace here so we close the correct number of braces later.
                    boolean openedOuterHere = false;

                    if (!outerAlreadyOpen) {
                        // need to open the outer namespace first, then Companion
                        sbContent.appendln(tabs + "export namespace " + outerSimple + " {");
                        sbContent.appendln(tabs + "\texport namespace Companion {");
                        openedOuterHere = true;
                    } else {
                        // outer namespace already exists in the stack; only open Companion inside it
                        // Do not add an extra tab here because 'tabs' is already indented inside the outer namespace.
                        sbContent.appendln(tabs + "export namespace Companion {");
                    }

                    // Deduplicate member emissions (some members may appear duplicated in getMembers)
                    Set<String> seenMemberSigs = new HashSet<>();

                    List<FieldOrMethod> members = getMembers(currClass, getAllInterfaces(currClass));
                    for (FieldOrMethod member : members) {
                        if (member instanceof Method) {
                            Method m = (Method) member;
                            if (m.isSynthetic() || (!m.isPublic() && !m.isProtected())) {
                                continue;
                            }
                            if (isConstructor(m)) {
                                continue;
                            }

                            String sig = getMethodFullSignature(m);
                            if (seenMemberSigs.contains(sig)) {
                                continue;
                            }
                            seenMemberSigs.add(sig);

                            String methodNameRaw = m.getName();
                            String methodNameForDecl = jsFieldPattern.matcher(methodNameRaw).matches() ? methodNameRaw : getMethodName(m);

                            String paramsSig = getMethodParamSignature(currClass, typeDefinition, m);
                            String returnType = "";
                            if (!isConstructor(m)) {
                                returnType = ": " + safeGetTypeScriptType(this.getReturnType(m), typeDefinition);
                            }

                            // choose member indentation based on whether we opened outer here
                            String memberIndent = openedOuterHere ? (tabs + "\t\t") : (tabs + "\t");
                            sbContent.appendln(memberIndent + "function " + methodNameForDecl + paramsSig + returnType + ";");
                        } else if (member instanceof Field) {
                            Field f = (Field) member;
                            if (f.isSynthetic() || (!f.isPublic() && !f.isProtected())) {
                                continue;
                            }

                            String fieldSig = f.getName() + ":" + this.getFieldType(f).toString();
                            if (seenMemberSigs.contains(fieldSig)) {
                                continue;
                            }
                            seenMemberSigs.add(fieldSig);

                            String name = f.getName();
                            if (!jsFieldPattern.matcher(name).matches()) {
                                name = "\"" + name + "\"";
                            }
                            String fType = safeGetTypeScriptType(this.getFieldType(f), typeDefinition);

                            String memberIndent = openedOuterHere ? (tabs + "\t\t") : (tabs + "\t");
                            sbContent.appendln(memberIndent + "const " + name + ": " + fType + ";");
                        }
                    }

                    // Close Companion namespace (and outer namespace if we opened it here)
                    // closing indentation must match how we opened
                    if (openedOuterHere) {
                        sbContent.appendln(tabs + "\t}");
                        sbContent.appendln(tabs + "}");
                    } else {
                        sbContent.appendln(tabs + "}");
                    }

                    // Mark prevClass and continue (we don't emit the Companion class itself)
                    this.prevClass = currClass;
                    continue;
                }

                String extendsLine = getExtendsLine(currClass, typeDefinition);

                if (simpleClassName.equals("AccessibilityDelegate")) {
                    sbContent.appendln(tabs + "export class " + getFullClassNameConcatenated(currClass) + getTypeSuffix(currentFileClassname, typeDefinition, extendsLine) + extendsLine + " {");
                } else {
                    sbContent.appendln(tabs + "export" + (isAbstract && !isInterface ? " abstract " : " ") + "class " + simpleClassName + getTypeSuffix(currentFileClassname, typeDefinition, extendsLine) + extendsLine + " {");
                }
                // process member scope

                mapNameMethod = new HashMap<>();

                loadBaseMethods(currClass); //loaded in "baseMethodNames" and "baseMethods"

                addClassField(currClass);

                // process constructors for interfaces
                if (isInterface) {
                    List<JavaClass> allInterfaces = getAllInterfaces(currClass);

                    List<Method> allInterfacesMethods = getAllInterfacesMethods(allInterfaces);
                    Set<Field> allInterfaceFields = getAllInterfacesFields(allInterfaces);

                    processInterfaceConstructor(currClass, typeDefinition, allInterfacesMethods);

                    for (Method method : allInterfacesMethods) {
                        processMethod(method, currClass, typeDefinition, methodsSet);
                    }

                    for (Field f : allInterfaceFields) {
                        processField(f, currClass, typeDefinition);
                    }
                } else {
                    List<FieldOrMethod> members = getMembers(currClass, getAllInterfaces(currClass));
                    for (FieldOrMethod fieldOrMethod : members) {
                        if (fieldOrMethod instanceof Field) {
                            processField((Field) fieldOrMethod, currClass, typeDefinition);
                        } else if (fieldOrMethod instanceof Method) {
                            processMethod((Method) fieldOrMethod, currClass, typeDefinition, methodsSet);
                        } else {
                            throw new IllegalArgumentException("Argument is not method or field");
                        }
                    }
                    // process member scope end
                }

                if (!isInterface) {
                    HashSet<JavaClass> allInterfaces = new HashSet<>(getAllInterfaces(currClass));

                    List<JavaClass> allClasses = getAllSuperClasses(currClass);

                    // Include interfaces of extended classes
                    for (JavaClass jclass : allClasses) {
                        allInterfaces.addAll(getInterfaces(jclass));
                    }

                    List<Method> allInterfacesMethods = getAllInterfacesMethods(allInterfaces);

                    for (Method method : allInterfacesMethods) {
                        processMethod(method, currClass, typeDefinition, methodsSet);
                    }
                }

                writeMethods(methodsSet);

                sbContent.appendln(tabs + "}");
                if (getSimpleClassname(currClass).equals("AccessibilityDelegate")) {
                    String innerClassAlias = "export type " + getSimpleClassname(currClass) + " = " + getFullClassNameConcatenated(currClass);
                    sbContent.appendln(tabs + innerClassAlias);
                }
                this.prevClass = currClass;
            }
            closePackage(prevClass, null);
            // process class scope end

            String[] refs = references.toArray(new String[references.size()]);
            Arrays.sort(refs);
        }

        String content = replaceIgnoredNamespaces(sbContent.toString());

        // Ensure braces are balanced (only append missing closing braces)
        content = balanceUnclosedBraces(content);

        return content;
    }

    /**
     * Replace known ignored namespaces with 'any' — but do it safely on a per-match basis
     * (no greedy regex that can swallow closing '>' characters). For each occurrence of
     * the ignored namespace-qualified type we:
     *  - detect if it's followed by a generic argument list starting with '<'
     *  - if so, scan forward to find the matching closing '>' (taking nested '<' into account)
     *  - replace the entire type token (including its generic args) with "any"
     *
     * This approach never uses a global regex that can accidentally drop characters
     * from previously-correct type tokens.
     */
    private String replaceIgnoredNamespaces(String content) {
        String result = content;

        for (String ignoredNamespace : this.getIgnoredNamespaces()) {
            result = replaceIgnoredNamespaceOccurrences(result, ignoredNamespace);
            String globalAliasedClassName = getGlobalAliasedClassName(ignoredNamespace);
            if (!globalAliasedClassName.equals(ignoredNamespace)) {
                result = replaceIgnoredNamespaceOccurrences(result, globalAliasedClassName);
            }
        }

        // keep the small extends-any replacement
        result = result.replace(" extends any ", String.format(" extends %s ", DtsApi.JavaLangObject));

        return result;
    }

    /**
     * Replace occurrences of a particular namespace/prefix like "kotlin.foo.Bar" (or its
     * aliased variant) with "any". This is done by finding occurrences of the qualified
     * name and — if the next character is '<' — locating the matching '>' and including
     * it in the replaced span. The replacement preserves all surrounding characters.
     */
    private String replaceIgnoredNamespaceOccurrences(String content, String namespacePrefix) {
        if (content == null || content.isEmpty()) {
            return content;
        }

        StringBuilder out = new StringBuilder();
        int last = 0;

        // pattern matches the namespace prefix followed by one or more ".SimpleName" segments
        Pattern p = Pattern.compile(Pattern.quote(namespacePrefix) + "(?:\\.[A-Za-z0-9_]+)*");
        Matcher m = p.matcher(content);

        while (m.find()) {
            int s = m.start();
            int e = m.end();

            // append unchanged region before this match
            out.append(content, last, s);

            // Defensive check: ensure the match isn't part of a longer identifier (e.g. preceded by a letter/digit/_)
            // if it is, treat it as non-match (copy-through)
            boolean isPartOfLongerIdentifier = false;
            if (s > 0) {
                char before = content.charAt(s - 1);
                if (Character.isLetterOrDigit(before) || before == '_' || before == '$') {
                    isPartOfLongerIdentifier = true;
                }
            }
            if (isPartOfLongerIdentifier) {
                // copy the matched text as-is and continue
                out.append(content, s, e);
                last = e;
                // move the matcher's region forward to avoid re-matching the same span
                if (e < content.length()) {
                    m.region(e, content.length());
                }
                continue;
            }

            // Determine whether a generic argument list follows (starts with '<')
            int newEnd = e;
            if (e < content.length() && content.charAt(e) == '<') {
                int match = findMatchingAngle(content, e);
                if (match != -1) {
                    newEnd = match + 1; // include the closing '>'
                } else {
                    // Unbalanced generics in the source; be conservative and do not consume further chars
                    newEnd = e;
                }
            }

            // Replace the full type token (including generics if found) with "any"
            out.append("any");

            // advance last to the end of the consumed span
            last = newEnd;

            // advance matcher search region to the new last position
            if (last < content.length()) {
                m.region(last, content.length());
            } else {
                break;
            }
        }

        // append the rest
        out.append(content.substring(last));
        return out.toString();
    }

    /**
     * Find matching '>' for a '<' at position 'start' (start points to the '<' char).
     * Handles nested '<' / '>' pairs and ignores other characters.
     * Returns index of matching '>' or -1 if not found.
     */
    private static int findMatchingAngle(String text, int start) {
        if (text == null || start < 0 || start >= text.length() || text.charAt(start) != '<') {
            return -1;
        }
        int depth = 0;
        for (int i = start; i < text.length(); i++) {
            char c = text.charAt(i);
            if (c == '<') depth++;
            else if (c == '>') {
                depth--;
                if (depth == 0) return i;
            }
        }
        return -1; // no match found
    }

    public static String serializeGenerics() {
        StringBuilder sb = new StringBuilder();
        sb.append("//Generics information:\n");
        for (Tuple<String, Integer> generic : generics) {
            sb.append(String.format("//%s:%s\n", generic.x, generic.y));
        }
        return sb.toString();
    }

    public static void loadGenericsFromStream(InputStream stream) throws Exception {
        List<String> doc =
                new BufferedReader(new InputStreamReader(stream,
                        StandardCharsets.UTF_8)).lines().collect(Collectors.toList());
        loadGenericsLines(doc);
    }

    public static void loadGenericsLines(List<String> lines) throws Exception {
        for (String line : lines) {
            if (!line.equals("")) {
                while (line.startsWith("/")) {
                    line = line.substring(1, line.length());
                }
                String[] parts = line.split(":");
                if (parts.length != 2) {
                    throw new Exception(String.format("Invalid generic info(%s)", line));
                }
                externalGenerics.add(new Tuple<>(parts[0], Integer.parseInt(parts[1])));
            }
        }
    }

    public static void loadGenerics(File inputFile) throws Exception {
        System.out.println("loadGenerics from file: " + inputFile.getAbsolutePath());
        try {
            List<String> lines = Files.readAllLines(inputFile.toPath());
            loadGenericsLines(lines);
        } catch (Exception e) {
            throw new Exception(String.format("%s in file %s", e.getMessage(), inputFile));
        }
    }

    /**
     * Compatibility API: limited/safe replaceGenericsInText used by other steps/tools.
     * Only appends "<any,...>" for classes we know are generic (from generics + externalGenerics).
     */
    public static String replaceGenericsInText(String content) {
        String any = "any";
        String result = content;

        List<Tuple<String, Integer>> allGenerics = Stream.concat(generics.stream(), externalGenerics.stream()).collect(Collectors.toList());

        for (Tuple<String, Integer> generic : allGenerics) {
            result = replaceNonGenericUsage(result, generic.x, generic.y, any);
            String globalAliasedClassName = getGlobalAliasedClassName(generic.x);
            if (!generic.x.equals(globalAliasedClassName)) {
                result = replaceNonGenericUsage(result, globalAliasedClassName, generic.y, any);
            }
        }

        return result;
    }

    private static String replaceNonGenericUsage(String content, String className, Integer occurencies, String javalangObject) {
        // AppendReplacement-based approach to avoid regex replacement pitfalls.
        Pattern usedAsNonGenericPattern = Pattern.compile(className.replace(".", "\\.") + "(?<Suffix>[^a-zA-Z\\d\\.\\$\\<])");
        Matcher matcher = usedAsNonGenericPattern.matcher(content);

        if (!matcher.find())
            return content;

        List<String> arguments = new ArrayList<>();
        for (int i = 0; i < occurencies; i++) {
            arguments.add(javalangObject);
        }
        String classSuffix = "<" + String.join(",", arguments) + ">";

        matcher.reset();
        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            String suffix = matcher.group("Suffix");
            String replacement = className + classSuffix + suffix;
            replacement = Matcher.quoteReplacement(replacement);
            matcher.appendReplacement(sb, replacement);
        }
        matcher.appendTail(sb);
        return sb.toString();
    }

    private String getExtendsLine(JavaClass currClass, TypeDefinition typeDefinition) {
        String override = this.extendsOverrides.get(currClass.getClassName());
        if (override != null) {
            System.out.println(String.format("Found extends override for class %s - %s", currClass.getClassName(), override));
            return " extends " + override;
        }
        if (typeDefinition != null) {
            StringBuilder result = new StringBuilder();
            ReferenceType parent = typeDefinition.getParent();

            List<ReferenceType> interfaces = typeDefinition.getInterfaces();
            if (parent != null) {
                result.append(" extends ");
                result.append(getTypeScriptTypeFromJavaType(parent, typeDefinition));
            }
            if (interfaces.size() == 1 || (this.allGenericImplements && interfaces.size() > 0)) {
                result.append(" implements ");

                for (ReferenceType referenceType : interfaces) {
                    String tsType = getTypeScriptTypeFromJavaType(referenceType, typeDefinition);
                    if (!this.isPrimitiveTSType(tsType)) {
                        result.append(tsType + ", ");
                    }
                }
                result.deleteCharAt(result.lastIndexOf(","));
            }
            return result.toString();
        } else {
            JavaClass superClass = getSuperClass(currClass);
            List<JavaClass> interfaces = getInterfaces(currClass);
            if (interfaces.size() == 1 && superClass == null && currClass.getSuperclassName().equals(DtsApi.JavaLangObject)) {
                superClass = interfaces.get(0);
                interfaces.clear();
            }
            return getExtendsLine(superClass, interfaces);
        }
    }

    private String getExtendsLine(JavaClass superClass, List<JavaClass> interfaces) {
        StringBuilder implementsSegmentSb = new StringBuilder();
        String implementsSegment = "";
        if (interfaces.size() > 0) {
            implementsSegmentSb.append(" implements ");

            for (JavaClass clazz : interfaces) {
                String implementedInterface = clazz.getClassName().replaceAll("\\$", "\\.");
                if (!typeBelongsInCurrentTopLevelNamespace(implementedInterface)) {
                    implementedInterface = getAliasedClassName(implementedInterface);
                }

                implementsSegmentSb.append(implementedInterface + ", ");
            }

            implementsSegment = implementsSegmentSb.substring(0, implementsSegmentSb.lastIndexOf(","));

        }

        if (superClass != null) {
            String extendedClass = superClass.getClassName().replaceAll("\\$", "\\.");

            if (!extendedClass.equals(DtsApi.JavaLangObject)) {
                // check for type override
                String override = this.typeOverrides.get(extendedClass);
                if (override != null) {
                    System.out.println(String.format("Found type override for class %s - %s", extendedClass, override));
                    extendedClass = override;
                }
            }

            if (!typeBelongsInCurrentTopLevelNamespace(extendedClass)) {
                extendedClass = getAliasedClassName(extendedClass);
            }

            return " extends " + extendedClass + implementsSegment;
        } else {
            return implementsSegment;
        }
    }

    private String getAliasedClassName(String className) {
        return mangleRootClassname(className);
    }

    private boolean typeBelongsInCurrentTopLevelNamespace(String className) {
        return className.startsWith(this.namespaceParts[0] + ".");
    }

    private static String getGlobalAliasedClassName(String className) {
        String[] parts = className.split("\\.");
        String rootNamespace = parts[0];
        if (globalAliases.containsKey(parts[0])) {
            String aliasedNamespace = globalAliases.get(rootNamespace);
            parts = Arrays.copyOfRange(parts, 1, parts.length);
            String result = aliasedNamespace;
            if (parts.length > 0) {
                result += "." + String.join(".", parts);
            }
            return result;
        } else {
            return className;
        }
    }

    private static void addImport(String importToAdd) {
        if (!imports.stream().anyMatch(x -> x.equals(importToAdd))) {
            imports.add(importToAdd);
        }
    }

    private String mangleRootClassname(String className) {
        String[] parts = className.split("\\.");
        String rootNamespace = parts[0];
        if (globalAliases.containsKey(parts[0])) {
            String aliasedNamespace = DtsApi.globalAliases.get(rootNamespace);
            String aliasedType = aliasedTypes.get(rootNamespace);
            if (aliasedType == null) {
                aliasedTypes.put(rootNamespace, aliasedNamespace);
                addImport(String.format("import %s = %s;\n", aliasedNamespace, rootNamespace));
            }

            parts = Arrays.copyOfRange(parts, 1, parts.length);
            String result = aliasedNamespace;
            if (parts.length > 0) {
                result += "." + String.join(".", parts);
            }
            return result;
        }
        return className;
    }


    private Deque<String> namespaceStack = new ArrayDeque<>();

    /**
     * Close namespaces that are not part of currClass's desired namespace path.
     * This is stack-based: namespaceStack contains the currently open namespace parts
     * (in order). We compute the desired namespace path for currClass (all parts except the final
     * class name) and pop/emit closing braces for any stack entries not in that prefix.
     *
     * Returns the current namespace indentation level (namespaceStack.size()).
     */
    private int closePackage(JavaClass prevClass, JavaClass currClass) {
        // desired namespace segments for currClass (all parts except last/class name)
        String[] desiredParts;
        if (currClass != null) {
            String curr = currClass.getClassName().replace('$', '.');
            String[] parts = curr.split("\\.");
            if (parts.length <= 1) {
                desiredParts = new String[0];
            } else {
                desiredParts = Arrays.copyOfRange(parts, 0, parts.length - 1);
            }
        } else {
            desiredParts = new String[0];
        }

        // compare namespaceStack with desiredParts to find common prefix
        List<String> stackList = new ArrayList<>(namespaceStack);
        int common = 0;
        while (common < stackList.size() && common < desiredParts.length) {
            if (stackList.get(common).equals(desiredParts[common])) {
                common++;
            } else {
                break;
            }
        }

        // pop & close namespaces that are beyond the common prefix
        for (int i = stackList.size() - 1; i >= common; i--) {
            // the tab level for closing should match the index of the namespace being closed
            String tabs = getTabs(i);
            sbContent.appendln(tabs + "}");
            namespaceStack.removeLast();
        }

        // indentation is the number of open namespaces remaining
        return namespaceStack.size();
    }

    /**
     * Open namespaces needed for currClass. Assumes closePackage(prevClass, currClass) was (or will be)
     * called to close non-matching namespaces first; nevertheless this method is defensive and computes
     * the common prefix against the current namespaceStack state to open only the missing segments.
     *
     * Returns the current namespace indentation level (namespaceStack.size()) after opening.
     */
    private int openPackage(JavaClass prevClass, JavaClass currClass) {
        // desired namespace segments for currClass (all parts except last/class name)
        String curr = currClass.getClassName().replace('$', '.');
        String[] parts = curr.split("\\.");
        String[] desiredParts = (parts.length <= 1) ? new String[0] : Arrays.copyOfRange(parts, 0, parts.length - 1);

        // current stack as list for prefix comparison
        List<String> stackList = new ArrayList<>(namespaceStack);

        int common = 0;
        while (common < stackList.size() && common < desiredParts.length) {
            if (stackList.get(common).equals(desiredParts[common])) {
                common++;
            } else {
                break;
            }
        }

        // open the remaining desired namespaces (indices common .. desiredParts.length-1)
        for (int i = common; i < desiredParts.length; i++) {
            String part = desiredParts[i];
            if (part == null || part.isEmpty()) continue;
            String tabs = getTabs(i);
            if (i == 0) {
                sbContent.append(tabs + "declare ");
            } else {
                sbContent.append(tabs + "export ");
            }
            sbContent.appendln("namespace " + part + " {");
            namespaceStack.addLast(part);
        }

        return namespaceStack.size();
    }

    private void processInterfaceConstructor(JavaClass classInterface, TypeDefinition typeDefinition, List<Method> allInterfacesMethods) {
        String tabs = getTabs(this.indent + 1);

        generateInterfaceConstructorContent(classInterface, typeDefinition, tabs, allInterfacesMethods);
    }

    private void generateInterfaceConstructorContent(JavaClass classInterface, TypeDefinition typeDefinition, String tabs, List<Method> methods) {
        generateInterfaceConstructorCommentBlock(classInterface, tabs);

        sbContent.appendln(tabs + "public constructor(implementation: {");

        for (Method m : methods) {
            sbContent.append(getTabs(this.indent + 2) + getMethodName(m) + getMethodParamSignature(classInterface, typeDefinition, m));
            String bmSig = "";
            if (!isConstructor(m)) {
                bmSig += ": " + safeGetTypeScriptType(this.getReturnType(m), typeDefinition);
            }
            sbContent.appendln(bmSig + ";");
        }

        sbContent.appendln(tabs + "});");

        sbContent.appendln(tabs + "public constructor();");
    }

    private void generateInterfaceConstructorCommentBlock(JavaClass classInterface, String tabs) {
        sbContent.appendln(tabs + "/**");
        sbContent.appendln(tabs + " * Constructs a new instance of the " + classInterface.getClassName() + " interface with the provided implementation.");
        sbContent.appendln(tabs + " * An empty constructor exists calling super().");
        sbContent.appendln(tabs + " */");
    }

    private List<JavaClass> getAllInterfaces(JavaClass classInterface) {
        ArrayList<JavaClass> interfaces = new ArrayList<>();

        Queue<JavaClass> classQueue = new LinkedList<>();
        classQueue.add(classInterface);

        while (!classQueue.isEmpty()) {
            JavaClass clazz = classQueue.poll();

            interfaces.add(clazz);

            classQueue.addAll(getInterfaces(clazz));
        }

        return interfaces;
    }

    private List<JavaClass> getAllSuperClasses(JavaClass clazz) {
        ArrayList<JavaClass> classes = new ArrayList<>();

        Queue<JavaClass> classQueue = new LinkedList<>();
        classQueue.add(clazz);

        while (!classQueue.isEmpty()) {
            JavaClass currClazz = classQueue.poll();

            if (currClazz.getClassName().equals(DtsApi.JavaLangObject)) {
                break;
            }

            classes.add(currClazz);

            JavaClass sClass = getSuperClass(currClazz);

            if (sClass != null) {
                classQueue.add(getSuperClass(currClazz));
            }
        }

        return classes;
    }

    private List<JavaClass> getInterfaces(JavaClass classInterface) {
        List<JavaClass> interfaces = new ArrayList<>();

        String[] interfaceNames = classInterface.getInterfaceNames();
        for (String intface : interfaceNames) {
            JavaClass clazz1 = ClassRepo.findClass(intface);

            // Added guard to prevent NullPointerExceptions in case libs are not provided - the dev can choose to include it and rerun the generator
            if (clazz1 == null) {
                if (!warnedMissing.contains(intface)) {
                    warnedMissing.add(intface);
                    System.out.println("ignoring definitions in missing dependency: " + intface);
                }
                continue;
            }

            String className = clazz1.getClassName();

            // TODO: Pete: Hardcoded until we figure out how to go around the 'type incompatible with Object' issue
            if (className.equals("java.util.Iterator") ||
                    className.equals("android.animation.TypeEvaluator") ||
                    className.equals("java.lang.Comparable") ||
                    className.startsWith("java.util.function")) {
                continue;
            }

            interfaces.add(clazz1);
        }

        return interfaces;
    }

    private List<Method> getAllInterfacesMethods(Collection<JavaClass> interfaces) {
        ArrayList<Method> allInterfacesMethods = new ArrayList<>();

        for (JavaClass clazz : interfaces) {
            Method[] intfaceMethods = clazz.getMethods();
            allInterfacesMethods.addAll(Arrays.asList(intfaceMethods));
        }

        return allInterfacesMethods;
    }

    private Set<Field> getAllInterfacesFields(List<JavaClass> interfaces) {
        HashSet<Field> allInterfacesFields = new HashSet<>();

        for (JavaClass clazz : interfaces) {
            allInterfacesFields.addAll(Arrays.asList(clazz.getFields()));
        }

        return allInterfacesFields;
    }

    //method related
    private void processMethod(Method method, JavaClass clazz, TypeDefinition typeDefinition, Set<String> methodsSet) {
        String name = method.getName();

        if (shouldIgnoreMember(name)) return;

        if (method.isSynthetic() || (!method.isPublic() && !method.isProtected())) {
            return;
        }

        // TODO: Pete: won't generate static initializers as invalid typescript properties
        if (clazz.isInterface() && name.equals("<clinit>")) {
            return;
        }

        String tabs = getTabs(this.indent + 1);

        cacheMethodBySignature(method); //cached in "mapNameMethod"

        //generate base method content
        if (baseMethodNames.contains(name)) {
            for (Method baseMethod : baseMethods) {
                if (baseMethod.getName().equals(name)) {
                    String sig = getMethodFullSignature(baseMethod);
                    if (!mapNameMethod.containsKey(sig)) {
                        mapNameMethod.put(sig, baseMethod);
                        methodsSet.add(generateMethodContent(clazz, typeDefinition, tabs, baseMethod));
                    }
                }
            }
        }

        methodsSet.add(generateMethodContent(clazz, typeDefinition, tabs, method));
    }

    private boolean methodIsDeprecated(Method method) {
        return Arrays.stream(
                        method
                                .getAttributes())
                .anyMatch(x ->
                        x.getClass()
                                .isAssignableFrom(org.apache.bcel.classfile.Deprecated.class));
    }

    private String generateMethodContent(JavaClass clazz, TypeDefinition typeDefinition, String tabs, Method method) {
        StringBuilder2 sbTemp = new StringBuilder2();
        if (methodIsDeprecated(method)) {
            sbTemp.appendln(tabs + "/** @deprecated */");
        }

        sbTemp.append(tabs + "public ");

        if (method.isStatic()) {
            sbTemp.append("static ");
        }

        sbTemp.append(getMethodName(method) + getMethodParamSignature(clazz, typeDefinition, method));
        String bmSig = "";
        if (!isConstructor(method)) {
            bmSig += ": " + safeGetTypeScriptType(this.getReturnType(method), typeDefinition);
        }

        sbTemp.append(bmSig + ";");

        return sbTemp.toString();
    }

    private Signature getSignature(FieldOrMethod fieldOrMethod) {
        for (Attribute attribute : fieldOrMethod.getAttributes()) {
            if (attribute instanceof Signature) {
                return (Signature) attribute;
            }
        }
        return null;
    }

    private Signature getSignature(JavaClass clazz) {
        for (Attribute attribute : clazz.getAttributes()) {
            if (attribute instanceof Signature) {
                return (Signature) attribute;
            }
        }
        return null;
    }

    private Type[] getArgumentTypes(Method m) {
        Signature signature = this.getSignature(m);
        if (signature != null) {
            Matcher matcher = methodSignature.matcher(signature.getSignature());
            if (matcher.matches()) {
                String argumentsSignature = matcher.group(1);
                if (argumentsSignature.equals("")) {
                    return m.getArgumentTypes();
                }
                try {
                    List<Type> referenceTypes = DtsApi.getTypeParameters(argumentsSignature);
                    Type[] types = new Type[referenceTypes.size()];
                    types = referenceTypes.toArray(types);
                    return types;
                } catch (ClassCastException classCast) {
                    return m.getArgumentTypes();
                }
            }
        }
        return m.getArgumentTypes();
    }

    private static List<Type> getTypeParameters(String signature) {
        GenericSignatureParser parser = new GenericSignatureParser("(" + signature + ")V");
        List<Type> types = new ArrayList<>();
        Iterator<String> iter = parser.parameterSignatureIterator();

        while (iter.hasNext()) {
            String parameterString = iter.next();
            Type t = GenericUtilities.getType(parameterString);
            if (t == null) {
                return null;
            }

            types.add(t);
        }

        return types;
    }

    // gets the full field type including generic types
    private Type getFieldType(Field f) {
        Signature signature = this.getSignature(f);
        if (signature != null) {
            String typeSignature = signature.getSignature();
            if (typeSignature.equals("")) {
                return f.getType();
            }
            try {
                return GenericUtilities.getType(typeSignature);
            } catch (ClassCastException classCast) {
                return f.getType();
            }
        }
        return f.getType();
    }

    // gets the full method return type including generic types
    private Type getReturnType(Method m) {
        Signature signature = this.getSignature(m);
        if (signature != null) {
            Matcher matcher = methodSignature.matcher(signature.getSignature());
            if (matcher.matches()) {
                String returnSignature = matcher.group(2);
                if (isVoid.matcher(returnSignature).matches()) {
                    return m.getReturnType(); // returning void
                }
                return GenericUtilities.getType(returnSignature);
            }
        }
        return m.getReturnType();
    }

    private void writeMethods(Set<String> methodsSet) {
        for (String m : methodsSet) {
            sbContent.appendln(m);
        }
    }

    private void cacheMethodBySignature(Method m) {
        String methodName = getMethodFullSignature(m);
        if (!mapNameMethod.containsKey(methodName)) {
            mapNameMethod.put(methodName, m);
        }
    }

    private void loadBaseMethods(JavaClass clazz) {
        baseMethodNames = new HashSet<String>();
        baseMethods = new ArrayList<Method>();

        JavaClass currClass = getSuperClass(clazz);

        if (currClass != null) {

            //get all base methods and method names
            while (true && currClass != null) {
                boolean isJavaLangObject = currClass.getClassName().equals(DtsApi.JavaLangObject);

                for (Method m : currClass.getMethods()) {
                    if (!m.isSynthetic() && (m.isPublic() || m.isProtected())) {
                        // don't write empty constructor typings for java objects
                        if (isJavaLangObject && isConstructor(m)) {
                            continue;
                        }

                        baseMethods.add(m);
                        baseMethodNames.add(m.getName());
                    }
                }

                if (isJavaLangObject) {
                    break;
                }

                String scn = currClass.getSuperclassName();
                JavaClass baseClass = ClassRepo.findClass(scn);
                assert baseClass != null : "baseClass=" + currClass.getClassName() + " scn=" + scn;
                currClass = baseClass;
            }
        }
    }

    private JavaClass getSuperClass(JavaClass clazz) {
        if (clazz.getClassName().equals(DtsApi.JavaLangObject)) {
            return null;
        }

        String scn = clazz.getSuperclassName();
        String override = this.superOverrides.get(clazz.getClassName());
        if (override != null) {
            scn = override;
        }

        if (scn.equals("") || scn == null) {
            return null;
        }
        JavaClass currClass = ClassRepo.findClass(scn);
        return currClass;
    }

    private String getMethodFullSignature(Method m) {
        String sig = m.getName() + m.getSignature();
        return sig;
    }

    private boolean isConstructor(Method m) {
        return m.getName().equals("<init>");
    }

    private String getMethodName(Method m) {
        String name = m.getName();

        if (isConstructor(m)) {
            name = "constructor";
        }

        if (!jsFieldPattern.matcher(name).matches()) {
            name = "\"" + name + "\"";
        }

        return name;
    }

    private String getMethodParamSignature(JavaClass clazz, TypeDefinition typeDefinition, Method m) {
        LocalVariableTable table = m.getLocalVariableTable();
        LocalVariable[] variables = table != null ? table.getLocalVariableTable() : null;

        StringBuilder sb = new StringBuilder();
        sb.append("(");
        int idx = 0;
        // track existing names in this method scope to deduplicate sanitized names
        Set<String> existingNames = new HashSet<>();
        for (Type type : this.getArgumentTypes(m)) {
            if (idx > 0) {
                sb.append(", ");
            }

            int localVarIndex = m.isStatic() ? idx : idx + 1; // skip "this" variable name
            LocalVariable localVariable = variables != null && variables.length > localVarIndex
                    ? variables[localVarIndex]
                    : null;

            String nameToUse;
            if (localVariable != null) {
                String name = localVariable.getName();

                // Sanitize Kotlin synthetic parameter names like <set-?>
                if (name.startsWith("<") && name.endsWith(">")) {
                    // For setter methods, derive parameter name from method name
                    String methodName = m.getName();
                    if (methodName.startsWith("set") && methodName.length() > 3) {
                        // setInitialDelay -> initialDelay
                        name = Character.toLowerCase(methodName.charAt(3)) + methodName.substring(4);
                    } else {
                        // Fallback to "value" for other synthetic names
                        name = "value";
                    }
                }

                // sanitize and truncate to max length 10, deduplicate in scope
                nameToUse = sanitizeIdentifier(name, existingNames, 10);

                if (reservedJsKeywords.contains(nameToUse)) {
                    nameToUse = nameToUse + "_";
                }

                sb.append(nameToUse);
            } else {
                // interface declarations will fallback to paramN since they don't have names in the bytecode
                String fallback = "param" + idx;
                nameToUse = sanitizeIdentifier(fallback, existingNames, 10);
                sb.append(nameToUse);
            }
            idx++;
            sb.append(": ");

            String paramTypeName = safeGetTypeScriptType(type, typeDefinition);

            if (paramTypeName.startsWith("java.util.function")) {
                sb.append("any /* " + paramTypeName + "*/");
            } else {
                addReference(type);
                sb.append(paramTypeName);
            }
        }
        sb.append(")");
        String sig = sb.toString();
        return sig;
    }

    //field related
    private void processField(Field f, JavaClass clazz, TypeDefinition typeDefinition) {
        String fieldName = f.getName();

        if (shouldIgnoreMember(fieldName)) return;

        //
        // handle member names that conflict with an inner class. For example:
        //
        // class OuterClass {
        //   public static InnerClass: OuterClass.InnerClass;
        //
        //   class InnerClass {}   
        // }
        //
        // the static field on the OuterClass will have a field type of OuterClass$InnerClass
        // which we can check for and skip writing the static field to the definitions
        // since typescript cannot handle this scenario well.
        //

        // the name of the field eg. InnerClass
        String name = f.getName();

        // the type of the field eg. OuterClass$InnerClass
        String fieldTypeString = this.getFieldType(f).toString();

        // we check if the name matches OuterClass (which we are currently in) + "$" + InnerClass
        if (fieldTypeString.equals(clazz.getClassName() + "$" + name)) {
            return;
        }

        String tabs = getTabs(this.indent + 1);

        if (f.getConstantValue() != null) {
            sbContent.appendln( tabs + "/**");
            sbContent.appendln( tabs + "* "  + f.getConstantValue());
            sbContent.appendln( tabs + "*/");
        }
        sbContent.append(tabs + "public ");
        if (f.isStatic()) {
            sbContent.append("static ");
        }
      
        if (!jsFieldPattern.matcher(name).matches()) {
            name = "\"" + name + "\"";
        }
        sbContent.appendln(name + ": " + safeGetTypeScriptType(this.getFieldType(f), typeDefinition) + ";");

    }

    private void addClassField(JavaClass clazz) {
        String tabs = getTabs(this.indent + 1);
        sbContent.append(String.format("%spublic static class: java.lang.Class<%s>;\n", tabs, clazz.getClassName().replace("$", ".")));
    }

    private boolean isPrimitiveTSType(String tsType) {
        switch (tsType) {
            case "void":
            case "string":
            case "boolean":
            case "number":
                return true;
            default:
                return false;
        }
    }

    /**
     * The core conversion: produces balanced TypeScript type strings (including nested generics).
     * Also synthesizes "<any,...>" for raw generic usages if we know class arity.
     */
    private String getTypeScriptTypeFromJavaType(Type type, TypeDefinition typeDefinition) {

        // early check for object types and ignored namespaces:
        if (type instanceof ObjectType) {
            String className = ((ObjectType) type).getClassName().replace('$', '.');
            // compute namespaceOnly = everything except the simple class name
            String[] parts = className.split("\\.");
            if (parts.length > 1) {
                String namespaceOnly = String.join(".", Arrays.copyOf(parts, parts.length - 1));
                for (String ignored : getIgnoredNamespaces()) {
                    if (namespaceOnly.equals(ignored) || namespaceOnly.startsWith(ignored + ".")) {
                        return "any"; // short-circuit
                    }
                }
            }
        }

        String tsType;
        String typeSig = type.getSignature();

        switch (typeSig) {
            case "V":
                tsType = "void";
                break;
            case "C":
                tsType = "string";
                break;
            case "Z":
                tsType = "boolean";
                break;
            case "B":
            case "S":
            case "I":
            case "J":
            case "F":
            case "D":
                tsType = "number";
                break;
            case "Ljava/lang/CharSequence;":
            case "Ljava/lang/String;":
                tsType = "string";
                break;
            default:
                StringBuilder sb = new StringBuilder();
                convertToTypeScriptType(type, typeDefinition, sb);
                tsType = sb.toString();

                if (tsType.startsWith("java.util.function") || isPrivateGoogleApiClass(tsType)) {
                    tsType = "any /* " + tsType + "*/";
                }
        }

        return tsType;
    }

    private void convertToTypeScriptType(Type type, TypeDefinition typeDefinition, StringBuilder tsType) {
        boolean isPrimitive = type instanceof BasicType;
        boolean isArray = type instanceof ArrayType;
        boolean isObjectType = type instanceof ObjectType;
        boolean isGenericObjectType = type instanceof GenericObjectType;

        if (isPrimitive) {
            if (type.equals(Type.BOOLEAN)) {
                tsType.append("boolean");
            } else if (type.equals(Type.BYTE) || type.equals(Type.SHORT)
                    || type.equals(Type.INT) || type.equals(Type.LONG)
                    || type.equals(Type.FLOAT) || type.equals(Type.DOUBLE)) {
                tsType.append("number");
            } else if (type.equals(Type.CHAR)) {
                tsType.append("string");
            } else {
                throw new RuntimeException("Unexpected type=" + type.getSignature());
            }
        } else if (isArray) {
            tsType.append("androidNative.Array<");
            Type elementType = ((ArrayType) type).getElementType();
            StringBuilder elemSb = new StringBuilder();
            convertToTypeScriptType(elementType, typeDefinition, elemSb);
            tsType.append(elemSb.toString());
            tsType.append(">");
        } else if (type.equals(Type.STRING)) {
            tsType.append("string");
        } else if (isObjectType) {
            // Generic variable handling (type variables like T)
            if (isGenericObjectType) {
                GenericObjectType genericObjectType = (GenericObjectType) type;
                String genericVariable = genericObjectType.getVariable();
                final String genericVarSanitized = (genericVariable == null) ? null : genericVariable.replaceAll("[<>]", "");
                if (genericVarSanitized != null && isWordPattern.matcher(genericVarSanitized).matches()) {
                    if (typeDefinition != null && typeDefinition.getGenericDefinitions() != null
                            && typeDefinition.getGenericDefinitions().stream()
                            .filter(definition -> definition.getLabel().equals(genericVarSanitized)).count() > 0
                            && ((ObjectType) typeDefinition.getParent()).getClassName().equals(DtsApi.JavaLangObject)) {
                        tsType.append(genericObjectType.getVariable().replaceAll("[<>]", ""));
                        addReference(type);
                        return;
                    }
                }
            }

            ObjectType objType = (ObjectType) type;
            String typeName = objType.getClassName();
            if (typeName.contains("$")) {
                typeName = typeName.replaceAll("\\$", "\\.");
            }

            if (this.typeOverrides.containsKey(typeName)) {
                typeName = this.typeOverrides.get(typeName);
            }

            String emittedName;
            if (!typeBelongsInCurrentTopLevelNamespace(typeName) && !typeName.startsWith("java.util.function.") && !isPrivateGoogleApiClass(typeName)) {
                emittedName = getAliasedClassName(typeName);
            } else {
                emittedName = typeName;
            }
            tsType.append(emittedName);

            // Render explicit parameters if present. If none but we have arity info -> synthesize any args.
            if (type instanceof GenericObjectType) {
                GenericObjectType genericType = (GenericObjectType) type;
                if (genericType.getNumParameters() > 0) {
                    List<String> paramStrings = new ArrayList<>();
                    for (ReferenceType refType : genericType.getParameters()) {
                        StringBuilder paramSb = new StringBuilder();
                        convertToTypeScriptType(refType, typeDefinition, paramSb);
                        paramStrings.add(paramSb.toString());
                    }
                    tsType.append(formatGenericArgs(paramStrings));
                } else {
                    int arity = getGenericArityForClassName(typeName);
                    if (arity == 0) {
                        String globalAliased = getGlobalAliasedClassName(typeName);
                        if (!globalAliased.equals(typeName)) {
                            arity = getGenericArityForClassName(globalAliased);
                        }
                    }
                    if (arity > 0) {
                        List<String> anyArgs = new ArrayList<>();
                        for (int i = 0; i < arity; i++) anyArgs.add("any");
                        tsType.append(formatGenericArgs(anyArgs));
                    }
                }
            } else {
                int arity = getGenericArityForClassName(typeName);
                if (arity == 0) {
                    String globalAliased = getGlobalAliasedClassName(typeName);
                    if (!globalAliased.equals(typeName)) {
                        arity = getGenericArityForClassName(globalAliased);
                    }
                }
                if (arity > 0) {
                    List<String> anyArgs = new ArrayList<>();
                    for (int i = 0; i < arity; i++) anyArgs.add("any");
                    tsType.append(formatGenericArgs(anyArgs));
                }
            }

            addReference(type);
        } else {
            throw new RuntimeException("Unhandled type=" + type.getSignature());
        }
    }

    private void addReference(Type type) {
        boolean isObjectType = type instanceof ObjectType;
        if (isObjectType) {
            ObjectType objType = (ObjectType) type;
            String typeName = objType.getClassName();
            if (!typeName.equals(currentFileClassname)) {
                boolean isNested = typeName.contains("$");
                if (!isNested) {
                    references.add(typeName);
                }
            }
        }
    }

    private List<FieldOrMethod> getMembers(JavaClass javaClass, List<JavaClass> interfaces) {
        Set<String> methodNames = new HashSet<>();
        ArrayList<FieldOrMethod> members = new ArrayList<>();

        List<Method> allInterfacesMethods = getAllInterfacesMethods(interfaces);
        List<Method> methods = new ArrayList<>();
        methods.addAll(Arrays.asList(javaClass.getMethods()));
        methods.addAll(allInterfacesMethods);

        for (Method m : methods) {
            if ((m.isPublic() || m.isProtected()) && !m.isSynthetic()) {
                members.add(m);
                methodNames.add(m.getName());
            }
        }
        for (Field f : javaClass.getFields()) {
            if ((f.isPublic() || f.isProtected()) && !f.isSynthetic() && !methodNames.contains(f.getName())) {
                members.add(f);
            }
        }

        return members;
    }

    // HELPER METHODS
    private boolean isNested(JavaClass javaClass) {
        boolean isNested = javaClass.getClassName().contains("$");
        return isNested;
    }

    private String getSimpleClassname(JavaClass javaClass) {
        String[] parts = javaClass.getClassName().replace('$', '.')
                .split("\\.");
        return parts[parts.length - 1];
    }

    private String getFullClassNameConcatenated(JavaClass javaClass) {
        String fullName = javaClass.getClassName().replaceAll("[$.]", "");
        return fullName;
    }

    // gets the suffix like <T extends javalangComparable<T>>
    private String getTypeSuffix(String fullClassName, TypeDefinition typeDefinition, String extendsLine) {
        if (typeDefinition == null) {
            return "";
        }
        List<TypeDefinition.GenericDefinition> genericDefinitions = typeDefinition.getGenericDefinitions();
        if (genericDefinitions != null) {
            List<String> parts = new ArrayList<>();
            String genericClassName = fullClassName.replace("$", ".");

            // remove the current class name if it already exists
            generics = generics.stream().filter(generic -> generic.x != genericClassName).collect(Collectors.toList());

            generics.add(new Tuple<>(fullClassName.replace("$", "."), genericDefinitions.size()));
            for (TypeDefinition.GenericDefinition definition : genericDefinitions) {
                parts.add(definition.getLabel());
            }
            return "<" + String.join(", ", parts) + "> ";
        } else {
            return "";
        }
    }

    private String getTabs(int count) {
        String tabs = new String(new char[count]).replace("\0", "\t");
        return tabs;
    }

    private boolean isPrivateGoogleApiMember(String memberName) {
        return memberName.startsWith("zz");
    }

    private boolean isObfuscated(String memberName) {
        if (this.ignoreObfuscatedNameLength > 0) {

            // basic test to remove obfuscated classes
            return memberName.length() <= this.ignoreObfuscatedNameLength && !memberName.equals("R");
        }
        return false;
    }

    private boolean shouldIgnoreMember(String memberName) {
        return isPrivateGoogleApiMember(memberName) || isObfuscated(memberName);
    }

    private boolean isPrivateGoogleApiClass(String name) {
        String[] classNameParts = name.replace('$', '.').split("\\.");
        return classNameParts.length > 0 && classNameParts[classNameParts.length - 1].startsWith("zz");
    }

    private void overrideFieldComparator() {
        BCELComparator<Field> cmp = Field.getComparator();

        Field.setComparator(new BCELComparator<>() {
            @Override
            public boolean equals(Field o, Field o1) {
                return o.getName().equals(o1.getName());
            }

            @Override
            public int hashCode(Field o) {
                return cmp.hashCode(o);
            }
        });
    }

    private void setOverrides() {
        this.setTypeOverrides();
        this.setExtendsOverrides();
        this.setSuperOverrides();
    }

    private void setExtendsOverrides() {
        // here we put extends overrides to avoid manual work to fix the generated .d.ts file
        this.extendsOverrides.put("android.renderscript.ProgramFragmentFixedFunction$Builder",
                "android.renderscript.Program.BaseProgramBuilder"); // android-17
        this.extendsOverrides.put("android.renderscript.ProgramVertexFixedFunction$Builder",
                "android.renderscript.ProgramVertex.Builder"); // android-17
        this.extendsOverrides.put("android.support.v4.app.JobIntentService$JobServiceEngineImpl",
                "android.support.v4.app.JobIntentService.CompatJobEngine"); // android-support
        this.extendsOverrides.put("com.telerik.widget.autocomplete.RadAutoCompleteTextView$SavedState",
                "com.telerik.widget.primitives.panels.RadScrollView.SavedState"); // nativescript-ui-autocomplete

        this.extendsOverrides.put("androidx.core.app.JobIntentService$JobServiceEngineImpl",
                "androidx.core.app.JobIntentService.CompatJobEngine"); // androidx

        this.extendsOverrides.put("androidx.core.text.PrecomputedTextCompat", "android.text.Spannable"); // androidx
        this.extendsOverrides.put("androidx.collection.ArrayMap", "java.util.Map"); // androidx
    }

    private void setSuperOverrides() {
        // here we put super overrides
        this.superOverrides.put("android.support.v4.view.GestureDetectorCompat", "android.view.GestureDetector"); // android-support
    }

    private void setTypeOverrides() {
        // here we put type overrides if we want to change return types of java.lang.Object for instance to any
        this.typeOverrides.put(DtsApi.JavaLangObject, "any");
        this.typeOverrides.put("java.lang.CharSequence", "string");
        this.typeOverrides.put("android.view.View.AccessibilityDelegate", "any");
        this.typeOverrides.put("android.view.PointerIcon", "any");
        this.typeOverrides.put("android.app.Person", "any");
        this.typeOverrides.put("android.app.RemoteAction", "any");
        this.typeOverrides.put("android.os.PersistableBundle", "any");
        this.typeOverrides.put("android.os.LocaleList", "any");
        this.typeOverrides.put("android.text.TextDirectionHeuristic", "any");
        this.typeOverrides.put("android.util.SizeF", "any");
        this.typeOverrides.put("android.util.Size", "any");
    }

    private void setGlobalAliases() {
        // here we put extends overrides to avoid manual work to fix the generated .d.ts file
        globalAliases.put("android", "globalAndroid");
    }

    private List<String> getIgnoredNamespaces() {
        // for some reason these namespaces are references but not existing, so we are replacing all types from these namespaces with "any"
        List<String> result = new ArrayList<>();

        result.add("kotlin");
        result.add("org.jetbrains");
        result.add("org.intellij");

        result.add("android.app.job");
        result.add("android.app.SharedElementCallback");
        result.add("android.arch");
        result.add("android.content.pm.ShortcutInfo");
        result.add("android.graphics.drawable.Icon");
        result.add("android.graphics.Outline");
        result.add("android.view.SearchEvent");
        result.add("android.view.KeyboardShortcutGroup");
        result.add("android.view.ViewStructure");
        result.add("android.view.textclassifier");
        result.add("android.telephony.mbms");
        result.add("android.text.PrecomputedText");
        result.add("android.media.browse");
        result.add("android.media.session");
        result.add("android.media.AudioAttributes");
        result.add("android.media.MediaMetadata");
        result.add("android.media.Rating");
        result.add("android.service.media");
        result.add("android.print");
        result.add("java.util.function");

        result.add("com.tom_roush.pdfbox.pdmodel.common.function"); // com.tom_roush:pdfbox-android:1.8.10.0

        return result;
    }

    private boolean isIgnoredNamespace() {
        String[] namespaceOnlyParts = Arrays.copyOf(namespaceParts, namespaceParts.length - 1);
        String namespace = String.join(".", namespaceOnlyParts);
        for (String ignoredNamespace : getIgnoredNamespaces()) {
            if (ignoredNamespace.equals(namespace) || namespace.startsWith(ignoredNamespace + ".")) {
                return true;
            }
        }
        return false;
    }

    // ---------- Helpers ----------
    private static String formatGenericArgs(List<String> args) {
        if (args == null || args.isEmpty()) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        sb.append("<");
        for (int i = 0; i < args.size(); i++) {
            if (i > 0) sb.append(",");
            sb.append(args.get(i));
        }
        sb.append(">");
        return sb.toString();
    }

    private static String shortHash(String s) {
        int h = 0x811c9dc5;
        for (int i = 0; i < s.length(); i++) {
            h ^= s.charAt(i);
            h *= 16777619;
        }
        String hex = Integer.toHexString(h);
        if (hex.length() <= 3) return hex;
        return hex.substring(hex.length() - 3);
    }

    private static String sanitizeIdentifier(String orig, Set<String> existing, int maxLen) {
        if (orig == null) orig = "";

        // Detect likely synthetic / Kotlin-generated parameter names:
        // - Kotlin synthetic names often look like "<set-...>" or contain '-' characters.
        // - Obfuscated or compiler-generated names may contain '$'.
        // If the original name is "clean" (only letters/digits/underscore), treat it as a real name
        // and do NOT aggressively truncate it to maxLen. We will still sanitize invalid chars,
        // ensure it doesn't start with a digit, and deduplicate in scope.
        boolean likelySynthetic = orig.startsWith("<") || orig.contains("-") || orig.contains("$") || orig.contains(">") || !orig.matches("^[A-Za-z0-9_]+$");

        // Step 1: remove angle brackets that commonly appear in synthetic names
        String s = orig.replaceAll("[<>]", "");

        // Step 2: replace invalid chars with underscore (this also converts '-' -> '_')
        s = s.replaceAll("[^A-Za-z0-9_]", "_");

        // Step 3: collapse consecutive underscores and trim leading/trailing underscores
        s = s.replaceAll("_+", "_");
        s = s.replaceAll("^_+|_+$", "");
        if (s.isEmpty()) {
            s = "_param";
        }

        // Step 4: if starts with digit, prefix underscore (valid TS identifier)
        if (s.matches("^[0-9].*")) {
            s = "_" + s;
        }

        // If the name looks synthetic, enforce maxLen (truncate + short hash suffix).
        // If it looks like a real/meaningful identifier, avoid truncation: allow the original length.
        if (likelySynthetic) {
            if (s.length() > maxLen) {
                String hash = shortHash(orig);
                int baseLen = Math.max(1, maxLen - 4); // reserve '_' + 3 hex chars
                String base = s.substring(0, baseLen);
                s = base + "_" + hash; // final length <= maxLen
            }
        } else {
            // keep full meaningful name (no truncation). However to be defensive, if it's absurdly long
            // we still cap it to a much larger limit to avoid unlimited growth; but not the tiny maxLen.
            int generousLimit = Math.max(maxLen, 128);
            if (s.length() > generousLimit) {
                String hash = shortHash(orig);
                int baseLen = Math.max(1, generousLimit - 4);
                String base = s.substring(0, baseLen);
                s = base + "_" + hash;
            }
        }

        // Step 5: deduplicate within scope; append numeric suffixes as needed.
        if (existing != null) {
            String candidate = s;
            int i = 1;
            while (existing.contains(candidate)) {
                String suffix = "_" + i;
                // If we previously didn't truncate (meaningful name) allow the new candidate to grow,
                // but for synthetic names keep within maxLen.
                if (likelySynthetic) {
                    int allowedBase = Math.max(1, maxLen - suffix.length());
                    String base = s.length() > allowedBase ? s.substring(0, allowedBase) : s;
                    candidate = base + suffix;
                } else {
                    // for meaningful names allow adding suffix without aggressive truncation (but cap at generousLimit)
                    int generousLimit = Math.max(maxLen, 128);
                    int allowedBase = Math.max(1, generousLimit - suffix.length());
                    String base = s.length() > allowedBase ? s.substring(0, allowedBase) : s;
                    candidate = base + suffix;
                }
                i++;
            }
            s = candidate;
            existing.add(s);
        }

        return s;
    }

    private static int getGenericArityForClassName(String className) {
        for (Tuple<String, Integer> g : generics) {
            if (g.x.equals(className)) {
                return g.y;
            }
        }
        for (Tuple<String, Integer> g : externalGenerics) {
            if (g.x.equals(className)) {
                return g.y;
            }
        }
        return 0;
    }


    /**
     * Balance a single type string by appending missing '>' characters.
     * This operates only on the single type string (parameter or return).
     */
    private static String balanceAngleBracketsForType(String typeText) {
        if (typeText == null || typeText.isEmpty()) return typeText;
        int opens = 0;
        for (int i = 0; i < typeText.length(); i++) {
            char c = typeText.charAt(i);
            if (c == '<') opens++;
            else if (c == '>') {
                opens--;
            }
        }
        if (opens > 0) {
            System.out.println(String.format("Found unbalanced. %s", typeText));
            StringBuilder sb = new StringBuilder(typeText);
            for (int j = 0; j < opens; j++) sb.append('>');
            return sb.toString();
        } else if (opens < 0) {
            StringBuilder sb = new StringBuilder(typeText);
            for (int j = 0; j < Math.abs(opens); j++) sb.append('<');
            return sb.toString();
        }
        return typeText;
    }

    /**
     * Wrapper that produces a TypeScript type string for a Java Type and ensures
     * the single type token is balanced (each '<' has a matching '>' appended if missing).
     * Use this whenever emitting a parameter type, return type or field type.
     */
    private String safeGetTypeScriptType(Type type, TypeDefinition typeDefinition) {
        String raw = getTypeScriptTypeFromJavaType(type, typeDefinition);
        return balanceAngleBracketsForType(raw);
    }

    private static String balanceUnclosedBraces(String content) {
        long open = content.chars().filter(ch -> ch == '{').count();
        long close = content.chars().filter(ch -> ch == '}').count();
        long diff = open - close;
        if (diff > 0) {
            StringBuilder sb = new StringBuilder(content);
            sb.append("\n");
            for (long i = 0; i < diff; i++) {
                sb.append("}\n");
            }
            return sb.toString();
        }
        return content;
    }
}