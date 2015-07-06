package com.telerik.java.api;

import java.util.List;

public interface JConstructor extends JModifiers {
	List<JTypeVariable> getTypeParameters();
	List<JParameter> getParameters();
	String getDocumentation();
}
