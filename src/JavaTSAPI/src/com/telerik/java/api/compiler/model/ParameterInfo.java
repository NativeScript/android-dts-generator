package com.telerik.java.api.compiler.model;

import com.telerik.java.api.JType;
import com.telerik.java.api.JParameter;

public class ParameterInfo implements JParameter {

	private String name;
	private JType type;
	private String comment;
	
	@Override
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public JType getType() {
		return type;
	}
	
	public void setType(JType type) {
		this.type = type;
	}
	
	@Override
	public String toString() {
		return this.type.toString() + " " + this.name;
	}
	
	public void setDocumentation(String comment) {
		this.comment = comment;
	}

	@Override
	public String getDocumentation() {
		return this.comment;
	}
}
