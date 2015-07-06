package com.telerik.java.api.compiler.model;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import com.telerik.java.api.*;

public class ContextInfo implements JContext, JNode {
	
	private Map<String, JClass> map;
	private Map<String, JNode> children;
	
	public ContextInfo(Map<String, JClass> map, Map<String, JClass> rootMap) {
		children = new HashMap<String, JNode>();
		this.map = map;
		for(JClass jClass: rootMap.values()) {
			try{
				if (!jClass.isHidden() && !jClass.getQualifiedName().contains("\\$")) {
					addClass(jClass);
				}
			}
			catch (Exception ex) {
				ex.printStackTrace();
			}
		}
	}
	
	private void addClass(JClass jClass) {
		String[] tokens = jClass.getQualifiedName().split("\\.");
		addNamespaces(this, jClass, tokens, 0);
	}

	private void addNamespaces(JNode jarEntity, JClass jClass, String[] tokens, int depth) {
		if (depth < tokens.length - 1) {
			String name = tokens[depth];
			
			JavaPackageInfo current; // = ((JavaPackageInfo)jarEntity).children.get(name);
			if (jarEntity instanceof ContextInfo) {
				current = (JavaPackageInfo) ((ContextInfo) jarEntity).children.get(name);
			} else if (jarEntity instanceof JavaPackageInfo) {
				current = (JavaPackageInfo) ((JavaPackageInfo) jarEntity).children.get(name);
			} else {
				current = null;
			}
			
			if (current == null) {
				current = new JavaPackageInfo();
				current.name = name;
				
				// TODO: name and qualified name...
				if (jarEntity instanceof ContextInfo) {
					current.qualifiedName = name;
					((ContextInfo)jarEntity).children.put(name, current);
				} else if (jarEntity instanceof JavaPackageInfo) {
					JavaPackageInfo pack = ((JavaPackageInfo) jarEntity);
					current.qualifiedName = pack.getQualifiedName() + "." + name;
					pack.children.put(name, current);
				}
			}
			
			addNamespaces(current, jClass, tokens, depth + 1);
		} else {
			if (jarEntity instanceof ContextInfo) {
				((ContextInfo)jarEntity).children.put(jClass.getName(), jClass);
			} else if (jarEntity instanceof JavaPackageInfo) {
				((JavaPackageInfo) jarEntity).children.put(jClass.getName(), jClass);
			}
		}
	}
	
	@Override
	public String getName() {
		return "";
	}
	
	public Collection<JNode> getChildren() {
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
	public JClass getClass(String name) {
		return this.map.get(name);
	}

	@Override
	public String getDocumentation() {
		return null;
	}
}
