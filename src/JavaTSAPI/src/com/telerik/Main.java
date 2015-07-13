package com.telerik;

import java.io.*;
import java.util.*;

import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;
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
	
	public static enum Input
	{
		Reflection,
		SourceCode
	}

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
		
		Input input = Input.SourceCode;
		
		switch (input)
		{
			case Reflection:
				processUsingReflection(args);
				break;
				
			case SourceCode:
				processUsingSourceCode(args);
				break;

			default:
				throw new RuntimeException("Not supported input:" + input);
		}
	}
	
    private static void processUsingReflection(String[] args) {
		String jdkPath = "C:\\Program Files\\Java\\jdk1.8.0_45";
		String targetXml = "C:\\temp\\AppCompat_21_JavaDoc.xml";
		String[] directories =
		{
			"C:\\Dev\\adt\\sdk\\platforms\\android-21\\android.jar",
			"C:\\Dev\\adt\\sdk\\extras\\android\\support\\v7\\appcompat\\libs\\android-support-v4.jar",
			"C:\\Dev\\adt\\sdk\\extras\\android\\support\\v7\\appcompat\\libs\\android-support-v7-appcompat.jar"
		};
		buildUsingReflection(jdkPath, targetXml, directories);
    }
    
    public static void processUsingSourceCode(String[] args) {
		String jdkPath = "C:\\Program Files\\Java\\jdk1.8.0_31";
		String targetXml = "C:\\Work\\xPlatCore\\Android_XMLAPI_17_JavaDoc.xml";
		String[] directories =
			{ "C:\\Dev\\adt\\sdk\\sources\\android-17\\android",
			  "C:\\Dev\\adt\\sdk\\sources\\android-17\\java",
			  "C:\\Dev\\adt\\sdk\\sources\\android-17\\javax",
			  "C:\\Dev\\adt\\sdk\\sources\\android-17\\org"
			};
		buildUsingSourceCode(jdkPath, targetXml, directories);
    }
    
	private static void buildUsingSourceCode(String javaHome, String targetXml, String[] directories) {
		System.out.println("Collecting class files...");
    	String xml = targetXml;
    	
        try {
            CodeAnalyzerController controller = new CodeAnalyzerController();
            List<File> files = new ArrayList<File>();
            for (String dir: directories) {
            	addFromFolder(files, dir);	
            }

            System.out.println("Java compiler processing classes to Java AST...");
			controller.invokeProcessor(files);

        } catch (Throwable t) {
            t.printStackTrace();
        }
        
        System.out.println("Converting to TypeScript AST...");
            
        Map<String, JClass> map = ClassModelMap.getInstance().getClassInfoMap();
        Map<String, JClass> rootMap = ClassModelMap.getInstance().getRootClassInfoMap();

    	try {

        	JContext root = new ContextInfo(map, rootMap); // JavaJarContext.fromFile(jar);
        	
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


	private static void buildUsingReflection(String javaHome, String targetXml, String[] directories) {
    	String xml = targetXml;

    	try {

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
	        	String filePath = file.getAbsolutePath();
	        	if (filePath.contains("\\tests\\"))
	        		continue;
	            if(file.getName().endsWith(".java")){
	                inFiles.add(file);
	            }
	        }
	    }
	    return inFiles;
	}
}
