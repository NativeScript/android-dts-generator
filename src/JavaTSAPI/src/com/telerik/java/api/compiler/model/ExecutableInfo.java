package com.telerik.java.api.compiler.model;

import java.util.List;

import com.telerik.java.api.*;

public interface ExecutableInfo {
	List<JTypeVariable> getTypeParameters();
	List<JParameter> getParameters();
	String getParameterDocumentation(int index);
}

