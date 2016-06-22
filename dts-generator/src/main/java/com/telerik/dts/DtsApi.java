package com.telerik.dts;

import com.telerik.java.api.bcel.*;

import org.apache.bcel.classfile.JavaClass;
import org.omg.CORBA.StringSeqHelper;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * Created by plamen5kov on 6/17/16.
 */
public class DtsApi {
    private StringBuilder dtsContent;
    private int indent;
    private final String DefaultIndentCharacter = "\t";
    private PrintStream ps;
    private StringBuilder2 sbContent;
    private StringBuilder2 sbHeaders;
    private Set<String> references;
    private JavaClass prevClass;
    private int ident = 0; //TODO: rename to indent
    private String currentFileClassname;

    public DtsApi() {
        this.indent = 0;
    }

    public String generateDtsContent(List<JavaClass> javaClasses) {
        this.prevClass = null;
        try {
            if ((javaClasses != null) && (javaClasses.size() > 0)) {
                sbHeaders = new StringBuilder2();
                sbContent = new StringBuilder2();
                references = new HashSet<String>();

//                    processClassScopes(fs.iterator(), sbContent);
                // process class scope
                for(int i = 0; i < javaClasses.size(); i++) {

                    JavaClass currClass = javaClasses.get(i);
                    //
                    this.ident = closePackage(this.prevClass, currClass);
                    this.ident = openPackage(this.prevClass, currClass);
                    //
                    String tabs = getTabs(this.ident);
                    sbContent.appendln(tabs + "export class " + getSimpleClassname(currClass)
                            + " {");

//                    processMemberScopes(cs.iterator());
                    // process member scope
                    //.....
                    // process member scope

                    sbContent.appendln(tabs + "}");
                    this.prevClass = currClass;
                }
                closePackage(prevClass, null);
                // process class scope

                String[] refs = references.toArray(new String[references.size()]);
                Arrays.sort(refs);

                sbHeaders.appendln("/// <reference path=\"./_helpers.d.ts\" />");
                for (String r: refs) {
                    sbHeaders.append("/// <reference path=\"./");
                    sbHeaders.append(r);
                    sbHeaders.appendln(".d.ts\" />");
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            if (ps != null) {
                ps.close();
            }
        }

        //TODO: return sbHeaders and sbContent
        return sbHeaders.toString() + "\n" + sbContent.toString();
    }

    private int closePackage(JavaClass prevClass, JavaClass currClass) {
        int ident = 0;

        if (prevClass == null) {
            return ident;
        }

        String prevClassName = prevClass.getClassName();
        int prevDotCount = prevClassName.length()
                - prevClassName.replace(".", "").length();
        int prevDollarCount = prevClassName.length()
                - prevClassName.replace("$", "").length();
        int prevCount = prevDotCount + prevDollarCount;

        if (currClass == null) {
            ident = prevCount;
            while (ident > 0) {
                String tabs = getTabs(--ident);
                sbContent.appendln(tabs + "}");
            }
            return ident;
        }

        String currClassName = currClass.getClassName();
        int currDotCount = currClassName.length()
                - currClassName.replace(".", "").length();
        int currDollarCount = currClassName.length()
                - currClassName.replace("$", "").length();
        int currCount = currDotCount + currDollarCount;

        while (prevCount > currCount) {
            String tabs = getTabs(--prevCount);
            sbContent.appendln(tabs + "}");
        }

        boolean isNested = isNested(currClass);

        if (!isNested) {
            throw new UnsupportedOperationException("TODO: implement");
            // String prevClassName = prevClass.getClassName();
            // int dotCount = prevClassName.length() -
            // prevClassName.replace(".", "").length();
            // int dollarCount = prevClassName.length() -
            // prevClassName.replace("$", "").length();
            // ident = dotCount + dollarCount;
            //
            // String[] prevParts = prevClassName.replace('$',
            // '.').split("\\.");
            // String[] currParts = currClass.getClassName().replace('$',
            // '.').split("\\.");
            //
            // int diffIdx = 0;
            // while ((diffIdx < prevParts.length) && (diffIdx <
            // currParts.length) &&
            // prevParts[diffIdx].equals(currParts[diffIdx])) {
            // ++diffIdx;
            // }
            //
            // int count = prevParts.length - diffIdx - 1;
            // while (count-- > 0) {
            // String tabs = getTabs(--ident);
            // ps.println(tabs + "}");
            // }
        }

        return ident;
    }

    private int openPackage(JavaClass prevClass, JavaClass currClass) {
        int ident = 0;
        // String prevPackage = getPackageName(prevClass);
        // String currPackage = getPackageName(currClass);
        //
        String prevClassName = (prevClass != null) ? prevClass.getClassName()
                : "";
        // int countDots = prevClassName.length() - prevClassName.replace(".",
        // "").length();
        // int countDollars = prevClassName.length() -
        // prevClassName.replace("$", "").length();
        // int count = countDots + countDollars;
        //
        String[] prevParts = prevClassName.replace('$', '.').split("\\.");
        String[] currParts = currClass.getClassName().replace('$', '.')
                .split("\\.");

        int diffIdx = 0;
        while ((diffIdx < prevParts.length) && (diffIdx < currParts.length)
                && prevParts[diffIdx].equals(currParts[diffIdx])) {
            ++diffIdx;
        }

        ident = diffIdx;
        for (int idx = diffIdx; idx < currParts.length - 1; idx++) {
            ++ident;
            String tabs = getTabs(idx);
            if (idx == 0) {
                sbContent.append(tabs + "declare ");
            } else {
                sbContent.append(tabs + "export ");
            }
            sbContent.appendln("module " + currParts[idx] + " {");
        }

        if (isNested(currClass) && (prevParts.length < currParts.length)) {
            String tabs = getTabs(prevParts.length - 1);
            sbContent.appendln(tabs + "export module "
                    + prevParts[prevParts.length - 1] + " {");
        }

        // boolean isNested = currPackage.startsWith(prevPackage);
        //
        // if (isNested) {
        //
        // } else {
        // String[] prevParts = prevPackage.split("\\.");
        // String[] currParts = prevPackage.split("\\.");
        // int diffIdx = 0;
        // while ((diffIdx < prevParts.length) && (diffIdx < currParts.length)
        // && prevParts[diffIdx].equals(currParts[diffIdx])) {
        // ++diffIdx;
        // }
        // }
        return ident;
    }

    private String getTabs(int count) {
        String tabs = new String(new char[count]).replace("\0", "\t");
        return tabs;
    }

    // HELPER METHODS
    public static String repeat(int count, String with) {
        return new String(new char[count]).replace("\0", with);
    }

    private boolean isNested(JavaClass javaClass) {
        boolean isNested = javaClass.getClassName().contains("$");
        return isNested;
    }

    private String getSimpleClassname(JavaClass javaClass) {
        String[] parts = javaClass.getClassName().replace('$', '.')
                .split("\\.");
        return parts[parts.length - 1];
    }
}
