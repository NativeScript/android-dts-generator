package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.*;

public class JSInterface extends JSNode implements JSType {
	
	protected ArrayList<JSTypeVariable> typeParameters = new ArrayList<JSTypeVariable>();
	protected ArrayList<JSType> interfaces = new ArrayList<JSType>();
	protected ArrayList<JSField> fields = new ArrayList<JSField>();
	protected ArrayList<JSMethod> methods = new ArrayList<JSMethod>();
	
	protected JSInterface() {
	}
	
	public JClass getPeer() {
		return (JClass)jPeer;
	}
	
	public List<JSTypeVariable> getTypeParameters() {
		return typeParameters;
	}
	
	public List<JSType> getInterfaces() {
		return interfaces;
	}

	public Iterable<JSField> getFields() {
		return fields;
	}
	
	public List<JSMethod> getMethods() {
		return methods;
	}
	
	@Override
	public JSType getType(JType jType) {
		for (JSTypeVariable jsTypeVariable: getTypeParameters())
			if (jsTypeVariable.getPeer() == jType)
				return jsTypeVariable;
		return super.getType(jType);
	}
	
	@Override
	public void accept(JSNodeVisitor visitor) {
		visitor.visit(this);
		super.accept(visitor);
	}
	
	@Override
	public String toString() {
		return "Interface " + getQualifiedName();
	}
}
