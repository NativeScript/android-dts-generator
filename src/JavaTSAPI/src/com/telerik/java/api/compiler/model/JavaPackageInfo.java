package com.telerik.java.api.compiler.model;

import java.util.HashMap;
import com.telerik.java.api.*;

public class JavaPackageInfo implements JPackage {

	public HashMap<String, JNode> children = new HashMap<String, JNode>();
	public String name;
	public String qualifiedName;
	
	@Override
	public Iterable<? extends JNode> getChildren() {
		return this.children.values();
	}

	@Override
	public void accept(JNodeVisitor jNodeVisitor) {
		jNodeVisitor.visit(this);
		for (JNode javaNode: getChildren())
			javaNode.accept(jNodeVisitor);
		jNodeVisitor.exit();
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public String getQualifiedName() {
		return qualifiedName;
	}

	@Override
	public String getDocumentation() {
		return null;
	}
}
