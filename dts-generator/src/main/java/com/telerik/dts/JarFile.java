package com.telerik.dts;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.jar.JarInputStream;
import java.util.zip.ZipEntry;

import org.apache.bcel.classfile.ClassFormatException;
import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.JavaClass;

public class JarFile implements ClassMapProvider {
	private final String path;
	private final Map<String, JavaClass> classMap;
	private static final String CLASS_EXT = ".class";

	private JarFile(String path) {
		this.path = path;
		this.classMap = new HashMap<String, JavaClass>();
	}

	public String getPath() {
		return path;
	}

	public Map<String, JavaClass> getClassMap() {
		return classMap;
	}

	public static JarFile readJarInputStream(String path, InputStream stream) throws ClassFormatException,IOException {
		JarFile jar;
		JarInputStream jis = null;
		try {
			jis = new JarInputStream(stream);

			jar = new JarFile(path);

			for (ZipEntry ze = jis.getNextEntry(); ze != null; ze = jis.getNextEntry()) {
				String name = ze.getName();
				if (name.endsWith(CLASS_EXT)) {
					name = name.substring(0, name.length() - CLASS_EXT.length()).replace('/', '.');
					ClassParser cp = new ClassParser(jis, name);
					JavaClass clazz = cp.parse();
					jar.classMap.put(name, clazz);
				}
			}
		} finally {
			if (jis != null) {
				jis.close();
			}
		}
		return jar;
	}
	public static JarFile readJar(String path) throws ClassFormatException,IOException {
		return readJarInputStream(path, new FileInputStream(path));
	}
}
