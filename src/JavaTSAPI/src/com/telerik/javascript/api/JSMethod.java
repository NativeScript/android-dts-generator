package com.telerik.javascript.api;

public class JSMethod extends JSFunction {
	
	public boolean isStatic() {
		if (jPeer == null) return false;
		else return jPeer.isStatic();
	}
}
