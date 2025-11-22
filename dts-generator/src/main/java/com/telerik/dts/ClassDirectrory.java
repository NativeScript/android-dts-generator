package com.telerik.dts;

import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.JavaClass;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ClassDirectrory implements ClassMapProvider {
    private Map<String, JavaClass> classes;
    private String libraryName;
    private static final String CLASS_EXT = ".class";

    private ClassDirectrory() {
        this.classes = new HashMap<String, JavaClass>();
    }

    public static ClassDirectrory readDirectory(String directoryPath) throws IOException {
        ClassDirectrory dir = new ClassDirectrory();
        readDirectory(dir, directoryPath);
        return dir;
    }

    public static void readDirectory(ClassDirectrory dir, String path) throws IOException {
        List<File> subDirs = new ArrayList<File>();
        File currentDir = new File(path);
        for (File file : currentDir.listFiles()) {
            if (file.isFile()) {
                String name = file.getName();
                if (name.endsWith(CLASS_EXT)) {
                    ClassParser cp = new ClassParser(file.getAbsolutePath());
                    JavaClass clazz = cp.parse();
                    dir.classes.put(clazz.getClassName(), clazz);
                }
            } else if (file.isDirectory()) {
                subDirs.add(file);
            }
        }
        for (File sd: subDirs) {
            readDirectory(dir, sd.getAbsolutePath());
        }
        dir.libraryName = new File(path).getName();
    }

    @Override
    public Map<String, JavaClass> getClassMap() {
        return classes;
    }

    @Override
    public String getLibraryName() {
        return libraryName;
    }
}
