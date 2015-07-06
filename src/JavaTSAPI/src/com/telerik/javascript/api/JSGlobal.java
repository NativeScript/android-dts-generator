package com.telerik.javascript.api;

public class JSGlobal extends JSModule {
	
	protected JSPrimitive jsPrimitiveNumber;
	protected JSPrimitive jsPrimitiveString;
	protected JSPrimitive jsPrimitiveBoolean;
	protected JSPrimitive jsPrimitiveObject;
	protected JSPrimitive jsPrimitiveVoid;
	
	public JSGlobal() {
		jsPrimitiveNumber = new JSPrimitive();
		jsPrimitiveNumber.name = "number";
		
		jsPrimitiveString = new JSPrimitive();
		jsPrimitiveString.name = "string";
		
		jsPrimitiveBoolean = new JSPrimitive();
		jsPrimitiveBoolean.name = "boolean";
		
		jsPrimitiveObject = new JSPrimitive();
		jsPrimitiveObject.name = "object";
		
		jsPrimitiveVoid = new JSPrimitive();
		jsPrimitiveVoid.name = "void";
	}
	
	public JSPrimitive getTheNumberType() {
		return jsPrimitiveNumber;
	}
	
	public JSPrimitive getTheStringType() {
		return jsPrimitiveString;
	}
	
	public JSPrimitive getTheBooleanType() {
		return jsPrimitiveBoolean;
	}
	
	public JSPrimitive getTheObjectType() {
		return jsPrimitiveObject;
	}
	
	public JSPrimitive getTheVoidType() {
		return jsPrimitiveVoid;
	}
	
	@Override
	public void accept(JSNodeVisitor visitor) {
		visitor.visit(this);
		super.accept(visitor);
	}
}



