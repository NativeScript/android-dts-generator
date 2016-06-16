package com.telerik.java.api.bcel;

import org.apache.bcel.classfile.Method;

public class MethodScope extends MemberScope {
	private final Method method;
	
	public MethodScope(ClassScope parent, Method method) {
		super(parent);
		this.method = method;
	}

	public Method getMethod() {
		return this.method;
	}

}
