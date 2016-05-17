package com.telerik.java.api.bcel;

import java.io.File;
import java.util.Iterator;

public class FileScope extends Scope {
	private final File[] files;
	
	public FileScope(Scope parent, File[] files) {
		super(parent);
		this.files = files;
	}
	
	public Iterator<ClassScope> iterator() {
		return new ClassScopeIterator(this, this.files);
	}

	public File[] getFiles() {
		return this.files;
	}

}
