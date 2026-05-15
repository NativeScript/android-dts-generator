package com.telerik.dts;

import java.io.File;
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
    private Map<String, JavaClass> classes;
    private String libraryName;
    private static final String CLASS_EXT = ".class";

    private JarFile() {
        this.classes = new HashMap<String, JavaClass>();
    }

    public static JarFile readJar(String jarFilePath) throws IOException {
        JarFile jarFile = new JarFile();
        try (JarInputStream jarInputStream = new JarInputStream(new FileInputStream(jarFilePath))) {
            ZipEntry entry;
            while ((entry = jarInputStream.getNextEntry()) != null) {
                String name = entry.getName();
                if (name.endsWith(CLASS_EXT)) {
                    name = name.substring(0, name.length() - CLASS_EXT.length()).replace('/', '.');
                    ClassParser classParser = new ClassParser(jarInputStream, name);
                    JavaClass javaClass = classParser.parse();
                    jarFile.classes.put(name, javaClass);
                }
            }
        } catch (ClassFormatException e) {
            throw new IOException("Invalid class format in JAR file: " + e.getMessage(), e);
        }
        // Extract library name from file path
        jarFile.libraryName = extractLibraryName(jarFilePath);
        return jarFile;
    }

    public static JarFile readJarInputStream(String sourceFileName, InputStream stream) throws IOException {
        JarFile jarFile = new JarFile();
        try (JarInputStream jarInputStream = new JarInputStream(stream)) {
            ZipEntry entry;
            while ((entry = jarInputStream.getNextEntry()) != null) {
                String name = entry.getName();
                if (name.endsWith(CLASS_EXT)) {
                    name = name.substring(0, name.length() - CLASS_EXT.length()).replace('/', '.');
                    ClassParser classParser = new ClassParser(jarInputStream, name);
                    JavaClass javaClass = classParser.parse();
                    jarFile.classes.put(name, javaClass);
                }
            }
        } catch (ClassFormatException e) {
            throw new IOException("Invalid class format in JAR file: " + e.getMessage(), e);
        }
        jarFile.libraryName = extractLibraryName(sourceFileName);
        return jarFile;
    }

    @Override
    public Map<String, JavaClass> getClassMap() {
        return classes;
    }

    @Override
    public String getLibraryName() {
        return libraryName;
    }

    private static String extractLibraryName(String filePath) {
        String fileName = new File(filePath).getName();
        // Remove .jar or .aar extension
        if (fileName.endsWith(".jar")) {
            return fileName.substring(0, fileName.length() - 4);
        } else if (fileName.endsWith(".aar")) {
            return fileName.substring(0, fileName.length() - 4);
        }
        return fileName;
    }
}
