package com.telerik.java.api.bcel;

import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.function.Consumer;
import org.apache.commons.io.FilenameUtils;

public class FileScopeIterator implements Iterator<FileScope> {
	private final DirectoryScope scope;
	private final ArrayList<File> files;
	private int idx;

	public FileScopeIterator(DirectoryScope scope) {
		this.scope = scope;
		this.files = loadFiles();
		this.idx = 0;
	}

	@Override
	public boolean hasNext() {
		return this.idx < this.files.size();
	}

	@Override
	public FileScope next() {
		File[] files = getNext();
		return new FileScope(this.scope, files);
	}

	@Override
	public void remove() {
		throw new UnsupportedOperationException();
	}

	@Override
	public void forEachRemaining(Consumer<? super FileScope> action) {
		throw new UnsupportedOperationException();
	}

	private ArrayList<File> loadFiles() {
		ArrayList<File> files = new ArrayList<File>();
		File[] dirFiles = this.scope.getDirectory().listFiles();
		for (File f : dirFiles) {
			if (f.isFile()
					&& FilenameUtils.getExtension(f.getName()).equals("class")
					&& !f.getName().startsWith("$")) {
				files.add(f);
			}
		}
		files.sort(new Comparator<File>() {
			public int compare(File o1, File o2) {
				String n1 = FilenameUtils.removeExtension(o1.getName());
				String n2 = FilenameUtils.removeExtension(o2.getName());
				if (n1.startsWith(n2))
					return 1;
				if (n2.startsWith(n1))
					return -1;
				int result = n1.compareTo(n2);
				return result;
			}
		});
		return files;
	}

	private File[] getNext() {
		ArrayList<File> lst = new ArrayList<File>();
		boolean first = true;
		while ((this.idx < this.files.size()) && keepGoing(first)) {
			File f = this.files.get(this.idx);
			String name = f.getName();
			if (!name.contains("$0") && !name.contains("$1")
					&& !name.contains("$2") && !name.contains("$3")
					&& !name.contains("$4") && !name.contains("$5")
					&& !name.contains("$6") && !name.contains("$7")
					&& !name.contains("$8") && !name.contains("$9")
					&& !name.contains("$string")) {
				lst.add(f);
			}
			first = false;
			++this.idx;
		}
		return lst.toArray(new File[lst.size()]);
	}

	private boolean keepGoing(boolean first) {
		File file = this.files.get(this.idx);
		boolean isNestedClass = file.getName().contains("$");
		boolean res = first ? !isNestedClass : isNestedClass;
		return res;
	}

}
