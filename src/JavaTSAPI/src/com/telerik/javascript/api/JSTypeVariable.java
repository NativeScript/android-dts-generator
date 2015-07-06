package com.telerik.javascript.api;

import com.telerik.java.api.JTypeVariable;

public class JSTypeVariable implements JSType {
	
	// TODO: Consider extending JSMember and chaining the parent property.
	
	protected JTypeVariable jPeer;
	protected JSType bound;
	protected String name;
	
	public String getName() {
		if (name == null)
			if (jPeer == null) return null;
			else return jPeer.getName();
		return name;
	}
	
	public JTypeVariable getPeer() {
		return jPeer;
	}

	public JSType getBound() {
		return bound;
	}
}
