package com.telerik.java.api.bcel;

import java.util.Iterator;
import java.util.Stack;

public abstract class Scope {
	private final Scope parent;
	private final Stack<Scope> context;
	
	protected Scope(Scope parent) {
		this.parent = parent;
		this.context = new Stack<Scope>();
	}

	public final Scope getParent() {
		return this.parent;
	}
	
	public final Iterator<Scope> getContext() {
		return this.context.iterator();
	}
	
	protected final Stack<Scope> getStack() {
		return this.context;
	}
}
