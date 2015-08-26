package com.telerik;

import java.io.*;
import java.nio.file.Files;
import java.util.*;

import javax.management.RuntimeErrorException;
import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;
import javax.xml.transform.*;
import javax.xml.transform.stream.*;

import org.apache.bcel.classfile.Attribute;
import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.classfile.Signature;

import com.sun.tools.internal.ws.processor.generator.Names;
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
	
	
	static class DtsWriter implements com.telerik.java.api.bcel.Generator.VisitorCallback
	{
		private int level = 0;
		
		private PrintStream output;
		
		public DtsWriter() throws FileNotFoundException
		{
			output = new PrintStream(new File("C:/Work/TS/TypeScriptHTMLApp1/test.d.ts"));
		}
		
		@Override
		public void onEnter(String packageName) {
			String ident = new String(new char[level++]).replace("\0", "\t");
			if (level == 1)
			{
				println(ident + "declare module " + packageName + " {");				
			}
			else
			{
				println(ident + "export module " + packageName + " {");
			}
		}

		@Override
		public void onLeave(String packageName) {
			String ident = new String(new char[--level]).replace("\0", "\t");
			println(ident + "}");
		}

		@Override
		public void onVisit(Field field) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onVisit(Method method) {
			// TODO Auto-generated method stub
			
		}

		@Override
		public void onEnter(JavaClass javaClass) {
			String ident;
			String name;
			String className = javaClass.getClassName();
			String packageName = javaClass.getPackageName();
			int lastDollarSign = className.lastIndexOf("$");
			boolean isNested = lastDollarSign > 0;
			String[] outerClasses = null;
			if (isNested)
			{
				name = className.substring(lastDollarSign + 1);
				outerClasses = className.substring(packageName.length() + 1, lastDollarSign).split("\\.");
				for (String outer: outerClasses)
				{
					ident = new String(new char[level++]).replace("\0", "\t");
					println(ident + "export module " + outer + " {");
				}
			}
			else
			{
				name = className.substring(packageName.length() + 1);
			}
			ident = new String(new char[level++]).replace("\0", "\t");
			
			Attribute[] attributes = javaClass.getAttributes();
			String sig = "";
			for (Attribute attribute : attributes)
			{
			    if (attribute instanceof Signature)
			    {
			        Signature signature = (Signature) attribute;
			        int len = signature.getLength();
			        boolean isGenerics = len > 0;
			        if (isGenerics)
			        {
			        	System.out.println("class=" + javaClass.getClassName() + " signature=" + signature.getSignature());
			        }
			        SignatureParser sigParser = new SignatureParser(signature);
			        sig = sigParser.parse();
			        break;
			    }
			}
			
			println(ident + "export class " + name + sig + " extends " + getSupperClassName(javaClass) + " {");
		}

		@Override
		public void onLeave(JavaClass javaClass) {
			String ident = new String(new char[--level]).replace("\0", "\t");
			println(ident + "}");

			String className = javaClass.getClassName();
			int lastDollarSign = className.lastIndexOf("$");
			boolean isNested = lastDollarSign > 0;
			if (isNested)
			{
				String packageName = javaClass.getPackageName();
				String[] outerClasses = className.substring(packageName.length() + 1, lastDollarSign).split("\\.");
				for (String outer: outerClasses)
				{
					ident = new String(new char[--level]).replace("\0", "\t");
					println(ident + "}");
				}
			}
		}
		
		private void println(String s)
		{
			output.println(s);
		}
		
		private String getSupperClassName(JavaClass javaClass)
		{
			String name = javaClass.getSuperclassName();
			
			File file = new File(javaClass.getFileName());
			
			String[] packageNames = javaClass.getPackageName().split("\\.");
			int len = packageNames.length + 1;
			for (int i=0; i<len; i++)
			{
				file = file.getParentFile();
			}
			
			String[] parts = name.split("\\.");
			for (int i=0; i<parts.length; i++)
			{
				String p = parts[i];
				if (i == (parts.length - 1))
				{
					p += ".class";
				}
				File f = new File(file, p);
				if (!f.exists())
				{
					break;
					
				}
				file = f;
			}
			
			if (file.exists() && file.isFile())
			{
				String fileName = file.getAbsolutePath();
				try
				{
					ClassParser cp = new ClassParser(fileName);
					JavaClass clazz = cp.parse();
					if (clazz.isPublic())
					{
						name = clazz.getClassName();
					}
					else
					{
						name = getSupperClassName(clazz);
					}
				}
				catch (IOException e)
				{
					e.printStackTrace();
				}
			}
			
			return name.replace("$", ".");
		}
		
		static class SignatureParser
		{
			private final Signature signature;
			
			private final String sig;
			
			private int idx;

			public SignatureParser(Signature signature)
			{
				this.signature = signature;
				this.sig = signature.getSignature();
			}
			
			
			public String parse()
			{
				idx = 1;
				
				System.out.print("<");
				{
					readArgList(0);
				}
				System.out.print(">");
				
				System.out.println();
				System.out.println();
				
				return sig;
			}
			
			private void readArgList(int paramIdx)
			{
				if (paramIdx > 0)
				{
					System.out.print(", ");
				}

				
				readArg();
				
				assert sig.charAt(idx-1) == ';';
				
				char c = sig.charAt(idx);
				if (c != '>')
				{
					readArgList(paramIdx + 1);
				}
			}
			
			private void readArg()
			{
				readId();
				
				assert sig.charAt(idx) == ':';
				
				readExtends2();
				
				assert sig.charAt(idx) != ':';
				
				readRefType2();
				
				assert sig.charAt(idx-1) == ';' : "char=" + sig.charAt(idx-1) + ", idx=" +idx;
			}
			
			private void readId()
			{
				char c;
				while (Character.isJavaIdentifierPart((c = sig.charAt(idx))))
				{
					System.out.print(c);
					++idx;
				}
			}
			
			private void readExtends2()
			{
				while (sig.charAt(idx) == ':')
				{
					++idx;
				}
				
				System.out.print(" extends ");
			}
			
			private void readRefType2()
			{
				readTypeName2();
				
				char c = sig.charAt(idx++);
				if (c == '<')
				{
					System.out.print("<");
					{
						readGenList(0);
					}
					System.out.print(">");
					
					assert ((sig.charAt(idx-1) == ';') || (sig.charAt(idx-1) == '*')) : "char=" + sig.charAt(idx-1) + ", idx=" + idx;
					
					if (sig.charAt(idx) == '>')
					{
						//idx += 2;
					}
				}
				else
				{
					int x = 1;
					x = 2;
				}
			}
			
			private void readTypeName2()
			{
				char c;
				while (((c = sig.charAt(idx)) != '*') && (c != ';') && (c != '<'))
				{
					System.out.print(c);
					
					++idx;
				}
			}
			
			private void readGenList(int recIdx)
			{
				if (recIdx > 0)
				{
					System.out.print(", ");
				}
				char c = sig.charAt(idx);
				
				if ((c == '+') || (c == '-') || (c == '*'))
				{
					//++idx;
				}
				
				readRefType2();
			
				c = sig.charAt(idx);
				
				if (c != '>')
				{
					readGenList(recIdx + 1);
					
					
				}
				else
				{
					idx += 2;
				}
			}
		}
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
		
		//
		try
		{
			DtsWriter dtsWriter = new DtsWriter();
			com.telerik.java.api.bcel.Generator g = new com.telerik.java.api.bcel.Generator(dtsWriter);
			g.visit("C:/Work/NativeScript/android-metadata-generator/jars");
		}
		catch (Exception ex)
		{
			ex.printStackTrace();
		}
		if (args.length == 0) return;
		//
		Input input = Input.Reflection;
		
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
