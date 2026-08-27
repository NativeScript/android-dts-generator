package com.telerik;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by plamen5kov on 6/23/16.
 */
public class InputParameters {

    /** The lowest level the NativeScript Android runtime supports. */
    public static final int DEFAULT_MIN_SDK = 21;

    private File outputDir;
    private List<File> inputJars;
    private List<File> superJars;
    private File inputGenerics;
    private boolean allGenericImplements;
    private boolean skipDeclarations;
    private boolean classMode;
    private boolean mergeClassVersions;
    private boolean nullableUnknownTypes;
    private int ignoreObfuscatedNameLength;
    private File apiVersions;
    private int minSdk;

    public InputParameters() {
        this.outputDir = new File("out");
        this.inputJars = new ArrayList<>();
        this.superJars = new ArrayList<>();
        this.allGenericImplements = false;
        this.skipDeclarations = false;
        this.classMode = false;
        this.ignoreObfuscatedNameLength = 0;
        this.minSdk = DEFAULT_MIN_SDK;
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

    public void setAllGenericImplements(boolean allGenericImplements) { this.allGenericImplements = allGenericImplements; }

    public boolean getClassMode() { return this.classMode; }

    public void setClassMode(boolean classMode) { this.classMode = classMode; }

    public boolean getNullableUnknownTypes() { return this.nullableUnknownTypes; }

    public void setNullableUnknownTypes(boolean nullableUnknownTypes) { this.nullableUnknownTypes = nullableUnknownTypes; }

    public boolean getMergeClassVersions() { return this.mergeClassVersions; }

    public void setMergeClassVersions(boolean mergeClassVersions) { this.mergeClassVersions = mergeClassVersions; }

    public int getIgnoreObfuscatedNameLength() { return this.ignoreObfuscatedNameLength; }

    public void setIgnoreObfuscatedNameLength(int nameLength) { this.ignoreObfuscatedNameLength = nameLength; }


    public File getApiVersions() { return this.apiVersions; }

    public void setApiVersions(File apiVersions) { this.apiVersions = apiVersions; }

    public int getMinSdk() { return this.minSdk; }

    public void setMinSdk(int minSdk) { this.minSdk = minSdk; }
}
