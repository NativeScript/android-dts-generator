package com.telerik.java.api.compiler.helper;

import com.sun.source.tree.ClassTree;
import com.sun.source.util.TreePath;
import com.sun.source.util.Trees;
import com.telerik.java.api.JClass;
import com.telerik.java.api.JType;
import com.telerik.java.api.JTypeVariable;

import java.util.Collection;
import java.util.List;

import javax.lang.model.element.AnnotationMirror;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.NestingKind;
import javax.lang.model.element.TypeElement;
import javax.lang.model.element.Modifier;
import javax.lang.model.element.TypeParameterElement;
import javax.lang.model.type.ArrayType;
import javax.lang.model.type.DeclaredType;
import javax.lang.model.type.TypeKind;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.type.TypeVariable;
import javax.lang.model.util.Types;

import com.telerik.java.api.compiler.model.*;
import com.telerik.java.api.compiler.processor.*;

/**
 * Helper class to set the properties of a java class
 * to the java class model
 */
public class ClassInfoDataSetter {

    /**
     * Set the attributes of the currently visiting class 
     * to the java class model
     * @param clazzInfo The java class model
     * @param classTree Currently visiting class tree
     * @param path tree path
     * @param trees trees
     */
    public static JavaClassInfo populateClassInfo(JavaClassInfo enclosing, ClassTree classTree, TreePath path, Trees trees) {
    	
    	Element el = trees.getElement(path);
    	if (el == null) {
    		return null;
    	}
    	
    	ElementKind parentKind = el.getEnclosingElement().getKind(); 
    	if (parentKind != ElementKind.CLASS && parentKind != ElementKind.PACKAGE && parentKind != ElementKind.INTERFACE && parentKind != ElementKind.ENUM) {
    		return null;
    	}
    	
        TypeElement e = (TypeElement) el;
        if (e == null || e.getNestingKind() == NestingKind.ANONYMOUS || e.getNestingKind() == NestingKind.LOCAL) {
        	return null;
        }

        String qualifiedClassName = e.getQualifiedName().toString();
        
        JavaClassInfo classInfo = ClassModelMap.getInstance().getClassInfo(qualifiedClassName);
        classInfo.isDefined = true;
        classInfo.enclosingType = enclosing;
		
        //Set modifier details
        for (Modifier modifier : e.getModifiers()) {
            DataSetterUtil.setModifiers(modifier.toString(), classInfo);
        }
        
    	String comment = trees.getDocComment(path);
    	classInfo.setComment(comment);

        createTypeVariables(classInfo, null, e.getTypeParameters(), classInfo.typeParameters);
	
        // Set class name
        classInfo.setName(e.getSimpleName().toString());
        
        //Set qualified class name
        classInfo.setQualifiedName(e.getQualifiedName().toString());

        //Set Nesting kind
        classInfo.setNestingKind(e.getNestingKind().toString());
        
        ElementKind kind = e.getKind();
        if (kind.isInterface()) {
        	classInfo.setIsInterface(true);
        }
        else if (kind == ElementKind.ENUM) {
        	classInfo.setIsEnum(true);
        }
        
        if (e.asType().getKind() == TypeKind.ARRAY) {
        	throw new UnsupportedOperationException("Class definition can not define array class.");
        }

        //Set extending class info
        TypeMirror superClass = e.getSuperclass();
    	JType superClassType = getType(superClass, classInfo, null);
    	classInfo.setGenericSuperclass(superClassType);
        
        //Set implementing interface details
        Collection<JType> interfaces = classInfo.genericInterfaceTypes;
        for (TypeMirror mirror : e.getInterfaces())
        	interfaces.add(getType(mirror, classInfo, null));
        
        List<? extends AnnotationMirror> annotations = e.getAnnotationMirrors();
        for (AnnotationMirror annotationMirror : annotations) {
            String qualifiedName = annotationMirror.toString().substring(1);
            AnnotationInfo annotationInfo = new AnnotationInfo();
            annotationInfo.setName(qualifiedName);
            classInfo.addAnnotation(annotationInfo);
        }
        
        return classInfo;
    }

	public static void createTypeVariables(JavaClassInfo classInfo,
			ExecutableInfo methodInfo,
			List<? extends TypeParameterElement> typeParameterElements,
			List<JTypeVariable> jTypeVariables) {
		
		for	(TypeParameterElement t: typeParameterElements) {
        	TypeVariableInfo typeVariable = new TypeVariableInfo();
        	typeVariable.setName(t.getSimpleName().toString());
        	jTypeVariables.add(typeVariable);
        }
        
        for (int i = 0; i < typeParameterElements.size(); i++) {
        	TypeParameterElement tpe = typeParameterElements.get(i);
        	TypeVariableInfo tvi = (TypeVariableInfo)jTypeVariables.get(i);
        	
        	for (TypeMirror type: tpe.getBounds())
	    		tvi.getBounds().add(getType(type, classInfo, methodInfo));
        }
	}
    
	public static JType getType(TypeMirror typeMirror, JavaClassInfo classOwner, ExecutableInfo executableOwner) {
		
		TypeKind kind = typeMirror.getKind();
		if (kind == TypeKind.ARRAY) {
		   GenericArrayTypeInfo genericArrayTypeInfo = new GenericArrayTypeInfo();
		   genericArrayTypeInfo.componentType = getType(((ArrayType)typeMirror).getComponentType(), classOwner, executableOwner);
		   return genericArrayTypeInfo;
	    }
		else if (kind == TypeKind.WILDCARD) {
			WildcardTypeInfo wildcardTypeInfo = new WildcardTypeInfo();
			return wildcardTypeInfo;
		}
		else if (kind == TypeKind.TYPEVAR) {
			TypeVariable typeVariable = (TypeVariable)typeMirror;
			String typeVarName = typeVariable.asElement().getSimpleName().toString();
			
			if (executableOwner != null) {
				// Check if typeVarName is in the method's type parameters.
				for(JTypeVariable match: executableOwner.getTypeParameters()) {
					if (match.getName().equals(typeVarName)) {
						return (TypeVariableInfo)match; 
					}
				}
			}
			
			JavaClassInfo enclosingType = classOwner;
			while (enclosingType != null) {
				for(JTypeVariable match: enclosingType.typeParameters) {
					if (match.getName().equals(typeVarName)) {
						return (TypeVariableInfo)match; 
					}
				}
				
				enclosingType = enclosingType.enclosingType;
			}
			
			throw new UnsupportedOperationException("Referencing undefined type variable " + typeVarName + ".");
			
			// Else it must be in the class type parameters... not in extend clause or something...
//			TypeVariableInfo typeVariableInfo = new TypeVariableInfo();
//			typeVariableInfo.setName(typeVarName);
			
			//return typeVariableInfo;
//			List<? extends TypeMirror> bounds = ((TypeParameterElement)typeVariable.asElement()).getBounds();
//			if (bounds != null) {
//				bounds.add(null);
//			}
		}
		else if (kind == TypeKind.DECLARED) {
			DeclaredType declaredType = (DeclaredType)typeMirror;
			
			Types types = CodeAnalyzerProcessor.getInstance().getTypeUtils();
		 	TypeElement el = (TypeElement)types.asElement(declaredType);
		 	
		    String qualifiedClassName = el.getQualifiedName().toString();
			JavaClassInfo javaClassInfo = ClassModelMap.getInstance().getClassInfo(qualifiedClassName);
		 	
			List<? extends TypeMirror> typeArguments = declaredType.getTypeArguments();
			if (typeArguments != null && typeArguments.size() > 0) {
				
				ParameterizedTypeInfo parameterizedTypeInfo = new ParameterizedTypeInfo();
				for (TypeMirror type: typeArguments){
					parameterizedTypeInfo.getActualTypeArguments().add(getType(type, classOwner, executableOwner));
				}
//				JavaClassInfo superClassTypeInfo = setupClassKind(declaredType);
				parameterizedTypeInfo.setRawType(javaClassInfo);
				return parameterizedTypeInfo;
			}
			else {
				return javaClassInfo;// setupClassKind(superClass);
			}
		}
		else if (kind == TypeKind.BOOLEAN
				|| kind == TypeKind.BYTE
				|| kind == TypeKind.CHAR
				|| kind == TypeKind.DOUBLE
				|| kind == TypeKind.FLOAT
				|| kind == TypeKind.INT
				|| kind == TypeKind.LONG
				|| kind == TypeKind.SHORT
				) {
			
			String primitiveName = kind.toString().toLowerCase();
			JClass primitiveClass = ClassModelMap.getInstance().getClassInfo(primitiveName);
			return primitiveClass;
		}
		else if (kind == TypeKind.VOID) {
			return null;
		}
		else if (kind == TypeKind.ERROR) {
			return ClassModelMap.getInstance().getClassInfo("error");
		}
		else if (kind == TypeKind.NONE) {
			return null;
		}
		else {
//			JavaClassInfo superClassTypeInfo = setupClassKind(superClass);
//			superClassTypeInfo.setIsPrimitive(false);
//			return superClassTypeInfo;
			
			throw new UnsupportedOperationException("Unknown TypeKind: " + kind.toString());
		}
	}
}
