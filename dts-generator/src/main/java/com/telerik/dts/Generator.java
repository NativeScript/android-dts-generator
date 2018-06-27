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

    private static File inputGenericsFile;
    private FileHelper fileHelper;
    private DtsApi dtsApi;
    private boolean generateGenericImplements;
    private String outFileName;
    private String declarationsFileName;

    public void start(InputParameters inputParameters) throws Exception {
        this.inputGenericsFile = inputParameters.getInputGenerics();
        this.generateGenericImplements = inputParameters.isGenerateGenericImplementsEnabled();
        this.fileHelper = new FileHelper(inputParameters.getOutputDir());
        this.dtsApi = new DtsApi(generateGenericImplements);
        this.outFileName = FileHelper.DEFAULT_DTS_FILE_NAME;
        this.declarationsFileName = FileHelper.DEFAULT_DECLARATIONS_FILE_NAME;

        loadJavaClasses(inputParameters.getInputJars());
        ClassRepo.sortCachedProviders();

        generateDts();
    }

    private void generateDts() throws Exception {

        if(inputGenericsFile != null){
            DtsApi.loadGenerics(inputGenericsFile);
        }

        this.fileHelper.writeToFile(String.format("/// <reference path=\"%s\"/>\n", this.declarationsFileName), this.outFileName, false);

        while (ClassRepo.hasNext()) {
            List<JavaClass> classFiles = ClassRepo.getNextClassGroup();
            String generatedContent = this.dtsApi.generateDtsContent(classFiles);

            this.fileHelper.writeToFile(generatedContent, this.outFileName, true);
        }

        String content = this.fileHelper.readFileContent(this.outFileName);
        if(content != null) {
            String replacedContent = DtsApi.replaceGenericsInText(content);
            if(!content.equals(replacedContent)) {
                this.fileHelper.writeToFile(replacedContent, this.outFileName, false);
            }

            String serializedGenerics = DtsApi.serializeGenerics();
            if(!serializedGenerics.equals("")) {
                this.fileHelper.writeToFile(serializedGenerics, this.outFileName, true);
            }
        }

        this.writeDeclarations();
    }

    private void writeDeclarations() {
        List<String> imports = this.dtsApi.imports;
        imports.add(0, "declare module native {\texport class Array<T> {\tpublic constructor(); } }\n");

        String existingContent = this.fileHelper.readFileContent(this.declarationsFileName);
        existingContent = existingContent != null ? existingContent : "";

        for (String item : imports) {
            if(!existingContent.contains(item)) {
                this.fileHelper.writeToFile(item, this.declarationsFileName, true);
            }
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
