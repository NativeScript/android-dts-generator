package com.telerik.dts;

import org.apache.bcel.generic.ObjectType;
import org.apache.bcel.generic.ReferenceType;
import org.apache.bcel.generic.Type;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import edu.umd.cs.findbugs.ba.generic.GenericObjectType;
import edu.umd.cs.findbugs.ba.generic.GenericUtilities;

public class TypeDefinition {
    private static Pattern typeSignature = Pattern.compile("^(<(?<TypeGenerics>.*)>)?(?<Interfaces>L.*)$");

    private String signature;
    private String className;
    private ReferenceType parent;
    private List<GenericDefinition> genericDefinitions = null;
    private List<ReferenceType> interfaces = null;

    public class GenericDefinition {
        private String label;
        private Type type;

        GenericDefinition(String label, Type type) {
            this.label = label;
            this.type = type;
        }

        public String getLabel() {
            return label;
        }

        public Type getType() {
            return type;
        }
    }

    public TypeDefinition(String signature, String className) {
        this.signature = signature;
        this.className = className;
        this.checkSignature();
    }

    public ReferenceType getParent() {
        return parent;
    }

    public List<ReferenceType> getInterfaces() {
        return interfaces;
    }

    public List<GenericDefinition> getGenericDefinitions() {
        return genericDefinitions;
    }

    public String getClassName() { return this.className; }

    private void checkSignature() {
        Matcher matcher = typeSignature.matcher(this.signature);
        if(matcher.matches()){
            String typeGenericsSignature = matcher.group(2);
            String interfacesSignature = matcher.group(3);
            if (typeGenericsSignature != null) {
                this.setTypeGenerics(typeGenericsSignature);
            }
            if (interfacesSignature != null) {
                this.interfaces = GenericUtilities.getTypeParameters(interfacesSignature);
                if(this.interfaces.size() > 0){
                    // we assume that the first type parameter is the base class and the others are interfaces
                    parent = this.interfaces.get(0);
                    if ((parent instanceof ObjectType) &&
                            (((ObjectType)parent).getClassName().equals("java.lang.Enum")
                            || ((ObjectType)parent).getClassName().equals(DtsApi.JavaLangObject))){
                        if(((ObjectType)parent).getClassName().equals("java.lang.Enum")) {
                            parent = null; // we don't need extends for enum
                        }
                        // if we have only one another interface set it as a parent
                        // otherwise we don't know which one to set as a parent
                        if(this.interfaces.size() == 2) {
                            parent = this.interfaces.get(1);
                            this.interfaces.remove(1);
                        }
                    }
                    this.interfaces.remove(0);
                }
            }
        }
    }

    // Formal type parameters: Label ':' ClassBound? (':' InterfaceBound)*, repeated. A label can
    // carry several bounds (`<E extends Throwable & Copyable<E>>`), so they cannot be split on ':'.
    private void setTypeGenerics(String typeGenericsSignature) {
        this.genericDefinitions = new ArrayList<>();
        int i = 0;
        while (i < typeGenericsSignature.length()) {
            int colon = typeGenericsSignature.indexOf(':', i);
            if (colon < 0) {
                break;
            }
            String label = typeGenericsSignature.substring(i, colon);
            String firstBound = null;
            i = colon;
            while (i < typeGenericsSignature.length() && typeGenericsSignature.charAt(i) == ':') {
                i++;
                if (i < typeGenericsSignature.length() && typeGenericsSignature.charAt(i) != ':') {
                    int end = fieldTypeSignatureEnd(typeGenericsSignature, i);
                    if (firstBound == null) {
                        firstBound = typeGenericsSignature.substring(i, end);
                    }
                    i = end;
                }
            }
            Type type = GenericUtilities.getType(firstBound != null ? firstBound : "Ljava/lang/Object;");
            this.genericDefinitions.add(new GenericDefinition(label, type));
        }
    }

    private static int fieldTypeSignatureEnd(String signature, int start) {
        char first = signature.charAt(start);
        if (first == '[') {
            char element = signature.charAt(start + 1);
            return (element == 'L' || element == 'T' || element == '[') ? fieldTypeSignatureEnd(signature, start + 1) : start + 2;
        }
        int depth = 0;
        for (int i = start; i < signature.length(); i++) {
            char c = signature.charAt(i);
            if (c == '<') {
                depth++;
            } else if (c == '>') {
                depth--;
            } else if (c == ';' && depth == 0) {
                return i + 1;
            }
        }
        return signature.length();
    }
}
