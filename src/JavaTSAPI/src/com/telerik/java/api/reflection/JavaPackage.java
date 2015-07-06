package com.telerik.java.api.reflection;

import com.telerik.java.api.JNodeVisitor;
import com.telerik.java.api.JPackage;

public class JavaPackage extends JavaNode implements JPackage {

	protected JavaPackage(String name) {
		super(name);
	}
	
	@Override
	public String getQualifiedName() {
		String parentQName = getParent().getQualifiedName(); 
		return parentQName == "" ? getName() : (parentQName + "." + getName());
	}
	
	@Override
	public void accept(JNodeVisitor jNodeVisitor) {
		jNodeVisitor.visit(this);
		super.accept(jNodeVisitor);
	}

	@Override
	public String getDocumentation() {
		return null;
	}
}
