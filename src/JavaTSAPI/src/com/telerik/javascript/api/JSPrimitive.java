package com.telerik.javascript.api;

public class JSPrimitive implements JSType {
	protected String name;
	
	public String getName() {
		return name;
	}
	
	@Override
	public String toString() {
		return "primitive " + getName();
	}
}
