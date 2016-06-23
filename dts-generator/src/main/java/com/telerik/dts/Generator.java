package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class Generator {

    private static File outFolder;
    private FileWriter fw;
    private DtsApi dtsApi;

    public void start(File outDir, File[] jars, boolean multipleFiles) throws IOException {
        outFolder = outDir;
        this.fw = new FileWriter(outDir, multipleFiles);
        this.dtsApi = new DtsApi();

        loadJavaClasses(jars);
        ClassRepo.sortCachedProviders();

        generateDts();
    }

    private void generateDts() {
        while(ClassRepo.hasNext()) {
            List<JavaClass> classFiles = ClassRepo.getNextClassGroup();
            String generatedContent = this.dtsApi.generateDtsContent(classFiles);

            this.fw.write(generatedContent, classFiles.get(0).getFileName()/*fileName*/);
        }
    }

    private void loadJavaClasses(File[] jars) throws IOException {
        for (File file : jars) {
            if (file.exists()) {
                if (file.isFile() && file.getName().endsWith(".jar")) {
                    JarFile jar = JarFile.readJar(file.getAbsolutePath());
                    ClassRepo.cacheJarFile(jar);
                } else if (file.isDirectory()) {
                    ClassDirectrory dir = ClassDirectrory.readDirectory(file.getAbsolutePath());
                    ClassRepo.cacheJarFile(dir);
                }
            }
        }
    }
}
