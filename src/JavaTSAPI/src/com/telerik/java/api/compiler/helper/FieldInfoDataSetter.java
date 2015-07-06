package com.telerik.java.api.compiler.helper;

import com.sun.source.tree.VariableTree;
import com.sun.source.util.TreePath;
import com.sun.source.util.Trees;
import com.telerik.java.api.JType;
import java.util.List;
import javax.lang.model.element.AnnotationMirror;
import javax.lang.model.element.Element;
import javax.lang.model.element.Modifier;

import com.telerik.java.api.compiler.model.*;

/**
 * Helper class to set the properties of 
 * fields to the java class model
 */
public class FieldInfoDataSetter {

    public static void populateFieldInfo(JavaClassInfo classInfo,
            VariableTree variableTree, Element e, TreePath path, Trees trees) {

        if (e == null) {
            return;
        }

        FieldInfo fieldInfo = new FieldInfo();
        String fieldName = variableTree.getName().toString();
        fieldInfo.setName(fieldName);
        
        String comment = trees.getDocComment(path);
        fieldInfo.setComment(comment);
        
        //Set modifier details
        for (Modifier modifier : e.getModifiers()) {
            DataSetterUtil.setModifiers(modifier.toString(), fieldInfo);
        }
        
        List<? extends AnnotationMirror> annotations = e.getAnnotationMirrors();
        for (AnnotationMirror annotationMirror : annotations) {
            String qualifiedName = annotationMirror.toString().substring(1);
            AnnotationInfo annotationInfo = new AnnotationInfo();
            annotationInfo.setName(qualifiedName);
            fieldInfo.addAnnotation(annotationInfo);
        }

        JType type = ClassInfoDataSetter.getType(e.asType(), classInfo, null);
        fieldInfo.setType(type);
        
        classInfo.fields.add(fieldInfo);
    }
}