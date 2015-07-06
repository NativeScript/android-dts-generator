package com.telerik.java.api.compiler.model;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.*;

public class ConstructorInfo extends BaseJavaClassModelInfo implements JConstructor, ExecutableInfo {
	
    public List<JParameter> parameters = new ArrayList<JParameter>();
    public List<JTypeVariable> typeParameters = new ArrayList<JTypeVariable>();
    
	@Override
	public List<JTypeVariable> getTypeParameters() {
		return typeParameters;
	}

	@Override
	public List<JParameter> getParameters() {
		return parameters;
	}
    
    @Override
    public boolean isHidden() {
    	if (super.isHidden())
    		return true;
    	for(JParameter param: this.getParameters())
    		if (param.getType().isHidden())
    			return true;
    	for(JTypeVariable typeVariable: this.getTypeParameters())
    		if (typeVariable.isHidden())
    			return true;
    	return false;
    }
}
