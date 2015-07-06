package com.telerik;

import java.io.*;
import java.util.*;

import javax.xml.transform.*;
import javax.xml.transform.stream.*;

import com.telerik.java.api.*;
import com.telerik.java.api.compiler.model.*;
import com.telerik.java.api.compiler.processor.*;
import com.telerik.java.api.reflection.JavaJarContext;
import com.telerik.javascript.api.*;

/**
 * The main class to verify java files using custom annotation processor. The
 * files to be verified can be supplied to this class as comma-separated
 * argument.
 */
public class Main {

    /**
     * The main method accepts the file(s) for verification. Multiple files can
     * be verified by passing the absolute path of the files as comma-separated
     * argument. This method invokes the custom annotation processor to process
     * the annotations in the supplied file(s). Verification results will be
     * printed on to the console.
     * 
     * @param args
     *            The java source files to be verified.
     */
    public static void main(String[] args) {
    	//if (args == null) {// || args.length == 4) {
    	//System.setProperty("java.home", "C:\\Program Files\\Java\\jdk1.8.0_45");
    		String jdkPath = "C:\\Program Files\\Java\\jdk1.8.0_45";
    		String targetXml = "C:\\tmp1\\AppCompat_21_JavaDoc.xml";
    		String[] directories =
    			{
    				"C:\\Tools\\Android Developer Tools\\sdk\\platforms\\android-22\\android.jar",
    				"C:\\tmp1\\android-support-v4.jar",
    			  "C:\\tmp1\\android-support-v7-appcompat.jar"
    			};
    		buildFromSource(jdkPath, targetXml, directories);
//    	} 
//    	else if (args == null || args.length != 4) {
//    		System.out.print("Usage:");
//    		System.out.print(" -compile <jdk path> <target xml> < ; delimited directories list>");    		
//    	} else if (args.length == 4 && args[0].equals("-compile")) {
//    		String jdkPath = args[1];
//    		String targetXml = args[2];
//    		String[] directories = args[3].split(";");
//    		buildFromSource(jdkPath, targetXml, directories);
//    	}
    }

	private static void buildFromSource(String javaHome, String targetXml, String[] directories) {
//		System.out.println("Collecting class files...");
    	String xml = targetXml;
//    	
//    	
//    	System.setProperty("java.home", "C:\\Program Files\\Java\\jdk1.8.0_45");
//    	
//        try {
//            CodeAnalyzerController controller = new CodeAnalyzerController();
//            List<File> files = new ArrayList<File>();
//            for (String dir: directories) {
//            	addFromFolder(files, dir);	
//            }
//
//            System.out.println("Java compiler processing classes to Java AST...");
//			controller.invokeProcessor(files);
//
//        } catch (Throwable t) {
//            t.printStackTrace();
//        }
//        
//        System.out.println("Converting to TypeScript AST...");
//            
//        Map<String, JClass> map = ClassModelMap.getInstance().getClassInfoMap();
//        Map<String, JClass> rootMap = ClassModelMap.getInstance().getRootClassInfoMap();

    	try {

//        	JContext root = new ContextInfo(map, rootMap); // JavaJarContext.fromFile(jar);
    		JContext root = JavaJarContext.fromFile(directories);
        	
			JToJSConverter converter = new JToJSConverter();
			converter.setJContext(root);
			converter.convert();
			JSGlobal global = converter.getJSGlobal();
			
			System.out.println("Printing to XML...");
			
			StringWriter stringWriter = new StringWriter();
			JSToXMLPrinter printer = new JSToXMLPrinter();
			printer.setStringWriter(stringWriter);
			printer.setGlobal(global);
			printer.print();
			
	        Transformer transformer = TransformerFactory.newInstance().newTransformer();
	        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
			transformer.setOutputProperty(OutputKeys.INDENT, "yes");
			transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");
			String stringXml = stringWriter.toString();
			transformer.transform(new StreamSource(new StringReader(stringXml)), new StreamResult(new FileWriter(xml)));

    	} catch(Throwable t2) {
    		t2.printStackTrace();
    	}

        System.out.println("End.");
	}
    
	private static void addFromFolder(List<File> files, String string) {
		files.addAll(listFilesRecursively(new File(string)));
	}

	private static List<File> listFilesRecursively(File parentDir) {
	    ArrayList<File> inFiles = new ArrayList<File>();
	    File[] files = parentDir.listFiles();
	    for (File file : files) {
	        if (file.isDirectory()) {
	            inFiles.addAll(listFilesRecursively(file));
	        } else {
	            if(file.getName().endsWith(".java")){
	                inFiles.add(file);
	            }
	        }
	    }
	    return inFiles;
	}
}
