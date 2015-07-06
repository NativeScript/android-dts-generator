package com.telerik.java.api.compiler.processor;

import com.sun.source.util.TreePath;
import com.sun.source.util.Trees;
import java.util.Set;
import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import javax.lang.model.util.Elements;
import javax.lang.model.util.Types;

/**
 * The annotation processor class which processes java annotations in the
 * supplied source file(s). This processor supports v1.6 of java language and
 * can processes all annotation types.
 */
@SupportedSourceVersion(SourceVersion.RELEASE_6)
@SupportedAnnotationTypes("*")
public class CodeAnalyzerProcessor extends AbstractProcessor {

    private Trees trees;
    private Elements elementUtils;
    private Types typeUtils;

    private static CodeAnalyzerProcessor processor = new CodeAnalyzerProcessor();
    
    private CodeAnalyzerProcessor() {
    }
    
    public static CodeAnalyzerProcessor getInstance() {
        return processor;
    }
    
    public Types getTypeUtils() {
    	return this.typeUtils;
    }

    public Elements getElementUtils() {
    	return this.elementUtils;
    }
    
    @Override
    public void init(ProcessingEnvironment pe) {
        super.init(pe);
        trees = Trees.instance(pe);
        this.processingEnv = pe;
        this.elementUtils = pe.getElementUtils();
        this.typeUtils = pe.getTypeUtils();
    }

    /**
     * Processes the annotation types defined for this processor.
     * 
     * @param annotations
     *            the annotation types requested to be processed
     * @param roundEnvironment
     *            environment to get information about the current and prior
     *            round
     * @return whether or not the set of annotations are claimed by this
     *         processor
     */
    @Override
    public boolean process(Set<? extends TypeElement> annotations,
            RoundEnvironment roundEnvironment) {

        // Scanner class to scan through various component elements
        CodeAnalyzerTreeVisitor visitor = new CodeAnalyzerTreeVisitor();

        System.out.print(">");
        
        int done = 0;
        int progress = -1;
        Set<? extends Element> task = roundEnvironment.getRootElements(); 
        for (Element e : task) {
            TreePath tp = trees.getPath(e);
            if (tp != null) {
	            try {
	            	visitor.scan(tp, trees);
	            } catch(Exception ex) {
	            	System.out.print("Error occured while processing element " + e.getSimpleName());
	            	ex.printStackTrace();
	            }
            }
            done++;
            int newProgress = (int)(50.0 * (float)done / (float)task.size());
            if (newProgress != progress) {
            	System.out.print("=");            	
            }
            progress = newProgress;
        }
        
        System.out.println("!");

        return false;
    }
}