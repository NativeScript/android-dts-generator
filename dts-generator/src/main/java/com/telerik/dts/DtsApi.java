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
                        currentFileClassname.endsWith("Kt")) {
                    continue;
                }

                // check if processed class hijacks a namespace
                // TODO: optimize

                this.namespaceParts = currentFileClassname.split("\\.");
                if(isIgnoredNamespace()) {
                    System.out.println(String.format("Found ignored namespace. %s", String.join(".", this.namespaceParts)));
                    continue;
                }

                boolean isInterface = currClass.isInterface();
                boolean isAbstract = currClass.isAbstract();

                this.indent = closePackage(this.prevClass, currClass);
                this.indent = openPackage(this.prevClass, currClass);

                String tabs = getTabs(this.indent);

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

        return content;
    }

    private String replaceIgnoredNamespaces(String content) {
        String regexFormat = "(?<Replace>%s(?:(?:\\.[a-zA-Z\\d]*)|<[a-zA-Z\\d\\.<>]*>)*)(?<Suffix>[^a-zA-Z\\d]+)";
        // these namespaces are not known in some android api levels, so we cannot use them in android-support for instance, so we are replacing them with any
        for (String ignoredNamespace : this.getIgnoredNamespaces()) {
            String regexString = String.format(regexFormat, ignoredNamespace.replace(".", "\\."));
            content = content.replaceAll(regexString, "any$2");
            regexString = String.format(regexFormat, getGlobalAliasedClassName(ignoredNamespace).replace(".", "\\."));
            content = content.replaceAll(regexString, "any$2");
        }

        // replace "extends any" with "extends java.lang.Object"
        content = content.replace(" extends any ", String.format(" extends %s ", DtsApi.JavaLangObject));

        return content;
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
        for(String line: lines) {
            if(!line.equals("")) {
                while(line.startsWith("/")){
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

    // Adds javalangObject types to all generics which are used without types
    public static String replaceGenericsInText(String content) {
        String any = "any";
        String result = content;

        List<Tuple<String, Integer>> allGenerics = Stream.concat(generics.stream(), externalGenerics.stream()).collect(Collectors.toList());

        for(Tuple<String, Integer> generic: allGenerics) {
            result = replaceNonGenericUsage(result, generic.x, generic.y, any);
            String globalAliasedClassName = getGlobalAliasedClassName(generic.x);
            if(!generic.x.equals(globalAliasedClassName)) {
                result = replaceNonGenericUsage(result, globalAliasedClassName, generic.y, any);
            }
        }

        return result;
    }

    private static String replaceNonGenericUsage(String content, String className, Integer occurencies, String javalangObject) {
        String result = content;
        Pattern usedAsNonGenericPattern = Pattern.compile(className.replace(".", "\\.") + "(?<Suffix>[^a-zA-Z\\d^\\.^\\$^\\<])");
        Matcher matcher = usedAsNonGenericPattern.matcher(result);
        
        if (!matcher.find())
            return content;

        List<String> arguments = new ArrayList<>();
        for (int i = 0; i < occurencies; i++) {
            arguments.add(javalangObject);
        }
        String classSuffix = "<" + String.join(",", arguments) + ">";
        
        System.out.println(String.format("Appending %s to occurrences of class %s without passed generic types", classSuffix, className));

        String replaceString = String.format("%s%s$1", className, classSuffix);
        result = matcher.replaceAll(replaceString);
        return result;
    }

    private String getExtendsLine(JavaClass currClass, TypeDefinition typeDefinition) {
        String override = this.extendsOverrides.get(currClass.getClassName());
        if(override != null) {
            System.out.println(String.format("Found extends override for class %s - %s", currClass.getClassName(), override));
            return " extends " + override;
        }
        if (typeDefinition != null) {
            StringBuilder result = new StringBuilder();
            ReferenceType parent = typeDefinition.getParent();

            List<ReferenceType> interfaces = typeDefinition.getInterfaces();
            if(parent != null) {
                result.append(" extends ");
                result.append(getTypeScriptTypeFromJavaType(parent, typeDefinition));
            }
            if(interfaces.size() == 1 || (this.allGenericImplements && interfaces.size() > 0)) {
                result.append(" implements ");

                for (ReferenceType referenceType : interfaces) {
                    String tsType = getTypeScriptTypeFromJavaType(referenceType, typeDefinition);
                    if(!this.isPrimitiveTSType(tsType)) {
                        result.append(tsType + ", ");
                    }
                }
                result.deleteCharAt(result.lastIndexOf(","));
            }
            return result.toString();
        } else {
            JavaClass superClass = getSuperClass(currClass);
            List<JavaClass> interfaces = getInterfaces(currClass);
            if(interfaces.size() == 1 && superClass == null && currClass.getSuperclassName().equals(DtsApi.JavaLangObject)) {
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

        if(superClass != null) {
            String extendedClass = superClass.getClassName().replaceAll("\\$", "\\.");

            if(!extendedClass.equals(DtsApi.JavaLangObject)) {
                // check for type override
                String override = this.typeOverrides.get(extendedClass);
                if(override != null) {
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
        if(globalAliases.containsKey(parts[0])) {
            String aliasedNamespace = globalAliases.get(rootNamespace);
            parts = Arrays.copyOfRange(parts, 1, parts.length);
            String result = aliasedNamespace;
            if(parts.length > 0) {
                result += "." + String.join(".", parts);
            }
            return result;
        } else {
            return className;
        }
    }

    private static void addImport(String importToAdd) {
        if(!imports.stream().anyMatch(x -> x.equals(importToAdd))){
            imports.add(importToAdd);
        }
    }

    private String mangleRootClassname(String className) {
        String[] parts = className.split("\\.");
        String rootNamespace = parts[0];
        if(globalAliases.containsKey(parts[0])) {
            String aliasedNamespace = DtsApi.globalAliases.get(rootNamespace);
            String aliasedType = aliasedTypes.get(rootNamespace);
            if(aliasedType == null) {
                aliasedTypes.put(rootNamespace, aliasedNamespace);
                addImport(String.format("import %s = %s;\n", aliasedNamespace, rootNamespace));
            }

            parts = Arrays.copyOfRange(parts, 1, parts.length);
            String result = aliasedNamespace;
            if(parts.length > 0) {
                result += "." + String.join(".", parts);
            }
            return result;
        }
        return className;
    }

    private int closePackage(JavaClass prevClass, JavaClass currClass) {
        int indent = 0;

        if (prevClass == null) {
            return indent;
        }

        String prevClassName = prevClass.getClassName();
        int prevDotCount = prevClassName.length() - prevClassName.replace(".", "").length();
        int prevDollarCount = prevClassName.length() - prevClassName.replace("$", "").length();
        int prevCount = prevDotCount + prevDollarCount;

        if (currClass == null) {
            indent = prevCount;
            while (indent > 0) {
                String tabs = getTabs(--indent);
                sbContent.appendln(tabs + "}");
            }
            return indent;
        }

        String currClassName = currClass.getClassName();
        int currDotCount = currClassName.length() - currClassName.replace(".", "").length();
        int currDollarCount = currClassName.length() - currClassName.replace("$", "").length();
        int currCount = currDotCount + currDollarCount;

        while (prevCount > currCount) {
            String tabs = getTabs(--prevCount);
            sbContent.appendln(tabs + "}");
        }

        boolean isNested = isNested(currClass);

        if (!isNested) {
            throw new UnsupportedOperationException("TODO: implement");
            // String prevClassName = prevClass.getClassName();
            // int dotCount = prevClassName.length() -
            // prevClassName.replace(".", "").length();
            // int dollarCount = prevClassName.length() -
            // prevClassName.replace("$", "").length();
            // indent = dotCount + dollarCount;
            //
            // String[] prevParts = prevClassName.replace('$',
            // '.').split("\\.");
            // String[] currParts = currClass.getClassName().replace('$',
            // '.').split("\\.");
            //
            // int diffIdx = 0;
            // while ((diffIdx < prevParts.length) && (diffIdx <
            // currParts.length) &&
            // prevParts[diffIdx].equals(currParts[diffIdx])) {
            // ++diffIdx;
            // }
            //
            // int count = prevParts.length - diffIdx - 1;
            // while (count-- > 0) {
            // String tabs = getTabs(--indent);
            // ps.println(tabs + "}");
            // }
        }

        return indent;
    }

    private int openPackage(JavaClass prevClass, JavaClass currClass) {
        int indent = 0;

        String prevClassName = (prevClass != null) ? prevClass.getClassName() : "";
        String[] prevParts = prevClassName.replace('$', '.').split("\\.");
        String[] currParts = currClass.getClassName().replace('$', '.').split("\\.");

        int diffIdx = 0;
        while ((diffIdx < prevParts.length) && (diffIdx < currParts.length)
                && prevParts[diffIdx].equals(currParts[diffIdx])) {
            ++diffIdx;
        }

        indent = diffIdx;
        for (int idx = diffIdx; idx < currParts.length - 1; idx++) {
            ++indent;
            String tabs = getTabs(idx);
            if (idx == 0) {
                sbContent.append(tabs + "declare ");
            } else {
                sbContent.append(tabs + "export ");
            }
            sbContent.appendln("module " + currParts[idx] + " {");
        }

        if (isNested(currClass) && (prevParts.length < currParts.length)) {
            String tabs = getTabs(prevParts.length - 1);
            sbContent.appendln(tabs + "export module " + prevParts[prevParts.length - 1] + " {");
        }

        return indent;
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
                bmSig += ": " + getTypeScriptTypeFromJavaType(this.getReturnType(m), typeDefinition);
            }
            sbContent.appendln(bmSig + ";");
        }

        sbContent.appendln(tabs + "});");

        sbContent.appendln(tabs + "public constructor();");
    }

    private void generateInterfaceConstructorCommentBlock(JavaClass classInterface, String tabs) {
        sbContent.appendln(tabs + "/**");
        sbContent.appendln(tabs + " * Constructs a new instance of the " + classInterface.getClassName() + " interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.");
        // sbContent.appendln(tabs + " * @param implementation - allows implementor to define their own logic for all public methods."); // <- causes too much noise
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
        if(methodIsDeprecated(method)) {
            sbTemp.appendln(tabs + "/** @deprecated */");
        }

        sbTemp.append(tabs + "public ");

        if (method.isStatic()) {
            sbTemp.append("static ");
        }

        sbTemp.append(getMethodName(method) + getMethodParamSignature(clazz, typeDefinition, method));
        String bmSig = "";
        if (!isConstructor(method)) {
            bmSig += ": " + getTypeScriptTypeFromJavaType(this.getReturnType(method), typeDefinition);
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
        if(signature != null) {
            Matcher matcher = methodSignature.matcher(signature.getSignature());
            if(matcher.matches()) {
                String argumentsSignature = matcher.group(1);
                if(argumentsSignature.equals("")){
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

        while(iter.hasNext()) {
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
        if(signature != null) {
            String typeSignature = signature.getSignature();
            if(typeSignature.equals("")){
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
        if(signature != null) {
            Matcher matcher = methodSignature.matcher(signature.getSignature());
            if(matcher.matches()) {
                String returnSignature = matcher.group(2);
                if(isVoid.matcher(returnSignature).matches()){
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
                
                if(isJavaLangObject){
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
        if(override != null) {
            scn = override;
        }

        if(scn.equals("") || scn == null) {
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
            name = "\"" + name +"\"";
        }

        return name;
    }

   private String getMethodParamSignature(JavaClass clazz, TypeDefinition typeDefinition, Method m) {
        LocalVariableTable table = m.getLocalVariableTable();
        LocalVariable[] variables = table != null ? table.getLocalVariableTable() : null;

        StringBuilder sb = new StringBuilder();
        sb.append("(");
        int idx = 0;
        for (Type type : this.getArgumentTypes(m)) {
            if (idx > 0) {
                sb.append(", ");
            }

            int localVarIndex = m.isStatic() ? idx : idx + 1; // skip "this" variable name
            LocalVariable localVariable = variables != null && variables.length > localVarIndex
                ? variables[localVarIndex]
                : null;

            if (localVariable != null) {
                String name = localVariable.getName();
                if(reservedJsKeywords.contains(name)){
                    System.out.println(String.format("Appending _ to reserved JS keyword %s", name));
                    sb.append(name + "_");
                } else {
                    sb.append(name);
                }
            } else {
                // interface declarations will fallback to paramN since they don't have names in the bytecode
                sb.append("param");
                sb.append(idx);
            }
            idx++;
            sb.append(": ");

            String paramTypeName = getTypeScriptTypeFromJavaType(type, typeDefinition);

            // TODO: Pete:
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
        if(fieldTypeString.equals(clazz.getClassName() + "$" + name)) {
            return;
        }

        String tabs = getTabs(this.indent + 1);
        sbContent.append(tabs + "public ");
        if (f.isStatic()) {
            sbContent.append("static ");
        }

        if (!jsFieldPattern.matcher(name).matches()) {
            name = "\"" + name + "\"";
        }
        
        sbContent.append(name + ": " + getTypeScriptTypeFromJavaType(this.getFieldType(f), typeDefinition));
        if (f.getConstantValue() != null) {
            sbContent.appendln( " = " + f.getConstantValue() + ";");
        } else {
            sbContent.appendln(";");

        }
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

    private String getTypeScriptTypeFromJavaType(Type type, TypeDefinition typeDefinition) {
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
            useAnyInsteadOfJavaLangObject(elementType, typeDefinition, tsType);
            tsType.append(">");
        } else if (type.equals(Type.STRING)) {
            tsType.append("string");
        } else if (isObjectType) {
            if(isGenericObjectType) {
                GenericObjectType genericObjectType = (GenericObjectType)type;
                String genericVariable = genericObjectType.getVariable();
                if(genericVariable != null && isWordPattern.matcher(genericVariable).matches()) {
                    if(typeDefinition != null && typeDefinition.getGenericDefinitions() != null
                            && typeDefinition.getGenericDefinitions().stream()
                                .filter(definition -> definition.getLabel().equals(genericVariable)).count() > 0
                            && ((ObjectType) typeDefinition.getParent()).getClassName().equals(DtsApi.JavaLangObject)){
                        tsType.append(genericObjectType.getVariable());
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

            if(this.typeOverrides.containsKey(typeName)){
                typeName = this.typeOverrides.get(typeName);
            }

            if (!typeBelongsInCurrentTopLevelNamespace(typeName) && !typeName.startsWith("java.util.function.") && !isPrivateGoogleApiClass(typeName)) {
                tsType.append(getAliasedClassName(typeName));
            } else {
                tsType.append(typeName);
            }

            if(type instanceof GenericObjectType) {
                GenericObjectType genericType = (GenericObjectType) type;
                if (genericType.getNumParameters() > 0) {
                    tsType.append("<");
                    for (ReferenceType refType: genericType.getParameters()){
                        useAnyInsteadOfJavaLangObject(refType, typeDefinition, tsType);
                        tsType.append(',');
                    }
                    tsType.deleteCharAt(tsType.lastIndexOf(","));
                    tsType.append(">");
                }
            }

            addReference(type);
        } else {
            throw new RuntimeException("Unhandled type=" + type.getSignature());
        }
    }

    private void useAnyInsteadOfJavaLangObject(Type refType, TypeDefinition typeDefinition, StringBuilder tsType) {
//        if (refType instanceof ObjectType) {
//            ObjectType currentType = (ObjectType)refType;
//            if (currentType.getClassName().equals(DtsApi.JavaLangObject)) {
//                tsType.append("any");
//                return;
//            }
//        }
        this.convertToTypeScriptType(refType, typeDefinition, tsType);
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
        if(typeDefinition == null) {
            return "";
        }
        List<TypeDefinition.GenericDefinition> genericDefinitions = typeDefinition.getGenericDefinitions();
        if(genericDefinitions != null) {
            List<String> parts = new ArrayList<>();
            String genericClassName = fullClassName.replace("$", ".");

            // remove the current class name if it already exists
            generics = generics.stream().filter(generic -> generic.x != genericClassName).collect(Collectors.toList());

            generics.add(new Tuple<>(fullClassName.replace("$", "."), genericDefinitions.size()));
            for (TypeDefinition.GenericDefinition definition: genericDefinitions) {
                ObjectType genericObjectType = (ObjectType)definition.getType();
                String baseClassName = getAliasedClassName(genericObjectType.getClassName());
                String resultType = definition.getType().toString();
                String typeToExtend = resultType.replace(genericObjectType.getClassName(), baseClassName);
                //parts.add(String.format("%s extends %s", definition.getLabel(), typeToExtend));
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
        BCELComparator cmp = Field.getComparator();

        Field.setComparator(new BCELComparator() {
            @Override
            public boolean equals(Object o, Object o1) {
                return ((Field) o).getName().equals(((Field) o1).getName());
            }

            @Override
            public int hashCode(Object o) {
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

    private List<String> getIgnoredNamespaces(){
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
        String[] namespaceOnlyParts = Arrays.copyOf(namespaceParts, namespaceParts.length-1);
        String namespace = String.join(".", namespaceOnlyParts);
        for (String ignoredNamespace : getIgnoredNamespaces()) {
            if(ignoredNamespace.equals(namespace) || namespace.startsWith(ignoredNamespace + ".")) {
                return true;
            }
        }
        return false;
    }
}
