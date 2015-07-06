package com.telerik.java.api.reflection;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.List;

import com.telerik.java.api.*;

public class JavaMethod implements JMethod {
	
	protected Method reflectedMethod;
	protected List<JTypeVariable> typeParameters;
	protected List<JParameter> parameters;
	protected JavaType returnType;
	
	@Override
	public String getName() {
		return reflectedMethod.getName();
	}
	
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
		return Modifier.isPublic(reflectedMethod.getModifiers());
	}

	@Override
	public boolean isProtected() {
		return Modifier.isProtected(reflectedMethod.getModifiers());
	}

	@Override
	public boolean isPrivate() {
		return Modifier.isPrivate(reflectedMethod.getModifiers());
	}

	@Override
	public boolean isStatic() {
		return Modifier.isStatic(reflectedMethod.getModifiers());
	}

	@Override
	public boolean isFinal() {
		return Modifier.isFinal(reflectedMethod.getModifiers());
	}

	@Override
	public boolean isAbstract() {
		return Modifier.isAbstract(reflectedMethod.getModifiers());
	}
	
	@Override
	public boolean isHidden() {
		for (JParameter param: parameters)
			if (param.getType().isHidden())
				return true;
		if (returnType.isHidden())
			return true;
		return false;
	}

	@Override
	public JavaType getReturnType() {
		return this.returnType;
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
