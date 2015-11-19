package com.telerik.java.api.bcel;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.function.Consumer;

public class DirectoryScopeIterator implements Iterator<DirectoryScope> {
	
	private final File extractedJarDir;
	private final File[] dirs;
	private int idx;

	public DirectoryScopeIterator(File extractedJarDir) {
		this.extractedJarDir = extractedJarDir;
		this.dirs = buildTree(extractedJarDir);
		this.idx = 0;
	}

	@Override
	public boolean hasNext() {
		return this.idx < this.dirs.length;
	}

	@Override
	public DirectoryScope next() {
		return new DirectoryScope(this.dirs[this.idx++]);
	}

	@Override
	public void remove() {
		throw new UnsupportedOperationException();
	}

	@Override
	public void forEachRemaining(Consumer<? super DirectoryScope> action) {
		throw new UnsupportedOperationException();
	}
	
	private File[] buildTree(File dir) {
		ArrayList<File> dirs = new ArrayList<File>();
		buildTreeRec(dir, dirs);
		return dirs.toArray(new File[dirs.size()]);
	}
	
	private void buildTreeRec(File dir, ArrayList<File> dirs) {
		dirs.add(dir);
		for (File d: dir.listFiles()) {
			if (d.isDirectory()) {
				buildTreeRec(d, dirs);
			}
		}
	}

}
