package com.telerik.java.api.reflection;

import com.telerik.java.api.*;

public class JavaParameter implements JParameter {
	protected JavaType type;
	protected String name;
	
	@Override
	public String getName() {
		return name;
	}
	
	@Override
	public JavaType getType() {
		return type;
	}

	@Override
	public String getDocumentation() {
		return null;
	}
}
