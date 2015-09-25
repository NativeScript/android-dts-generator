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
import org.apache.bcel.generic.Type;

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
		private StringBuilder sb;
		private Set<Type> references;
		private Set<Method> methods;
		
		private File outDir;
		
		public DtsWriter() throws FileNotFoundException
		{
			sb = new StringBuilder();
			references = new HashSet<Type>();
			methods = new HashSet<Method>();
			outDir = new File("C:/temp/dtsfiles");
			if (!outDir.exists())
			{
				outDir.mkdirs();
			}
		}

		@Override
		public void onVisit(Field field)
		{
		}

		@Override
		public void onVisit(Method method)
		{
			methods.add(method);
		}
		
		@Override
		public void onEnter(JavaClass javaClass)
		{
			assert level == 0;
			assert methods.size() == 0;
			assert references.size() == 0;
			
			String className = javaClass.getClassName();
			boolean success = createOutput(className.replaceAll("\\$", "\\."));
			assert success;
			
			String packageName = javaClass.getPackageName();
			writePackageHeader(packageName);

			String name;
			String ident;
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
			
			processMethods();
			
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
			
			writeReferences();
			
			writePackageFooter();
			
			output.println(sb.toString());
			output.flush();
			output.close();
			methods.clear();
			references.clear();
			
			assert level == 0;
			assert methods.size() == 0;
			assert references.size() == 0;
		}
		
		private void processMethods()
		{
			String ident = new String(new char[level+1]).replace("\0", "\t");
			
			Method[] arrMethods = new Method[methods.size()];
			methods.toArray(arrMethods);
			
			for (Method m: arrMethods)
			{
				sb.append(ident);
				sb.append("public ");
				sb.append(getMethodName(m));
				sb.append("(");
				int idx = 0;
				references.add(m.getReturnType());
				for (Type t: m.getArgumentTypes())
				{
					references.add(t);
					if (idx > 0)
					{
						sb.append(", ");
					}
					sb.append("param");
					sb.append(idx++);
					sb.append(": ");
					sb.append(getTypeScriptTypeFromJavaType(t));
				}
				sb.append(")");
				if (!isConstructor(m))
				{
					sb.append(": ");
					sb.append(getTypeScriptTypeFromJavaType(m.getReturnType()));
				}
				sb.append(";\n");
			}
		}
		
		private boolean isConstructor(Method m)
		{
			return m.getName().equals("<init>");
		}
		
		private String getMethodName(Method m)
		{
			String name = m.getName();
			
			if (isConstructor(m))
			{
				name = "constructor";
			}
			
			return name;
		}
		
		private String getTypeScriptTypeFromJavaType(Type t)
		{
			String tsType;
			String type = t.getSignature();
			
			switch (type)
			{
			case "V":
				tsType = "void";
				break;
			case "C":
				tsType = "string";
				break;
			case "Z":
				tsType = "boolean";
				break;
			case "B":
			case "S":
			case "I":
			case "J":
			case "F":
			case "D":
				tsType = "number";
				break;
			default:
				int idx = type.indexOf('<');
				if (idx > 0)
				{
					tsType = type.substring(1, idx).replaceAll("/", ".").replaceAll("\\$", "\\.").replaceAll(";", "");
				}
				else
				{
					tsType = type.substring(1).replaceAll("/", ".").replaceAll("\\$", "\\.").replaceAll(";", "");
				}
			}
			
			return tsType;
		}
		
		private boolean createOutput(String className)
		{
			boolean success;
			sb.setLength(0);
			try
			{
				output = new PrintStream(new File(outDir, className + ".d.ts"));
				success = true;
			}
			catch (FileNotFoundException e)
			{
				success = false;
				e.printStackTrace();
			}
			return success;
		}
		
		private void writePackageHeader(String packageName)
		{
			String[] packages = packageName.split("\\.");
			String ident;
			for (String p: packages)
			{
				ident = new String(new char[level++]).replace("\0", "\t");
				if (level == 1)
				{
					println(ident + "declare module " + p + " {");				
				}
				else
				{
					println(ident + "export module " + p + " {");
				}
			}
		}
		
		private void writePackageFooter()
		{
			while (level > 0)
			{
				String ident = new String(new char[--level]).replace("\0", "\t");
				println(ident + "}");
			}
		}
		
		private void writeReferences()
		{
			StringBuilder refs = new StringBuilder();
			for (Type t: references)
			{
				if (isPrimitiveType(t))
				{
					continue;
				}
				String refFilename = getFilenameFromType(t);
				refs.insert(0, "///<reference path=\"" + refFilename + ".d.ts\" />\n");
			}
			refs.append("\n");
			sb.insert(0, refs.toString());
		}
		
		private String getFilenameFromType(Type t)
		{
			String signature = t.getSignature();
			
			String name;
			
			int idx = signature.indexOf('<');
			if (idx > 0)
			{
				name = signature.substring(1, idx);
			}
			else
			{
				name = signature.substring(1);
			}
			
			name = name.replaceAll("/", ".").replaceAll("\\$", "\\.").replaceAll(";", "");
			
			return name;
		}
		
		private boolean isPrimitiveType(Type t)
		{
			String signature = t.getSignature();
			
			boolean isPrimitive = signature.equals("V")
				|| signature.equals("C")
				|| signature.equals("Z")
				|| signature.equals("B") || signature.equals("S") || signature.equals("I") || signature.equals("J")
				|| signature.equals("F") || signature.equals("D");
			
			return isPrimitive;
		}
		
		private void println(String s)
		{
			sb.append(s);
			sb.append('\n');
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
			
			return name.replaceAll("\\$", "\\.");
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
				if (sig.charAt(0) == '<')
				{
					idx = 1;
					
					System.out.print("<");
					{
						readArgList(0);
					}
					System.out.print(">");
					
					System.out.println();
					System.out.println();
				}
				
				// TODO:
				return "";//sig;
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
				
				readExtends();
				
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
			
			private void readExtends()
			{
				while (sig.charAt(idx) == ':')
				{
					++idx;
				}
				
				System.out.print(" extends ");
			}
			
			private void readRefType2()
			{
				readTypeName();
				
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
			
			private void readTypeName()
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
					if (c == '*')
					{
						System.out.print("any");
					}
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
