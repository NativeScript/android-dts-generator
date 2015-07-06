package com.telerik.java.api.reflection;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;

import com.telerik.java.api.JAnnotation;
import com.telerik.java.api.JField;
import com.telerik.java.api.JType;

public class JavaField implements JField {
	
	protected Field reflectedField;
	protected JType type;
	
	public JavaField() {
	}
	
	public String getName() {
		return reflectedField.getName();
	}

	@Override
	public JType getType() {
		return type;
	}
	
	@Override
	public boolean isPublic() {
		return Modifier.isPublic(reflectedField.getModifiers());
	}

	@Override
	public boolean isProtected() {
		return Modifier.isProtected(reflectedField.getModifiers());
	}

	@Override
	public boolean isPrivate() {
		return Modifier.isPrivate(reflectedField.getModifiers());
	}

	@Override
	public boolean isStatic() {
		return Modifier.isStatic(reflectedField.getModifiers());
	}
	
	@Override
	public boolean isAbstract() {
		return Modifier.isAbstract(reflectedField.getModifiers());
	}

	@Override
	public boolean isFinal() {
		return Modifier.isFinal(reflectedField.getModifiers());
	}
	
	@Override
	public boolean isHidden() {
		return this.type.isHidden();
	}

	@Override
	public List<JAnnotation> getAnnotations() {
		return null;
	}

	@Override
	public String getDocumentation() {
		return null;
	}
}
