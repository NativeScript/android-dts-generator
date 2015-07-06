package com.telerik.javascript.api;

import com.telerik.java.api.*;

public class JSField {
	
	protected JField jPeer;
	protected JSType type;
	protected String name;
	protected boolean isStatic;
	protected boolean isPrivate;
	protected boolean isOptional;
	
	public JSField() {
		isStatic = false;
		isPrivate = false;
		isOptional = false;
	}
	
	public boolean isPrivate() {
		return isPrivate;
	}
	
	public boolean isOptional() {
		return isOptional;
	}
	
	protected JField getPeer() {
		return jPeer;
	}
	
	public String getName() {
		return name;
	}
	
	public boolean isStatic() {
		return isStatic;
	}

	public JSType getGenericType() {
		return type;
	}

	public String getDocumentation() {
		return this.getPeer() == null ? null : JSDocConverter.getFieldHelp(this.getPeer().getDocumentation());
	}
}
