package com.telerik.java.api.reflection;

import com.telerik.java.api.*;

public class JavaGenericArrayType implements JavaType, JGenericArrayType {
	protected JavaType genericComponentType;
	
	@Override
	public JavaType getGenericComponentType() {
		return genericComponentType;
	}

	@Override
	public boolean isHidden() {
		return genericComponentType.isHidden();
	}
}
