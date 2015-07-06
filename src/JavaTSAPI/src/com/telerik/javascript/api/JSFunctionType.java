package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;
import com.telerik.java.api.JType;

public class JSFunctionType extends JSMember {

	protected List<JSTypeVariable> typeParameters = new ArrayList<JSTypeVariable>();
	protected List<JSParameter> parameters = new ArrayList<JSParameter>();
	
	protected JSType returnType;
	
	public JSType getReturnType() {
		return returnType;
	}
	
	@Override
	public JSType getType(JType jType) {
		for (JSTypeVariable jsTypeVariable: getTypeParameters())
			if (jsTypeVariable.getPeer() == jType)
				return jsTypeVariable;
		return super.getType(jType);
	}

	public List<JSTypeVariable> getTypeParameters() {
		return typeParameters;
	}
	
	public List<JSParameter> getParameters() {
		return parameters;
	}
}
