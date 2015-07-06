package com.telerik.java.api.compiler.model;

import com.telerik.java.api.JField;
import com.telerik.java.api.JType;

public class FieldInfo extends BaseJavaClassModelInfo implements JField {

	private JType type;
	
	@Override
	public JType getType() {
		return type;
	}
	
	public void setType(JType type){
		this.type = type;
	}
	
	@Override
	public String toString() {
		StringBuffer sb = new StringBuffer();
		// sb.append(comment != null ? comment : "");
		if (this.isPublic()) {
			sb.append("public ");	
		}
		else if (this.isProtected()) {
			sb.append("protected ");
		}
		else {
			sb.append("private ");
		}
		
		if (this.isAbstract()) {
			sb.append("abstract ");
		}
		
		if (this.isStatic()) {
			sb.append("static ");
		}
		
		if (this.isFinal()) {
			sb.append("final ");
		}
		
		sb.append(this.getType().toString() + " ");
		sb.append(this.getName() + ";");
		return sb.toString();
	}
	
	@Override
	public boolean isHidden() {
		return super.isHidden() || this.getType().isHidden();
	}
}
