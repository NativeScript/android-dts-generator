package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;
import org.omg.CORBA.Environment;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.nio.file.Files;
import java.util.List;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class FileWriter {
    public static final String DEFAULT_DTS_FILE_NAME = "android";

    private String defaultDtsFileName;
    private boolean writeMultipleFiles;
    private PrintStream ps;
    private File outDir;

    public FileWriter(File outDir, boolean writeMultipleFiles) {
        this.writeMultipleFiles = writeMultipleFiles;
        this.defaultDtsFileName = DEFAULT_DTS_FILE_NAME; // + java.util.UUID.randomUUID().toString();
        this.outDir = outDir;
    }

    public void write(String content, String fileName) {
        if(this.writeMultipleFiles) {
            try {

                this.ps = new PrintStream(new File(this.outDir.getAbsolutePath(), fileName + ".d.ts"));
                ps.println("/// <reference path=\"./_helpers.d.ts\" />");
                this.ps.print(content);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (this.ps != null) {
                    this.ps.close();
                }
            }
        } else {
            this.writeToFile(content, this.defaultDtsFileName, true);
        }
    }

    public void writeToFile(String content, String fileName, Boolean append) {
        try {
            String outFile = this.outDir.getAbsolutePath() + File.separator + fileName + ".d.ts";
            this.ps = new PrintStream(new FileOutputStream(outFile, /*append*/append));

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

    public String readFileContent(String fileName) {
        try {
            List<String> lines = Files.readAllLines(new File(this.outDir.getAbsolutePath(), fileName).toPath());
            return String.join("\n", lines.toArray(new String[lines.size()]));
        } catch (IOException ex) {
            return null;
        }
    }

    public void writeHelperTypings(String content, boolean append) {
        try {
            String outFile = this.outDir.getAbsolutePath() + File.separator +
                (this.writeMultipleFiles ? "_helpers.d.ts": (this.defaultDtsFileName + ".d.ts"));
            this.ps = new PrintStream(new FileOutputStream(outFile, append));

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
