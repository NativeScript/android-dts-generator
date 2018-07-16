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
public class FileHelper {
    public static final String DEFAULT_DTS_FILE_NAME = "android.d.ts";
    public static final String DEFAULT_DECLARATIONS_FILE_NAME = "android-declarations.d.ts";

    private String defaultDtsFileName;
    private PrintStream ps;
    private File outDir;

    public FileHelper(File outDir) {
        this.defaultDtsFileName = DEFAULT_DTS_FILE_NAME; // + java.util.UUID.randomUUID().toString();
        this.outDir = outDir;
    }

    public void writeToFile(String content, String fileName, Boolean append) {
        try {
            String outFile = this.outDir.getAbsolutePath() + File.separator + fileName;
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

    public void writeHelperTypings(String content, String fileName, boolean append) {
        try {
            String outFile = this.outDir.getAbsolutePath() + File.separator + fileName;
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
