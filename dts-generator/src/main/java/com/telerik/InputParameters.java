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
    private List<File> superJars;
    private File inputGenerics;
    private boolean allGenericImplements;
    private boolean skipDeclarations;

    public InputParameters() {
        this.outputDir = new File("out");
        this.inputJars = new ArrayList<>();
        this.superJars = new ArrayList<>();
        this.allGenericImplements = false;
        this.skipDeclarations = false;
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

    public List<File> getSuperJars() {
        return superJars;
    }

    public File getInputGenerics() {
        return inputGenerics;
    }

    public void setInputGenerics(File inputGenerics) {
        this.inputGenerics = inputGenerics;
    }

    public boolean isAllGenericImplementsEnabled() {
        return allGenericImplements;
    }

    public void setSkipDeclarations(boolean skipDeclarations) { this.skipDeclarations = skipDeclarations; }

    public boolean getSkipDeclarations() { return skipDeclarations; }

    public void setAllGenericImplements(boolean allGenericImplements) {
        this.allGenericImplements = allGenericImplements;
    }
}
