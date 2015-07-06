package com.telerik.java.api.reflection;

import java.lang.reflect.Constructor;
import java.lang.reflect.Modifier;
import java.util.List;

import com.telerik.java.api.*;

public class JavaConstructor implements JConstructor {

	protected Constructor<?> reflectedConstructor;
	protected List<JTypeVariable> typeParameters;
	protected List<JParameter> parameters;

	@Override
	public List<JTypeVariable> getTypeParameters() {
		return typeParameters;
	}
	
	@Override
	public List<JParameter> getParameters() {
		return parameters;
	}
	
	@Override
	public boolean isPublic() {
		return Modifier.isPublic(reflectedConstructor.getModifiers());
	}

	@Override
	public boolean isProtected() {
		return Modifier.isProtected(reflectedConstructor.getModifiers());
	}

	@Override
	public boolean isPrivate() {
		return Modifier.isPrivate(reflectedConstructor.getModifiers());
	}

	@Override
	public boolean isStatic() {
		return Modifier.isStatic(reflectedConstructor.getModifiers());
	}

	@Override
	public boolean isFinal() {
		return Modifier.isFinal(reflectedConstructor.getModifiers());
	}

	@Override
	public boolean isAbstract() {
		return Modifier.isAbstract(reflectedConstructor.getModifiers());
	}

	@Override
	public boolean isHidden() {
		for (JParameter param: parameters)
			if (param.getType().isHidden())
				return true;
		return false;
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
