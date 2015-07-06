package com.telerik.javascript.api;

import java.util.HashMap;
import com.telerik.java.api.*;

public class JSMember implements TypeScope {
	
	protected JSMember parent;
	protected Object jPeer;
	 
	private HashMap<Object, Object> annotations = new HashMap<Object, Object>();
	
	public JSMember getParent() {
		return parent;
	}
	
	public Object getPeer() {
		return jPeer;
	}
	
	public void annotate(Object annotation) {
		annotations.put(annotation, null);
	}
	
	public void annotate(Object annotation, Object value) {
		annotations.put(annotation, value);
	}
	
	public boolean hasAnnotation(Object annotation) {
		return annotations.containsKey(annotation);
	}
	
	public Object getAnnotation(Object annotation) {
		return annotations.get(annotation);
	}
	
	public JSType getType(JType jType) {
		if (parent == null) return null;
		else return parent.getType(jType);
	}
	
	public String getDocumentation() {
		return null;
	}
}
