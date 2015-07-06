package com.telerik.javascript.api;

import com.telerik.java.api.JMethod;

public class JSFunction extends JSFunctionType {

	protected String name;
	
	protected JMethod jPeer;
	
	public JMethod getPeer() {
		return jPeer;
	}
	
	public String getName() {
		if (name == null)
			if (jPeer == null) return null;
			else return jPeer.getName();
		else return name;
	}
	
	@Override
	public String getDocumentation() {
		return this.getPeer() == null ? null : JSDocConverter.getFunctionHelp(this.getPeer().getDocumentation());
	}
}
