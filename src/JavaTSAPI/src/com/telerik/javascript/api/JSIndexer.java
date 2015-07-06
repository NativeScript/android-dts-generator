package com.telerik.javascript.api;

public class JSIndexer extends JSMember {
	
	protected JSType jsReturnType;
	protected JSParameter jsParameter;
	
	public JSType getReturnType() {
		return jsReturnType;
	}
	
	public JSParameter getIndexParameter() {
		return jsParameter;
	}
}
