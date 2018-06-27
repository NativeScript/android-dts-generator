package com.telerik.dts;

import com.telerik.InputParameters;

import org.apache.bcel.classfile.JavaClass;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class Generator {

    private static File outFolder;
    private static File inputGenericsFile;
    private FileWriter fw;
    private DtsApi dtsApi;
    private boolean usingMultipleFiles;
    private boolean generateGenericImplements;
    private boolean useClassAliases;

    public void start(InputParameters inputParameters) throws Exception {
        outFolder = inputParameters.getOutputDir();
        inputGenericsFile = inputParameters.getInputGenerics();
        usingMultipleFiles = inputParameters.isGenerateMultipleFiles();
        generateGenericImplements = inputParameters.isGenerateGenericImplementsEnabled();
        useClassAliases = inputParameters.isUseClassAliasesEnabled();
        this.fw = new FileWriter(inputParameters.getOutputDir(), usingMultipleFiles);
        this.dtsApi = new DtsApi(usingMultipleFiles, generateGenericImplements, useClassAliases);

        loadJavaClasses(inputParameters.getInputJars());
        ClassRepo.sortCachedProviders();

        generateDts();
    }

    private void generateDts() throws Exception {
        writeHelperTypings();

        if(inputGenericsFile != null){
            DtsApi.loadGenerics(inputGenericsFile);
        }

        List<String> outputFiles = new ArrayList<>();

        while (ClassRepo.hasNext()) {
            List<JavaClass> classFiles = ClassRepo.getNextClassGroup();
            String generatedContent = this.dtsApi.generateDtsContent(classFiles);

            this.fw.write(generatedContent, classFiles.get(0).getFileName()/*fileName*/);

            outputFiles.add(classFiles.get(0).getFileName());
        }

        if(!usingMultipleFiles) {
            outputFiles = new ArrayList<>();
            outputFiles.add(FileWriter.DEFAULT_DTS_FILE_NAME);
        }

        // look for generics which are used without passing generic types and add javalangObject as their generic type
        for(String fileName: outputFiles) {
            String fullName = fileName + ".d.ts";
            String content = this.fw.readFileContent(fullName);
            if(content != null) {
                String replacedContent = DtsApi.replaceGenericsInText(content, this.useClassAliases);
                if(!content.equals(replacedContent)) {
                    this.fw.writeToFile(replacedContent, fileName, false);
                }

                String serializedGenerics = DtsApi.serializeGenerics();
                if(!serializedGenerics.equals("")) {
                    this.fw.writeToFile(serializedGenerics, fileName, true);
                }
            }

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
            } else {
                throw new IOException(String.format("File %s does not exist", file.getName()));
            }
        }
    }
}
