package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;
import org.omg.CORBA.Environment;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class FileWriter {
    private final String DEFAULT_DTS_FILE_NAME = "base";

    private String defaultDtsFileName;
    private boolean writeMultipleFiles;
    private PrintStream ps;
    private File outDir;
    private boolean isFirstRun = true;

    public FileWriter(File outDir, boolean writeMultipleFiles) {
        this.writeMultipleFiles = writeMultipleFiles;
        this.defaultDtsFileName = DEFAULT_DTS_FILE_NAME;
        this.outDir = outDir;
    }

    public void write(String content, String fileName) {
        try {
            if(this.writeMultipleFiles) {
                this.ps = new PrintStream(new File(this.outDir.getAbsolutePath(), fileName + ".d.ts"));
                ps.println("/// <reference path=\"./_helpers.d.ts\" />");
                this.ps.print(content);
            }
            else {
                String outFile = this.outDir.getAbsolutePath() + File.separator + this.defaultDtsFileName + ".d.ts";
                this.ps = new PrintStream(new FileOutputStream(outFile, /*append*/true));

                //add helpers reference to the top of the file
                if(this.isFirstRun) {
                    ps.println("/// <reference path=\"./_helpers.d.ts\" />");
                    this.isFirstRun = false;
                }

                this.ps.print(content);
                this.ps.println();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        finally {
            if(this.ps != null) {
                this.ps.close();
            }
        }
    }

    public void writeHelperTypings(String content) {
        try {
                String outFile = this.outDir.getAbsolutePath() + File.separator + "_helpers.d.ts";
                this.ps = new PrintStream(new FileOutputStream(outFile, true));

                this.ps.print(content);
                this.ps.println();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        finally {
            if(this.ps != null) {
                this.ps.close();
            }
        }
    }
}
