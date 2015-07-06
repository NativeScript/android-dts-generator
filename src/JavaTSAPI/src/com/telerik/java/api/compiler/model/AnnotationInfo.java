package com.telerik.java.api.compiler.model;

import com.telerik.java.api.JAnnotation;

public class AnnotationInfo implements JAnnotation {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        StringBuffer buffer = new StringBuffer();
        buffer.append("Annotation Name: " + name);
        buffer.append("\n");
        return buffer.toString();
    }
}
