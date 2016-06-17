package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;

import java.util.Map;

public interface ClassMapProvider {
	Map<String, JavaClass> getClassMap();
	
	String getPath();
}
