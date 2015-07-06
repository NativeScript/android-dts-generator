package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

public class JSModule extends JSNode {
	
	protected ArrayList<JSFunction> functions = new ArrayList<JSFunction>();
	
	@Override
	public void accept(JSNodeVisitor visitor) {
		visitor.visit(this);
		super.accept(visitor);
	}
	
	public List<JSFunction> getFunctions() {
		return functions;
	}
}
