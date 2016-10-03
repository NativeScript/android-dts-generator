package com.telerik.dts;

import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.FieldOrMethod;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.generic.ArrayType;
import org.apache.bcel.generic.BasicType;
import org.apache.bcel.generic.ObjectType;
import org.apache.bcel.generic.Type;
import org.apache.bcel.util.BCELComparator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

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
    private int indent = 0;


    public DtsApi() {
        this.indent = 0;

        overrideFieldComparator();
    }

    public String generateDtsContent(List<JavaClass> javaClasses) {
        this.prevClass = null;

        if ((javaClasses != null) && (javaClasses.size() > 0)) {
            references = new HashSet<String>();
            sbHeaders = new StringBuilder2(); // <reference path=" ...
            sbContent = new StringBuilder2();

            // process class scope
            for(int i = 0; i < javaClasses.size(); i++) {

                JavaClass currClass = javaClasses.get(i);
                currentFileClassname = currClass.getClassName();
                boolean isInterface = currClass.isInterface();
                boolean isAbstract = currClass.isAbstract();

                this.indent = closePackage(this.prevClass, currClass);
                this.indent = openPackage(this.prevClass, currClass);

                String tabs = getTabs(this.indent);

                JavaClass superClass = getSuperClass(currClass);
                List<JavaClass> interfaces = getInterfaces(currClass);
                String extendsLine = getExtendsLine(superClass, interfaces);

                if(getSimpleClassname(currClass).equals("AccessibilityDelegate")) {
                    sbContent.appendln(tabs + "export class " + getFullClassNameConcatenated(currClass) + extendsLine + " {");
                }
                else {
                    sbContent.appendln(tabs + "export" + (isAbstract && !isInterface ? " abstract " : " ") + "class " + getSimpleClassname(currClass) + extendsLine + " {");
                }
                // process member scope

                // process constructors for interfaces
                if(isInterface) {
                    List<JavaClass> allInterfaces = getAllInterfaces(currClass);

                    List<Method> allInterfacesMethods = getAllInterfacesMethods(allInterfaces);
                    Set<Field> allInterfaceFields = getAllInterfacesFields(allInterfaces);

                    processInterfaceConstructor(currClass, allInterfacesMethods);

                    for(Method m : allInterfacesMethods) {
                        processMethod(m, currClass);
                    }

                    for(Field f : allInterfaceFields) {
                        processField(f, currClass);
                    }
                } else {
                    List<FieldOrMethod> foms = getMembers(currClass);
                    for (FieldOrMethod fom : foms) {
                        if (fom instanceof Field) {
                            processField((Field) fom, currClass);
                        } else if (fom instanceof Method) {
                            processMethod((Method) fom, currClass);
                        } else {
                            throw new IllegalArgumentException("Argument is not method or field");
                        }
                    }
                    // process member scope end
                }

                if(isAbstract && !isInterface) {
                    List<JavaClass> allInterfaces = getAllInterfaces(currClass);
                    List<Method> allInterfacesMethods = getAllInterfacesMethods(allInterfaces);
                    for(Method m : allInterfacesMethods) {
                        processMethod(m, currClass);
                    }
                }

                sbContent.appendln(tabs + "}");
                if(getSimpleClassname(currClass).equals("AccessibilityDelegate")) {
                    String innerClassAlias =  "export type " + getSimpleClassname(currClass) + " = " +  getFullClassNameConcatenated(currClass);
                    sbContent.appendln(tabs +  innerClassAlias);
                }
                this.prevClass = currClass;
            }
            closePackage(prevClass, null);
            // process class scope end

            String[] refs = references.toArray(new String[references.size()]);
            Arrays.sort(refs);

            for (String r: refs) {
                sbHeaders.append("/// <reference path=\"./");
                sbHeaders.append(r);
                sbHeaders.appendln(".d.ts\" />");
            }
        }

        return sbHeaders.toString() + sbContent.toString();
    }

    private String getExtendsLine(JavaClass superClass, List<JavaClass> interfaces) {
        if(superClass == null) {
            return "";
        }

        StringBuilder implementsSegmentSb = new StringBuilder();
        String implementsSegment = "";
        if(interfaces.size() > 0) {
            implementsSegmentSb.append(" implements ");

            for(JavaClass clazz : interfaces) {
                implementsSegmentSb.append(clazz.getClassName().replaceAll("\\$", "\\.") + ", ");
            }

            implementsSegment = implementsSegmentSb.substring(0, implementsSegmentSb.lastIndexOf(","));
        }

        return " extends " + superClass.getClassName().replaceAll("\\$", "\\.") + implementsSegment;
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
            sbContent.append(getTabs(this.indent +  2) + getMethodName(m) + getMethodParamSignature(classInterface, m));
            String bmSig = "";
            if (!isConstructor(m)) {
                bmSig += ": " + getTypeScriptTypeFromJavaType(classInterface, m.getReturnType());
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

        while(!classQueue.isEmpty()) {
            JavaClass clazz = classQueue.poll();

            interfaces.add(clazz);

            classQueue.addAll(getInterfaces(clazz));
        }

        return interfaces;
    }

    private List<JavaClass> getInterfaces(JavaClass classInterface) {
        List<JavaClass> interfaces = new ArrayList<>();

        String[] interfaceNames = classInterface.getInterfaceNames();
        for(String intface : interfaceNames) {
            JavaClass clazz1 = ClassRepo.findClass(intface);
            String className = clazz1.getClassName();

            // TODO: Pete: Hardcoded until we figure out how to go around the 'type incompatible with Object' issue
            if (className.equals("java.util.Iterator") ||
                    className.equals("android.animation.TypeEvaluator") ||
                    className.equals("java.lang.Comparable")) {
                continue;
            }

            interfaces.add(clazz1);
        }

        return interfaces;
    }

    private List<Method> getAllInterfacesMethods(List<JavaClass> interfaces) {
        ArrayList<Method> allInterfacesMethods = new ArrayList<>();

        for(JavaClass clazz : interfaces) {
            Method[] intfaceMethods = clazz.getMethods();
            allInterfacesMethods.addAll(Arrays.asList(intfaceMethods));
        }

        return allInterfacesMethods;
    }

    private Set<Field> getAllInterfacesFields(List<JavaClass> interfaces) {
        HashSet<Field> allInterfacesFields = new HashSet<>();

        for(JavaClass clazz : interfaces) {
            allInterfacesFields.addAll(Arrays.asList(clazz.getFields()));
        }

        return allInterfacesFields;
    }
    //method related
    private void processMethod(Method m, JavaClass clazz) {
        String name = m.getName();

        // TODO: Pete: won't generate static initializers as invalid typescript properties
        if(clazz.isInterface() && name.equals("<clinit>")) {
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
                        generateMethodContent(clazz, tabs, bm);
                    }
                }
            }
        }

        generateMethodContent(clazz, tabs, m);
    }

    private void generateMethodContent(JavaClass clazz, String tabs, Method m) {
        sbContent.append(tabs + "public ");
        if (m.isStatic()) {
            sbContent.append("static ");
        }
        sbContent.append(getMethodName(m) + getMethodParamSignature(clazz, m));
        String bmSig = "";
        if (!isConstructor(m)) {
            bmSig += ": " + getTypeScriptTypeFromJavaType(clazz, m.getReturnType());
        }
        sbContent.appendln(bmSig + ";");
    }

    private void cacheMethodBySignature(Method m) {
        mapNameMethod = new HashMap<String, Method>();
        String currMethodSig = getMethodFullSignature(m);
        if (!mapNameMethod.containsKey(currMethodSig)) {
            mapNameMethod.put(currMethodSig, m);
        }
    }

    private void loadBaseMethods(JavaClass clazz) {
        baseMethodNames = new HashSet<String>();
        baseMethods = new ArrayList<Method>();

        JavaClass currClass = getSuperClass(clazz);

        if(currClass != null) {
            //get all base methods and method names
            while (true && currClass != null) {

                for (Method m : currClass.getMethods()) {
                    if (!m.isSynthetic() && (m.isPublic() || m.isProtected())) {
                        baseMethods.add(m);
                        baseMethodNames.add(m.getName());
                    }
                }

                if (currClass.getClassName().equals("java.lang.Object")) {
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
        if(clazz.getClassName().equals("java.lang.Object")) {
            return  null;
        }

        String scn = clazz.getSuperclassName();
        JavaClass currClass = ClassRepo.findClass(scn);

        if(currClass == null) {
            throw new NoClassDefFoundError("Couldn't find class: " + scn + " required by class: " + clazz.getClassName() + ". You need to provide the jar containing the missing class: " + scn);
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
        sb.append("(");
        int idx = 0;
        for (Type type: m.getArgumentTypes()) {
            if (idx > 0)
            {
                sb.append(", ");
            }
            sb.append("param");
            sb.append(idx++);
            sb.append(": ");
            addReference(type);
            String paramTypeName = getTypeScriptTypeFromJavaType(clazz, type);
            sb.append(paramTypeName);
        }
        sb.append(")");
        String sig = sb.toString();
        return sig;
    }

    //field related
    private void processField(Field f, JavaClass clazz) {
        String tabs = getTabs(this.indent + 1);
        sbContent.append(tabs + "public ");
        if (f.isStatic()) {
            sbContent.append("static ");
        }
        sbContent.appendln(f.getName() + ": " + getTypeScriptTypeFromJavaType(clazz, f.getType()) + ";");
    }

    private String getTypeScriptTypeFromJavaType(JavaClass clazz, Type type) {
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
        }

        return tsType;
    }

    private void convertToTypeScriptType(Type type, StringBuilder tsType) {
        boolean isPrimitive = type instanceof BasicType;
        boolean isArray = type instanceof ArrayType;
        boolean isObjectType = type instanceof ObjectType;

        if (isPrimitive)
        {
            if (type.equals(Type.BOOLEAN))
            {
                tsType.append("boolean");
            }
            else if (type.equals(Type.BYTE) || type.equals(Type.SHORT)
                    || type.equals(Type.INT) || type.equals(Type.LONG)
                    || type.equals(Type.FLOAT) || type.equals(Type.DOUBLE))
            {
                tsType.append("number");
            }
            else if (type.equals(Type.CHAR))
            {
                tsType.append("string");
            }
            else
            {
                throw new RuntimeException("Unexpected type=" + type.getSignature());
            }
        }
        else if (isArray)
        {
            tsType.append("native.Array<");
            Type elementType = ((ArrayType)type).getElementType();
            convertToTypeScriptType(elementType, tsType);
            tsType.append(">");
        }
        else if (type.equals(Type.STRING))
        {
            tsType.append("string");
        }
        else if (isObjectType)
        {
            ObjectType objType = (ObjectType)type;
            String typeName = objType.getClassName();
            if (typeName.contains("$"))
            {
                typeName = typeName.replaceAll("\\$", "\\.");
            }
            tsType.append(typeName);
            addReference(type);
        }
        else
        {
            throw new RuntimeException("Unhandled type=" + type.getSignature());
        }
    }

    private void addReference(Type type) {
        boolean isObjectType = type instanceof ObjectType;
        if (isObjectType) {
            ObjectType objType = (ObjectType)type;
            String typeName = objType.getClassName();
            if (!typeName.equals(currentFileClassname)) {
                boolean isNested = typeName.contains("$");
                if (!isNested) {
                    references.add(typeName);
                }
            }
        }
    }

    private List<FieldOrMethod> getMembers(JavaClass javaClass) {
        Set<String> methodNames = new HashSet<String>();
        ArrayList<FieldOrMethod> members = new ArrayList<FieldOrMethod>();
        for (Method m: javaClass.getMethods()) {
            if ((m.isPublic() || m.isProtected()) && !m.isSynthetic()) {
                members.add(m);
                methodNames.add(m.getName());
            }
        }
        for (Field f: javaClass.getFields()) {
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

    private String getTabs(int count) {
        String tabs = new String(new char[count]).replace("\0", "\t");
        return tabs;
    }

    private void overrideFieldComparator() {
        BCELComparator cmp = Field.getComparator();

        Field.setComparator(new BCELComparator() {
            @Override
            public boolean equals(Object o, Object o1) {
                return ((Field)o).getName().equals(((Field) o1).getName());
            }

            @Override
            public int hashCode(Object o) {
                return cmp.hashCode(o);
            }
        });
    }
}
