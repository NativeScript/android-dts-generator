package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import org.apache.bcel.classfile.JavaClass;

public class ClassScope extends Scope {
	private final File classFile;
	private final JavaClass javaClass;
	
	public ClassScope(FileScope parent, File classFile) throws IOException {
		super(parent);
		this.classFile = classFile;
		this.javaClass = this.loadJavaClass();
	}
	
	public Iterator<MemberScope> iterator() {
		return new MemberScopeIterator(this, this.javaClass);
	}
	
	public JavaClass getJavaClass() {
		return this.javaClass;
	}
	
	private JavaClass loadJavaClass() throws IOException {
		JavaClass clazz = ClassRepo.loadClass(this.classFile);
		return clazz;
	}
}
