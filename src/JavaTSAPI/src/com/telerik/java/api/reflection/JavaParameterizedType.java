package com.telerik.java.api.reflection;

import java.util.List;

import com.telerik.java.api.*;

public class JavaParameterizedType implements JavaType, JParameterizedType {

	protected JavaType rawType;
	protected List<JType> actualTypeArguments;
	
	@Override
	public JavaType getRawType() {
		return rawType;
	}
	
	@Override
	public List<JType> getActualTypeArguments() {
		return actualTypeArguments;
	}

	@Override
	public boolean isHidden() {
		if (rawType.isHidden()) return true;
		for (JType actualTypeArgument: actualTypeArguments)
			if (actualTypeArgument.isHidden())
				return true;
		return false;
	}
}
