package com.telerik.javascript.api;

import com.telerik.java.api.JField;

public class JSEnumField {

	protected JField jPeer;
	protected String name;
	
	public JSEnumField() {
	}
	
	protected JField getPeer() {
		return jPeer;
	}
	
	public String getName() {
		return name;
	}
	
	public String getDocumentation() {
		return this.getPeer() == null ? null : JSDocConverter.getFieldHelp(this.getPeer().getDocumentation());
	}
}
