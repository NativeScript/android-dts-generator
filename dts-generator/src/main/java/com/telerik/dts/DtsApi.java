package com.telerik.dts;

import org.apache.bcel.classfile.Attribute;
import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.FieldOrMethod;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.classfile.Signature;
import org.apache.bcel.generic.ArrayType;
import org.apache.bcel.generic.BasicType;
import org.apache.bcel.generic.ObjectType;
import org.apache.bcel.generic.ReferenceType;
import org.apache.bcel.generic.Type;
import org.apache.bcel.util.BCELComparator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import edu.umd.cs.findbugs.ba.generic.GenericObjectType;
import edu.umd.cs.findbugs.ba.generic.GenericUtilities;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class DtsApi {
    private StringBuilder2 sbContent;
    private StringBuilder2 sbHeaders;
    private Set<String> references;
    private JavaClass prevClass;
    private String currentFileClassname;
    private Set<String> baseMethodNames;
    private List<Method> baseMethods;
    private Map<String, Method> mapNameMethod;
    private Map<String, String> aliasedTypes;
    private String[] namespaceParts;
    private int indent = 0;
    private boolean writeMultipleFiles;
    private Pattern methodSignature = Pattern.compile("\\((?<ArgumentsSignature>.*)\\)(?<ReturnSignature>.*)");

    public DtsApi(boolean writeMultipleFiles) {
        this.writeMultipleFiles = writeMultipleFiles;
        this.indent = 0;

        overrideFieldComparator();

        this.aliasedTypes = new HashMap<>();
    }

    public String generateDtsContent(List<JavaClass> javaClasses){
        this.prevClass = null;

        if ((javaClasses != null) && (javaClasses.size() > 0)) {
            references = new HashSet<String>();
            sbHeaders = new StringBuilder2(); // <reference path=" ...
            sbContent = new StringBuilder2();

            // process class scope
            for (int i = 0; i < javaClasses.size(); i++) {
                Set<String> methodsSet = new HashSet<>();

                JavaClass currClass = javaClasses.get(i);
                currentFileClassname = currClass.getClassName();

                String simpleClassName = getSimpleClassname(currClass);

                Signature signature = this.getSignature(currClass);
                TypeDefinition typeDefinition = null;
                if(signature != null) {
                    typeDefinition = new TypeDefinition(signature.getSignature(), currentFileClassname);
                }

                if (currentFileClassname.startsWith("java.util.function") ||
                        currentFileClassname.startsWith("android.support.v4.media.routing.MediaRouterJellybeanMr1") ||
                        currentFileClassname.startsWith("android.support.v4.media.routing.MediaRouterJellybeanMr2") ||
                        currentFileClassname.endsWith("package-info")) {
                    continue;
                }

                // check if processed class hijacks a namespace
                // TODO: optimize

                this.namespaceParts = currentFileClassname.split("\\.");

                boolean isInterface = currClass.isInterface();
                boolean isAbstract = currClass.isAbstract();

                this.indent = closePackage(this.prevClass, currClass);
                this.indent = openPackage(this.prevClass, currClass);

                String tabs = getTabs(this.indent);

                String extendsLine = getExtendsLine(currClass, typeDefinition);

                if (simpleClassName.equals("AccessibilityDelegate")) {
                    sbContent.appendln(tabs + "export class " + getFullClassNameConcatenated(currClass, typeDefinition) + extendsLine + " {");
                } else {
                    sbContent.appendln(tabs + "export" + (isAbstract && !isInterface ? " abstract " : " ") + "class " + simpleClassName + extendsLine + " {");
                }
                // process member scope

                mapNameMethod = new HashMap<String, Method>();

                // process constructors for interfaces
                if (isInterface) {
                    List<JavaClass> allInterfaces = getAllInterfaces(currClass);

                    List<Method> allInterfacesMethods = getAllInterfacesMethods(allInterfaces);
                    Set<Field> allInterfaceFields = getAllInterfacesFields(allInterfaces);

                    processInterfaceConstructor(currClass, allInterfacesMethods);

                    for (Method m : allInterfacesMethods) {
                        processMethod(m, currClass, isInterface, methodsSet);
                    }

                    for (Field f : allInterfaceFields) {
                        processField(f, currClass);
                    }
                } else {
                    List<FieldOrMethod> foms = getMembers(currClass, getAllInterfaces(currClass));
                    for (FieldOrMethod fom : foms) {
                        if (fom instanceof Field) {
                            processField((Field) fom, currClass);
                        } else if (fom instanceof Method) {
                            processMethod((Method) fom, currClass, isInterface, methodsSet);
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

                    for (Method m : allInterfacesMethods) {
                        processMethod(m, currClass, isInterface, methodsSet);
                    }
                }

                writeMethods(methodsSet);

                sbContent.appendln(tabs + "}");
                if (getSimpleClassname(currClass).equals("AccessibilityDelegate")) {
                    String innerClassAlias = "export type " + getSimpleClassname(currClass) + " = " + getFullClassNameConcatenated(currClass, typeDefinition);
                    sbContent.appendln(tabs + innerClassAlias);
                }
                this.prevClass = currClass;
            }
            closePackage(prevClass, null);
            // process class scope end

            String[] refs = references.toArray(new String[references.size()]);
            Arrays.sort(refs);

            if(this.writeMultipleFiles) {
                for (String r : refs) {
                    sbHeaders.append("/// <reference path=\"./");
                    sbHeaders.append(r);
                    sbHeaders.appendln(".d.ts\" />");
                }
            }
        }

        return sbHeaders.toString() + sbContent.toString();
    }

    private String getExtendsLine(JavaClass currClass, TypeDefinition typeDefinition) {
        if (typeDefinition != null) {
            StringBuilder result = new StringBuilder();
            ReferenceType parent = typeDefinition.getParent();
            if(parent != null) {
                result.append(" extends ");
                result.append(getTypeScriptTypeFromJavaType(parent));
            }
            List<ReferenceType> interfaces = typeDefinition.getInterfaces();
            if(interfaces.size() > 0) {
                result.append(" implements ");

                for (ReferenceType referenceType : interfaces) {
                    result.append(getTypeScriptTypeFromJavaType(referenceType) + ", ");
                }
                result.deleteCharAt(result.lastIndexOf(","));
            }
            return result.toString();
        }
        JavaClass superClass = getSuperClass(currClass);
        List<JavaClass> interfaces = getInterfaces(currClass);
        return getExtendsLine(superClass, interfaces);
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

        String extendedClass = superClass != null ?
                superClass.getClassName().replaceAll("\\$", "\\.") : "java.lang.Object";

        if (!typeBelongsInCurrentTopLevelNamespace(extendedClass)) {
            extendedClass = getAliasedClassName(extendedClass);
        }

        return " extends " + extendedClass + implementsSegment;
    }

    private String getAliasedClassName(String className) {
        String aliasedType = aliasedTypes.get(className);
        if (aliasedType == null) {
            aliasedType = mangleClassname(className);
            aliasedTypes.put(className, aliasedType);

            sbHeaders.append("import ");
            sbHeaders.append(aliasedType);
            sbHeaders.append(" = ");
            sbHeaders.append(className);
            sbHeaders.appendln(";");
        }

        return aliasedType;
    }

    private boolean typeBelongsInCurrentTopLevelNamespace(String className) {
        return className.startsWith(this.namespaceParts[0] + ".");
    }

    private String mangleClassname(String className) {
        return className.replaceAll("\\.", "");
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

    private void processInterfaceConstructor(JavaClass classInterface, List<Method> allInterfacesMethods) {
        String tabs = getTabs(this.indent + 1);

        generateInterfaceConstructorContent(classInterface, tabs, allInterfacesMethods);
    }

    private void generateInterfaceConstructorContent(JavaClass classInterface, String tabs, List<Method> methods) {
        generateInterfaceConstructorCommentBlock(classInterface, tabs);

        sbContent.appendln(tabs + "public constructor(implementation: {");

        for (Method m : methods) {
            sbContent.append(getTabs(this.indent + 2) + getMethodName(m) + getMethodParamSignature(classInterface, m));
            String bmSig = "";
            if (!isConstructor(m)) {
                bmSig += ": " + getTypeScriptTypeFromJavaType(this.getReturnType(m));
            }
            sbContent.appendln(bmSig + ";");
        }

        sbContent.appendln(tabs + "});");
    }

    private void generateInterfaceConstructorCommentBlock(JavaClass classInterface, String tabs) {
        sbContent.appendln(tabs + "/**");
        sbContent.appendln(tabs + " * Constructs a new instance of the " + classInterface.getClassName() + " interface with the provided implementation.");
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

            if (currClazz.getClassName().equals("java.lang.Object")) {
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
                System.out.println("ignoring definitions in missing dependency: " + intface);
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

//    private List<String> getSignatureInterfaces(Signature signature) {
//        if(signature == null) {
//            return null;
//        }
//
//        List<String> interfaces = new ArrayList<>();
//        Matcher matcher = typeSignature.matcher(signature.getSignature());
//        if(!matcher.matches()) {
//            return  null;
//        }
//    }

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
    private void processMethod(Method m, JavaClass clazz, boolean isInterface, Set<String> methodsSet) {
        String name = m.getName();

        if (isPrivateGoogleApiMember(name)) return;

        if (m.isSynthetic() || (!m.isPublic() && !m.isProtected())) {
            return;
        }

        // TODO: Pete: won't generate static initializers as invalid typescript properties
        if (clazz.isInterface() && name.equals("<clinit>")) {
            return;
        }

        loadBaseMethods(clazz); //loaded in "baseMethodNames" and "baseMethods"

        String tabs = getTabs(this.indent + 1);

        cacheMethodBySignature(m); //cached in "mapNameMethod"

        //generate base method content
        if (baseMethodNames.contains(name)) {
            for (Method bm : baseMethods) {
                if (bm.getName().equals(name)) {
                    String sig = getMethodFullSignature(bm);
                    if (!mapNameMethod.containsKey(sig)) {
                        mapNameMethod.put(sig, bm);
                        methodsSet.add(generateMethodContent(clazz, isInterface, tabs, bm));
                    }
                }
            }
        }

        methodsSet.add(generateMethodContent(clazz, isInterface, tabs, m));
    }

    private String generateMethodContent(JavaClass clazz, boolean isInterface, String tabs, Method m) {
        StringBuilder2 sbTemp = new StringBuilder2();
        sbTemp.append(tabs + "public ");

        if (m.isStatic()) {
            sbTemp.append("static ");
        }

        sbTemp.append(getMethodName(m) + getMethodParamSignature(clazz, m));
        String bmSig = "";
        if (!isConstructor(m)) {
            bmSig += ": " + getTypeScriptTypeFromJavaType(this.getReturnType(m));
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
                    List<ReferenceType> referenceTypes = GenericUtilities.getTypeParameters(argumentsSignature);
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

    private Type getReturnType(Method m) {
        Signature signature = this.getSignature(m);
        if(signature != null) {
            Matcher matcher = methodSignature.matcher(signature.getSignature());
            if(matcher.matches()) {
                String returnSignature = matcher.group(2);
                if(returnSignature.equals("V")){
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
        String methodName = m.getName();
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
                boolean isJavaLangObject = currClass.getClassName().equals("java.lang.Object");

                // two similar code blocks, split up so that checks if method is constructor isnt done on objects that are not java.lang.Object
                if (isJavaLangObject) {
                    for (Method m : currClass.getMethods()) {
                        if (!m.isSynthetic() && (m.isPublic() || m.isProtected())) {
                            // don't write empty constructor typings for java objects
                            if(isConstructor(m)) {
                                continue;
                            }

                            baseMethods.add(m);
                            baseMethodNames.add(m.getName());
                        }
                    }

                    break;
                } else {
                    for (Method m : currClass.getMethods()) {
                        if (!m.isSynthetic() && (m.isPublic() || m.isProtected())) {
                            baseMethods.add(m);
                            baseMethodNames.add(m.getName());
                        }
                    }
                }

                String scn = currClass.getSuperclassName();
                JavaClass baseClass = ClassRepo.findClass(scn);
                assert baseClass != null : "baseClass=" + currClass.getClassName() + " scn=" + scn;
                currClass = baseClass;
            }
        }
    }

    private JavaClass getSuperClass(JavaClass clazz) {
        if (clazz.getClassName().equals("java.lang.Object")) {
            return null;
        }

        String scn = clazz.getSuperclassName();
        JavaClass currClass = ClassRepo.findClass(scn);

        if (currClass == null) {
            return null;
//            throw new NoClassDefFoundError("Couldn't find class: " + scn + " required by class: " + clazz.getClassName() + ". You need to provide the jar containing the missing class: " + scn);
        }

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

        return name;
    }

    private String getMethodParamSignature(JavaClass clazz, Method m) {
        StringBuilder sb = new StringBuilder();
        Signature signature = this.getSignature(m);
        sb.append("(");
        int idx = 0;
        for (Type type : this.getArgumentTypes(m)) {
            if (idx > 0) {
                sb.append(", ");
            }
            sb.append("param");
            sb.append(idx++);
            sb.append(": ");

            String paramTypeName = getTypeScriptTypeFromJavaType(type);

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
    private void processField(Field f, JavaClass clazz) {
        String fieldName = f.getName();

        if (isPrivateGoogleApiMember(fieldName)) return;

        String tabs = getTabs(this.indent + 1);
        sbContent.append(tabs + "public ");
        if (f.isStatic()) {
            sbContent.append("static ");
        }
        sbContent.appendln(f.getName() + ": " + getTypeScriptTypeFromJavaType(f.getType()) + ";");
    }

    private String getTypeScriptTypeFromJavaType(Type type) {
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
                convertToTypeScriptType(type, sb);
                tsType = sb.toString();

                if (tsType.startsWith("java.util.function") || isPrivateGoogleApiClass(tsType)) {
                    tsType = "any /* " + tsType + "*/";
                }
        }

        return tsType;
    }

    private void convertToTypeScriptType(Type type, StringBuilder tsType) {
        boolean isPrimitive = type instanceof BasicType;
        boolean isArray = type instanceof ArrayType;
        boolean isObjectType = type instanceof ObjectType;

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
            tsType.append("native.Array<");
            Type elementType = ((ArrayType) type).getElementType();
            convertToTypeScriptType(elementType, tsType);
            tsType.append(">");
        } else if (type.equals(Type.STRING)) {
            tsType.append("string");
        } else if (isObjectType) {
            ObjectType objType = (ObjectType) type;
            String typeName = objType.getClassName();
            if (typeName.contains("$")) {
                typeName = typeName.replaceAll("\\$", "\\.");
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
                        this.convertToTypeScriptType(refType, tsType);
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
        Set<String> methodNames = new HashSet<String>();
        ArrayList<FieldOrMethod> members = new ArrayList<FieldOrMethod>();

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

    private String getFullClassNameConcatenated(JavaClass javaClass, TypeDefinition typeDefinition) {
        String fullName = javaClass.getClassName().replaceAll("[$.]", "");
        if(typeDefinition != null) {
            for (TypeDefinition.GenericDefinition definition: typeDefinition.getGenericDefinitions()) {

            }
        }
        return fullName;
    }

    private String getTabs(int count) {
        String tabs = new String(new char[count]).replace("\0", "\t");
        return tabs;
    }

    private boolean isPrivateGoogleApiMember(String memberName) {
        return memberName.startsWith("zz");
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
}
