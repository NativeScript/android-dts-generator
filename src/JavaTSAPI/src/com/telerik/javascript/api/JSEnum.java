package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.*;

public class JSEnum extends JSNode implements JSType {

	protected ArrayList<JSEnumField> enumFields = new ArrayList<JSEnumField>();
	protected ArrayList<JSFunction> functions = new ArrayList<JSFunction>();
	
	public JClass getPeer() {
		return (JClass)super.getPeer();
	}
	
	@Override
	public void accept(JSNodeVisitor visitor) {
		visitor.visit(this);
		super.accept(visitor);
	}
	
	public Iterable<JSEnumField> getEnumFields() {
		return enumFields;
	}
	
	public List<JSFunction> getFunctions() {
		return functions;
	}
	
	@Override
	public String toString() {
		return "Enum " + getQualifiedName();
	}
}
