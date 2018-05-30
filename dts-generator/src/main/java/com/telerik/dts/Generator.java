package com.telerik.dts;

import com.telerik.InputParameters;

import org.apache.bcel.classfile.JavaClass;

import java.io.File;
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

    public void start(InputParameters inputParameters) throws IOException {
        outFolder = inputParameters.getOutputDir();
        this.fw = new FileWriter(inputParameters.getOutputDir(), inputParameters.isGenerateMultipleFiles());
        this.dtsApi = new DtsApi(inputParameters.isGenerateMultipleFiles());

        loadJavaClasses(inputParameters.getInputJars());
        ClassRepo.sortCachedProviders();

        generateDts();
    }

    private void generateDts() {
        writeHelperTypings();

        while (ClassRepo.hasNext()) {
            List<JavaClass> classFiles = ClassRepo.getNextClassGroup();
            String generatedContent = this.dtsApi.generateDtsContent(classFiles);

            this.fw.write(generatedContent, classFiles.get(0).getFileName()/*fileName*/);
        }
    }

    private void writeHelperTypings() {
        List<String> helperTypings = new ArrayList<>();
        helperTypings.add("declare module native {\n" +
                "\texport class Array<T> {\n" +
                "\t\tpublic constructor();\n" +
                "\t}\n" +
                "}\n");

        boolean append = false;

        for (String helper : helperTypings) {
            this.fw.writeHelperTypings(helper, append);
            append = true;
        }
    }

    private void loadJavaClasses(List<File> jars) throws IOException {
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
