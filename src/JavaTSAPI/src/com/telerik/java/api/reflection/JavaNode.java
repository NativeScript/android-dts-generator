package com.telerik.java.api.reflection;

import java.util.Collection;
import java.util.HashMap;
import com.telerik.java.api.JNode;
import com.telerik.java.api.JNodeVisitor;

public abstract class JavaNode implements JNode {
	
	private JavaNode parent;
	private String name;
	private HashMap<String, JavaNode> children;
	
	protected JavaNode() {
		children = new HashMap<String, JavaNode>();
	}
	
	protected JavaNode(String name) {
		this();
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public JavaNode getParent() {
		return parent;
	}
	
	public Collection<JavaNode> getChildren() {
		return this.children.values();
	}

	public abstract String getQualifiedName();

	protected void put(JavaNode node) {
		node.parent = this;
		children.put(node.getName(), node);
	}

	public JavaNode get(String name) {
		return children.get(name);
	}
	
	@Override
	public void accept(JNodeVisitor jNodeVisitor) {
		for (JavaNode javaNode: getChildren())
			javaNode.accept(jNodeVisitor);
		jNodeVisitor.exit();
	}
}

