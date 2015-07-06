package com.telerik.java.api.reflection;

import java.lang.reflect.Modifier;
import java.util.List;

import com.telerik.java.api.*;

public class JavaClass extends JavaNode implements JClass, JavaType {
	
	protected Class<?> reflectedClass;

	protected List<JField> fields;
	protected List<JType> genericInterfaces;
	protected List<JTypeVariable> typeParameters;
	protected List<JConstructor> constructors;
	protected List<JMethod> methods;
	
	protected JavaClass componentType;
	protected JavaType genericSuperclass;
	
	/**
	 * True if this is a class that is known to be hidden. Otherwise it depends on the other members. For example componentType may be hidden if this is an array.
	 */
	protected boolean isHidden;

	protected JavaClass() {
		super(null);
	}

	protected JavaClass(String name) {
		super(name);
	}

	@Override
	public String getQualifiedName() {
		String parentQName = getParent() == null ? "" : getParent().getQualifiedName(); 
		return parentQName == "" ? getName() : (parentQName + getConcatChar() + getName());
	}

	@Override
	public boolean isInterface() {
		return reflectedClass.isInterface();
	}

	@Override
	public boolean isEnum() {
		return reflectedClass.isEnum();
	}

	@Override
	public boolean isArray() {
		return reflectedClass.isArray();
	}
	
	@Override
	public boolean isHidden() {
		return isHidden || (isArray() && getComponentType().isHidden());
	}

	@Override
	public boolean isPublic() {
		return Modifier.isPublic(reflectedClass.getModifiers());
	}

	@Override
	public boolean isProtected() {
		return Modifier.isProtected(reflectedClass.getModifiers());
	}

	@Override
	public boolean isPrivate() {
		return Modifier.isPrivate(reflectedClass.getModifiers());
	}

	@Override
	public boolean isStatic() {
		return Modifier.isStatic(reflectedClass.getModifiers());
	}
	
	@Override
	public boolean isAbstract() {
		return Modifier.isAbstract(reflectedClass.getModifiers());
	}

	@Override
	public boolean isFinal() {
		return Modifier.isFinal(reflectedClass.getModifiers());
	}
	
	@Override
	public List<JField> getFields() {
		return fields;
	}

	@Override
	public JavaClass getComponentType() {
		return componentType;
	}
	
	@Override
	public JavaClass getEnclosingClass() {
		JavaNode parent = this.getParent();
		if (getParent() instanceof JavaClass)
			return (JavaClass) parent;
		return null;
	}

	@Override
	public JType getGenericSuperclass() {
		return genericSuperclass;
	}
	
	@Override
	public List<JType> getGenericInterfaces() {
		return genericInterfaces;
	}
	
	@Override
	public List<JTypeVariable> getTypeParameters() {
		return typeParameters;
	}
	
	@Override
	public List<JConstructor> getConstructors() {
		return constructors;
	}

	@Override
	public List<JMethod> getMethods() {
		return methods;
	}
	
	private String getConcatChar() {
		return getParent() instanceof JavaClass ? "$" : ".";
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

	@Override
	public List<JAnnotation> getAnnotations() {
		return null;
	}
}