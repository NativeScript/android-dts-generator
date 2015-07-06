package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.*;

public class JSClass extends JSNode implements JSType {
	
	protected ArrayList<JSTypeVariable> typeParameters = new ArrayList<JSTypeVariable>();
	protected ArrayList<JSType> interfaces = new ArrayList<JSType>();

	protected ArrayList<JSField> fields = new ArrayList<JSField>();
	protected ArrayList<JSConstructor> constructors = new ArrayList<JSConstructor>();
	protected ArrayList<JSMethod> methods = new ArrayList<JSMethod>();
	protected ArrayList<JSIndexer> indexers = new ArrayList<JSIndexer>();

	protected JSType superclass;
	
	public JSType getSuperclass() {
		return superclass;
	}
	
	public JClass getPeer() {
		return (JClass)super.getPeer();
	}
	
	public Iterable<JSField> getFields() {
		return fields;
	}
	
	public List<JSConstructor> getConstructors() {
		return constructors;
	}
	
	public List<JSMethod> getMethods() {
		return methods;
	}
	
	public List<JSIndexer> getIndexers() {
		return indexers;
	}
	
	public List<JSType> getInterfaces() {
		return interfaces;
	}
	
	public List<JSTypeVariable> getTypeParameters() {
		return typeParameters;
	}
	
	public boolean isAbstract() {
		return getPeer().isAbstract();
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
		return "Class " + getQualifiedName();
	}
}













