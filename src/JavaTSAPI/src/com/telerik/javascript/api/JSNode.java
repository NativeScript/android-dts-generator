package com.telerik.javascript.api;

import java.util.HashMap;
import com.telerik.java.api.*;

public abstract class JSNode extends JSMember {
	
	protected JSNode parent;
	protected JNode jPeer;
	
	protected String name;
	private HashMap<String, JSNode> children = new HashMap<String, JSNode>();
	
	protected JSNode() {
	}
	
	@Override
	public JNode getPeer() {
		return (JNode)jPeer;
	}
	
	@Override
	public JSNode getParent() {
		return (JSNode)parent;
	}
	
	public String getName() {
		return name;
	}
	
	public String getQualifiedName() {
		String qName = getName();
		JSNode p = getParent();
		while(p != null) {
			qName = p instanceof JSGlobal ? qName : p.getName() + (p == parent ? ":" : ".") + qName;
			p = p.getParent();
		}
		
		return qName;
	}

	public void add(JSNode jsChild) {
		children.put(jsChild.getName(), jsChild);
		jsChild.parent = this;
		onNodeAdded(jsChild);
	}

	protected void onNodeAdded(JSNode jsChild) {
		if (parent == this) {
			throw null;
		}
		if (parent != null)
			parent.onNodeAdded(jsChild);
	}

	public Iterable<JSNode> getChildren() {
		return children.values();
	}
	
	public void accept(JSNodeVisitor visitor) {
		for (JSNode child: getChildren())
			child.accept(visitor);
		visitor.exit();
	}
	
	@Override
	public String getDocumentation() {
		return this.getPeer() == null ? null : JSDocConverter.getNodeHelp(this.getPeer().getDocumentation());
	}
}


