package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.function.Consumer;

public class ClassScopeIterator implements Iterator<ClassScope> {
	private final FileScope scope;
	private final File[] classFiles;
	private int idx;
	
	public ClassScopeIterator(FileScope scope, File[] classFiles) {
		this.scope = scope;
		this.classFiles = classFiles;
		this.idx = 0;
	}

	@Override
	public boolean hasNext() {
		return this.idx < this.classFiles.length;
	}

	@Override
	public ClassScope next() {
		try {
			return new ClassScope(this.scope, this.classFiles[this.idx++]);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public void remove() {
		throw new UnsupportedOperationException();
	}

	@Override
	public void forEachRemaining(Consumer<? super ClassScope> action) {
		throw new UnsupportedOperationException();
	}

}
