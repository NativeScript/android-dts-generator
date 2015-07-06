package com.telerik.java.api;

public interface JNode {
	String getName();
	Iterable<? extends JNode> getChildren();
	void accept(JNodeVisitor jNodeVisitor);
	String getDocumentation();
}
