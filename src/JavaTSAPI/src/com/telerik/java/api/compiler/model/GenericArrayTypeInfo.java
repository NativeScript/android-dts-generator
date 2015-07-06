package com.telerik.java.api.compiler.model;

import com.telerik.java.api.JGenericArrayType;
import com.telerik.java.api.JType;

public class GenericArrayTypeInfo implements JGenericArrayType {
	
	public JType componentType;
	private boolean isHidden;

	@Override
	public String toString() {
		return this.componentType.toString() + "[]";
	}
	
	public void setIsHidden() {
		this.isHidden = true;
	}

	@Override
	public boolean isHidden() {
		return this.isHidden || this.componentType.isHidden();
	}

	@Override
	public JType getGenericComponentType() {
		return componentType;
	}
}
