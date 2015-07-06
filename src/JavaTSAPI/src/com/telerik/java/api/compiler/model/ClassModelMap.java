package com.telerik.java.api.compiler.model;

import java.util.HashMap;
import java.util.Map;

import com.telerik.java.api.*;

public class ClassModelMap {

    private Map<String, JClass> classInfoMap = new HashMap<String, JClass>();
    private Map<String, JClass> rootClassInfoMap = new HashMap<String, JClass>();
    private static ClassModelMap modelMap = new ClassModelMap();

    private ClassModelMap() {
		createPrimitiveType("boolean");
		createPrimitiveType("char");
		createPrimitiveType("byte");
		createPrimitiveType("short");
		createPrimitiveType("int");
		createPrimitiveType("long");
		createPrimitiveType("float");
		createPrimitiveType("double");
		createErrorType();
    }
    
    private JavaClassInfo createErrorType() {
    	JavaClassInfo javaClassInfo = new JavaClassInfo();
    	setPrimitiveAttributes(javaClassInfo, "error");
    	return javaClassInfo;
    }
    
    private JavaClassInfo createPrimitiveType(String name) {
    	JavaClassInfo javaClassInfo = new JavaClassInfo();
    	setPrimitiveAttributes(javaClassInfo, name);
    	javaClassInfo.isDefined = true;
    	return javaClassInfo;
    }
    
    private void setPrimitiveAttributes(JavaClassInfo javaClassInfo, String primitive) {
    	javaClassInfo.setIsArray(false);
    	javaClassInfo.setIsEnum(false);
    	javaClassInfo.setIsInterface(false);
    	javaClassInfo.setIsPrimitive(true);
    	javaClassInfo.setName(primitive);
    	javaClassInfo.setQualifiedName(primitive);
    	classInfoMap.put(primitive, javaClassInfo);
	}

	public static ClassModelMap getInstance() {
        return modelMap;
    }

    public Map<String, JClass> getClassInfoMap() {
        return classInfoMap;
    }
    
    public Map<String, JClass> getRootClassInfoMap() {
        return rootClassInfoMap;
    }

    public JavaClassInfo getClassInfo(String qualifiedClassName) {
    	
    	if(classInfoMap.containsKey(qualifiedClassName)) {
    		return (JavaClassInfo)classInfoMap.get(qualifiedClassName);
    	}
    	
    	JavaClassInfo classInfo = new JavaClassInfo();
        classInfoMap.put(qualifiedClassName, classInfo);
        
        return classInfo;
    }
}
