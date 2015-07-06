package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.List;

public class JSParameterizedType implements JSType {
	
	protected JSType rawType;
	protected ArrayList<JSType> actualTypeArguments = new ArrayList<JSType>();
	
	public JSType getRawType() {
		return rawType;
	}
	
	public List<JSType> getActualTypeArguments() {
		return actualTypeArguments;
	}
}
