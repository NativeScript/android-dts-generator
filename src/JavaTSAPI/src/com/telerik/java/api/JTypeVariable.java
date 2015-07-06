package com.telerik.java.api;

import java.util.List;

public interface JTypeVariable extends JType {
	String getName();
	List<JType> getBounds();
}
