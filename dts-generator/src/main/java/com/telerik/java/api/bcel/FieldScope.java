package com.telerik.java.api.bcel;

import org.apache.bcel.classfile.Field;

public class FieldScope extends MemberScope {
	private final Field field;
	
	public FieldScope(ClassScope parent, Field field) {
		super(parent);
		this.field = field;
	}

	public Field getField() {
		return this.field;
	}

}
