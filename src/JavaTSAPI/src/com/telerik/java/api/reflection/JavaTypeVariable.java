package com.telerik.java.api.reflection;

import java.util.List;

import com.telerik.java.api.*;

public class JavaTypeVariable implements JavaType, JTypeVariable {

	protected String name;
	protected List<JType> bounds;
	
	public String getName() {
		return name;
	}
	
	@Override
	public List<JType> getBounds() {
		return bounds;
	}

	@Override
	public boolean isHidden() {
		// TODO: This loops on Enum<E extends Enum>... instead of raising isHidden simply ignore the bound...
		//		for (JavaType bound: bounds)
		//			if (bound.isHidden())
		//				return true;
		return false;
	}
}
