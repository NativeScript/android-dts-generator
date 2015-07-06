package com.telerik.java.api;

import java.util.List;

public interface JMethod extends JModifiers {
	String getName();
	List<JTypeVariable> getTypeParameters();
	List<JParameter> getParameters();
	JType getReturnType();
	
	String getDocumentation();
}
