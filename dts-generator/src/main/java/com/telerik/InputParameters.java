package com.telerik;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by plamen5kov on 6/23/16.
 */
public class InputParameters {

    private File outputDir;
    private List<File> inputJars;
    private File inputGenerics;
    private boolean generateMultipleFiles;
    private boolean generateGenericImplements;
    private boolean useClassAliases;

    public InputParameters() {
        this.outputDir = new File("out");
        this.inputJars = new ArrayList<File>();
        this.generateMultipleFiles = false;
        this.generateGenericImplements = false;
        this.useClassAliases = false;
    }

    public File getOutputDir() {
        return outputDir;
    }

    public void setOutputDir(File outputDir) {
        this.outputDir = outputDir;
    }

    public List<File> getInputJars() {
        return inputJars;
    }

    public void setInputJars(List<File> inputJars) {
        this.inputJars = inputJars;
    }

    public File getInputGenerics() {
        return inputGenerics;
    }

    public void setInputGenerics(File inputGenerics) {
        this.inputGenerics = inputGenerics;
    }

    public boolean isGenerateMultipleFiles() {
        return generateMultipleFiles;
    }

    public void setGenerateMultipleFiles(boolean generateMultipleFiles) {
        this.generateMultipleFiles = generateMultipleFiles;
    }

    public boolean isGenerateGenericImplementsEnabled() {
        return generateGenericImplements;
    }

    public void setGenerateGenericImplements(boolean generateGenericImplements) {
        this.generateGenericImplements = generateGenericImplements;
    }

    public boolean isUseClassAliasesEnabled() {
        return useClassAliases;
    }

    public void setUseClassAliases(boolean useClassAliases) {
        this.useClassAliases = useClassAliases;
    }
}
