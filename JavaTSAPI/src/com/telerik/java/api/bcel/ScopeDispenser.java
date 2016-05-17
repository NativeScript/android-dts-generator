package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Iterator;

import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.JavaClass;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;


public class ScopeDispenser {
	private final File[] jars;
	private final File tempDir;
	
	public ScopeDispenser(File[] jars) throws IOException {
		this.jars = jars;
		this.tempDir = Files.createTempDirectory("temp-").toFile();
	}
	
	public Iterator<JarScope> iterator() throws IOException {
		JarScopeIterator it = new JarScopeIterator(this.jars, this.tempDir);
		while (it.hasNext()) {
			JarScope js = it.next();
			cacheJavaClasses(js.getOutputDir());
		}
		it.reset();
		return it; 
	}
	
	public void close() throws IOException {
		FileUtils.deleteDirectory(this.tempDir);
	}
	
	private void cacheJavaClasses(File dir) throws IOException {
		File[] files = dir.listFiles();
		for (File f: files) {
			if (f.isFile() && FilenameUtils.getExtension(f.getName()).equals("class")) {
				ClassParser cp = new ClassParser(f.getAbsolutePath());
				JavaClass clazz = cp.parse();
				ClassRepo.cacheClass(clazz.getClassName(), clazz);
			}
		}
		for (File subDir: files) {
			if (subDir.isDirectory()) {
				cacheJavaClasses(subDir);
			}
		}
	}
}
