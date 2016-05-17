package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.JavaClass;

public class ClassRepo {
	private ClassRepo() {
	}
	
	private final static HashMap<String, JavaClass> cacheByName = new HashMap<String, JavaClass>();
	
	private final static HashMap<String, JavaClass> cacheByPath = new HashMap<String, JavaClass>();
	
	public static JavaClass findClass(String className) {
		return cacheByName.get(className);
	}

	public static void cacheClass(String className, JavaClass javaClass) {
		cacheByName.put(className, javaClass);
	}
	
	public static JavaClass loadClass(File file) throws IOException {
		String path = file.getAbsolutePath();
		JavaClass clazz = null;
		if (cacheByPath.containsKey(path)) {
			clazz = cacheByPath.get(path);
		} else {
			ClassParser cp = new ClassParser(path);
			clazz = cp.parse();
			cacheByPath.put(path, clazz);
		}
		return clazz;
	}
}
