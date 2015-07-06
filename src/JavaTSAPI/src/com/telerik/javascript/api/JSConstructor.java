package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.*;

public class JSConstructor extends JSMember {

	// TODO: The constructor should have no type parameters, these come from the class.
	protected ArrayList<JSTypeVariable> typeParameters = new ArrayList<JSTypeVariable>();
	protected ArrayList<JSParameter> parameters = new ArrayList<JSParameter>();

	protected JConstructor jPeer;
	
	public boolean isStatic() {
		return jPeer.isStatic();
	}
	
	public JConstructor getPeer() {
		return jPeer;
	}

	public List<JSTypeVariable> getTypeParameters() {
		return typeParameters;
	}
	
	public List<JSParameter> getParameters() {
		return parameters;
	}
	
	@Override
	public String getDocumentation() {
		return this.getPeer() == null ? null : JSDocConverter.getFunctionHelp(this.getPeer().getDocumentation());
	}
}
