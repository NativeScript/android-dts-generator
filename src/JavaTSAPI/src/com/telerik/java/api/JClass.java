package com.telerik.java.api;

import java.util.List;

public interface JClass extends JNode, JType, JModifiers {
	String getName();
	String getQualifiedName();
	
	boolean isInterface();
	boolean isEnum();
	boolean isArray();

	JType getComponentType();
	JType getGenericSuperclass();
	List<JType> getGenericInterfaces();
	List<JTypeVariable> getTypeParameters();
	
	List<JField> getFields();
	List<JConstructor> getConstructors();
	List<JMethod> getMethods();
	JClass getEnclosingClass();
}
