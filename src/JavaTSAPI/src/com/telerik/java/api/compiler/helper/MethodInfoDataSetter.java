package com.telerik.java.api.compiler.helper;

import java.util.Collection;
import java.util.List;
import com.sun.source.tree.MethodTree;
import com.sun.source.util.TreePath;
import com.sun.source.util.Trees;
import com.telerik.java.api.JParameter;
import com.telerik.java.api.JType;
import com.telerik.java.api.JTypeVariable;
import javax.lang.model.element.AnnotationMirror;
import javax.lang.model.element.Element;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.Modifier;
import javax.lang.model.element.VariableElement;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.util.SimpleElementVisitor6;
import com.telerik.java.api.compiler.model.*;

import static com.telerik.java.api.compiler.helper.CodeAnalyzerConstants.DEFAULT_CONSTRUCTOR_NAME;

/**
 * Helper class to set the properties of a method
 * to the java class model
 */
public class MethodInfoDataSetter {

    /**
     * Set the attributes of the currently visiting method 
     * to the java class model
     * @param classInfo The java class model
     * @param methodTree Currently visiting method tree
     * @param path tree path
     * @param trees trees
     */
    public static void populateMethodInfo(JavaClassInfo classInfo,
            MethodTree methodTree, TreePath path, Trees trees) {
    	//don't populate anonymous classes.
    	if (classInfo == null) {
        	return;
        }
    	
        //Set modifier details
        Element e = trees.getElement(path);
        String comment = trees.getDocComment(path);
        
        if (e == null) {
        	// Method in anonymous class.
        	return;
        }
        
        //Check if the method is a default constructor
        String methodName = methodTree.getName().toString();
        BaseJavaClassModelInfo info;
        if (methodName.equals(DEFAULT_CONSTRUCTOR_NAME)) {
        	ConstructorInfo constructorInfo = new ConstructorInfo();
        	info = constructorInfo;
        	info.setComment(comment);
        	ClassExecutablePair<ExecutableInfo> pairInfo = new ClassExecutablePair<ExecutableInfo>(classInfo, constructorInfo);
        	e.accept(new ExecutableInfoVisitor<ExecutableInfo>(), pairInfo);
            classInfo.constructors.add(constructorInfo);
        } else {
            MethodInfo methodInfo = new MethodInfo(classInfo);
            info = methodInfo;
            info.setComment(comment);
            ClassExecutablePair<MethodInfo> pairInfo = new ClassExecutablePair<MethodInfo>(classInfo, methodInfo);
            methodInfo.setName(methodName);
            e.accept(new MethodInfoVisitor<MethodInfo>(), pairInfo);
            classInfo.methods.add(methodInfo);
        }
        
    	for (Modifier modifier : e.getModifiers()) {
            DataSetterUtil.setModifiers(modifier.toString(), info);
        }
    	
        List<? extends AnnotationMirror> annotations = e.getAnnotationMirrors();
        for (AnnotationMirror annotationMirror : annotations) {
            String qualifiedName = annotationMirror.toString().substring(1);
            AnnotationInfo annotationInfo = new AnnotationInfo();
            annotationInfo.setName(qualifiedName);
            info.addAnnotation(annotationInfo);
        }
    }
    
    private static class ClassExecutablePair<P extends ExecutableInfo> {
    	public JavaClassInfo classInfo;
    	public P executableInfo;
    	
    	public ClassExecutablePair(JavaClassInfo classInfo, P executableInfo) {
    		this.classInfo = classInfo;
    		this.executableInfo = executableInfo;
    	}
    }
    
    private static class MethodInfoVisitor<P extends MethodInfo> extends ExecutableInfoVisitor<P> {
        @Override
        public Object visitExecutable(ExecutableElement element, ClassExecutablePair<P> info) {        	
        	Object result = super.visitExecutable(element, info); 
        	TypeMirror returnType = element.getReturnType();

    		JType jReturnType = ClassInfoDataSetter.getType(returnType, info.classInfo, info.executableInfo);
    		info.executableInfo.setReturnType(jReturnType);

        	return result;
        }
    }
    
    private static class ExecutableInfoVisitor<P extends ExecutableInfo> extends SimpleElementVisitor6<Object, ClassExecutablePair<P>> {
    	
    	protected JType getType(TypeMirror typeMirror, ClassExecutablePair<P> info) {
    		return ClassInfoDataSetter.getType(typeMirror, info.classInfo, info.executableInfo);
    	}
    	
        @Override
        public Object visitExecutable(ExecutableElement element, ClassExecutablePair<P> info) {
        	List<JTypeVariable> methodTypeParameters = info.executableInfo.getTypeParameters();
        	ClassInfoDataSetter.createTypeVariables(info.classInfo, info.executableInfo, element.getTypeParameters(), methodTypeParameters);
        	
        	Collection<JParameter> methodParameters = info.executableInfo.getParameters();
        	int index = 0;
			for (VariableElement var : element.getParameters()) {
				  ParameterInfo param = new ParameterInfo();
				  param.setDocumentation(info.executableInfo.getParameterDocumentation(index));
				  param.setName(var.toString());
				  
				  JType ti = getType(var.asType(), info);
				  param.setType(ti);

				  methodParameters.add(param);
				  index++;
			}
			
			return super.visitExecutable(element, info);
        }
    }
}
