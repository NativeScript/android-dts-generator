package com.telerik.javascript.api;

import com.telerik.java.api.*;

public class JSArray implements JSType {
	
	protected JSType jsComponentType;
	protected JType jPeer;
	
	public JType getPeer() {
		return jPeer;
	}
	
	public JSType getComponentType() {
		return jsComponentType;	
	}
}
