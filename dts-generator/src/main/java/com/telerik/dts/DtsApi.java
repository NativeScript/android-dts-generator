package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;
import org.omg.CORBA.StringSeqHelper;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class DtsApi {
    private StringBuilder dtsContent;
    private int indent;
    private final String DefaultIndentCharacter = "\t";

    public DtsApi() {
        this.indent = 0;
    }

    public String generateDtsContent(JavaClass clazz) {
        String fullClassName = clazz.getClassName();


        String[] splitClassName = fullClassName.split("\\.");
        String shortClassName = splitClassName[splitClassName.length -1];

        this.parsePackages(splitClassName);
        String temp = this.dtsContent.toString();

        this.dtsContent = null;

        return temp;
    }

    private void parsePackages(String[] packages) {
        this.dtsContent = new StringBuilder();

        int length = packages.length - 1;
        for(int i = 0; i < length; i++) {
            String currentPackage = packages[i];
            this.dtsContent.append(repeat(indent, DefaultIndentCharacter));
            if(indent == 0) {
                this.dtsContent.append("declare ");
            }
            else {
                this.dtsContent.append("export ");
            }
            this.dtsContent.append("module ");
            this.dtsContent.append(currentPackage);
        }

        this.dtsContent.append(" {");
        this.dtsContent.append('\n');
        this.dtsContent.append("tasdasd");
        indent++;
    }

    // HELPER METHODS
    public static String repeat(int count, String with) {
        return new String(new char[count]).replace("\0", with);
    }
}
