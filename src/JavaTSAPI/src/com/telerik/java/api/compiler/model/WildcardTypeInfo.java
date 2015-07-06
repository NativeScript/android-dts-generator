package com.telerik.java.api.compiler.model;

import com.telerik.java.api.JWildcardType;

public class WildcardTypeInfo implements JWildcardType {
	@Override
	public String toString() {
		return "?";
	}

	@Override
	public boolean isHidden() {
		return false;
	}
}
