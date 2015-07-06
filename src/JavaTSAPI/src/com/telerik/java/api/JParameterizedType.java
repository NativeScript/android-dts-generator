package com.telerik.java.api;

import java.util.List;

public interface JParameterizedType extends JType {
	JType getRawType();
	List<JType> getActualTypeArguments();
}
