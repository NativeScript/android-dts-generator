package com.telerik.java.api.compiler.model;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.JMethod;
import com.telerik.java.api.JParameter;
import com.telerik.java.api.JType;
import com.telerik.java.api.JTypeVariable;

public class MethodInfo extends BaseJavaClassModelInfo implements JMethod, ExecutableInfo {
	
    public List<JParameter> parameters = new ArrayList<JParameter>();
    public List<JTypeVariable> typeParameters = new ArrayList<JTypeVariable>();
    private JType returnType;

    public List<JParameter> getParameters() {
        return parameters;
    }

    public JType getReturnType() {
        return returnType;
    }

    public void setReturnType(JType returnType) {
        this.returnType = returnType;
    }
    
    public List<JTypeVariable> getTypeParameters() {
        return this.typeParameters;
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
    	if (this.returnType != null && this.returnType.isHidden())
    		return true;
    	return false;
    }
}
