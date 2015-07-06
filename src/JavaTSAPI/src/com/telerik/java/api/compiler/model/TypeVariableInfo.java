package com.telerik.java.api.compiler.model;

import java.util.ArrayList;
import java.util.List;
import com.telerik.java.api.JType;
import com.telerik.java.api.JTypeVariable;

public class TypeVariableInfo implements JTypeVariable {

	private String name;
	private List<JType> bounds = new ArrayList<JType>();
	
	private boolean isHidden;
	
	@Override
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public List<JType> getBounds() {
		return this.bounds;
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		int size = bounds.size();
		if (size > 0) {
			for (int i = 0; i < size; i++) {
				JType t = bounds.get(i);
				sb.append(t.toString());
				if (i < (size - 1)) {
					sb.append(", ");
				}
			}
			
			sb.append(" ");
		}
		
		sb.append(this.name);
		return  sb.toString();
	}

	@Override
	public boolean isHidden() {
		return this.isHidden;
	}
}