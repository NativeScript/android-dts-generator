package com.telerik.java.api.compiler.processor;

import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.LinkedList;
import javax.annotation.processing.AbstractProcessor;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;
import javax.tools.JavaCompiler.CompilationTask;

/**
 * The controller class to initiate verification of java files using custom
 * annotation processor. The files to be verified can be supplied to this class
 * as comma-separated argument.
 */
public class CodeAnalyzerController {
	/**
	 * Invokes the annotation processor passing the list of file names
	 * 
	 * @param fileNames
	 *            Names of files to be verified
	 */
	public void invokeProcessor(Iterable<? extends File> files) {
		// Gets the Java programming language compiler
		JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
		// Get a new instance of the standard file manager implementation
		StandardJavaFileManager fileManager = compiler.getStandardFileManager(null, null, null);
		// Get the valid source files as a list
	
		// Get the list of java file objects
		Iterable<? extends JavaFileObject> compilationUnits1 = fileManager.getJavaFileObjectsFromFiles(files);
		
		// Create the compilation task
		Writer writer = new StringWriter();
		CompilationTask task = compiler.getTask(writer, fileManager, null, null, null, compilationUnits1);
		// Get the list of annotation processors
		LinkedList<AbstractProcessor> processors = new LinkedList<AbstractProcessor>();
		processors.add(CodeAnalyzerProcessor.getInstance());

		task.setProcessors(processors);
		// Perform the compilation task.
		task.call();
		try {
			fileManager.close();
		} catch (IOException e) {
			System.out.println(e.getLocalizedMessage());
		}
	}
}
