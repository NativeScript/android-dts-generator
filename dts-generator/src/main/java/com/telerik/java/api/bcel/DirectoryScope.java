package com.telerik.java.api.bcel;

import java.io.File;
import java.util.Iterator;

public class DirectoryScope extends Scope {
	private final File directory;

	public DirectoryScope(File directory) {
		super(null);
		this.directory = directory;
	}

	public File getDirectory() {
		return this.directory;
	}
	
	public Iterator<FileScope> iterator() {
		return new FileScopeIterator(this);
	}
}
