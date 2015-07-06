package com.telerik.java.api.compiler.model;

import java.util.ArrayList;
import java.util.List;
import com.telerik.java.api.JParameterizedType;
import com.telerik.java.api.JType;

public class ParameterizedTypeInfo implements JParameterizedType {

	private JType type;
	private List<JType> actualTypeArguments = new ArrayList<JType>();
	private boolean isHidden;
	
	@Override
	public JType getRawType() {
		return this.type;
	}
	
	public void setRawType(JType type) {
		this.type = type;
	}

	@Override
	public List<JType> getActualTypeArguments() {
		return this.actualTypeArguments;
	}
	
	@Override
	public String toString() {
	
		StringBuilder sb = new StringBuilder();
		sb.append(this.type);
		
		int size = actualTypeArguments.size();
		if (size > 0) {
			sb.append("<");
			for (int i = 0; i < size; i++) {
				JType t = actualTypeArguments.get(i);
				sb.append(t.toString());
				if (i < (size - 1)) {
					sb.append(", ");
				}
			}
			sb.append(">");
		}
		return  sb.toString();
	}

	public void setIsHidden(){
		this.isHidden = true;
	}
	
	@Override
	public boolean isHidden() {
		for(JType jType: this.getActualTypeArguments())
			if (jType.isHidden())
				return true;
		if (this.type.isHidden())
			return true;
		return this.isHidden;
	}
}
