package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.function.Consumer;

public class JarScopeIterator implements Iterator<JarScope> {
	
	private final File[] jars;
	private final File tempDir;
	private JarScope[] cache;
	
	private int idx;
	
	public JarScopeIterator(File[] jars, File tempDir) throws IOException {
		this.jars = jars;
		this.idx = 0;
		this.tempDir = tempDir;
		this.cache = new JarScope[this.jars.length];
	}

	@Override
	public boolean hasNext() {
		return this.idx < this.jars.length;
	}

	@Override
	public JarScope next() {
		JarScope jarScope = this.cache[this.idx];
		if (jarScope == null) {
			jarScope = this.cache[this.idx] = new JarScope(this.jars[idx], tempDir);
		}
		++this.idx;
		return jarScope;
	}

	@Override
	public void remove() {
		throw new UnsupportedOperationException();
	}

	@Override
	public void forEachRemaining(Consumer<? super JarScope> action) {
		throw new UnsupportedOperationException();
	}
	
	public void reset() {
		this.idx = 0;
	}
	
//	private File[] getJarFiles() {
//		File[] jarFiles = this.jarDir.listFiles(new FileFilter() {
//			@Override
//			public boolean accept(File pathname) {
//				return FilenameUtils.getExtension(pathname.getName()).equals("jar");
//			}
//		});
//		return jarFiles;
//	}

}
