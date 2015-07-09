package com.telerik.java.api.compiler.processor;

import java.util.Stack;
import com.sun.source.tree.ClassTree;
import com.sun.source.tree.MethodTree;
import com.sun.source.tree.VariableTree;
import com.sun.source.util.TreePath;
import com.sun.source.util.TreePathScanner;
import com.sun.source.util.Trees;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import com.telerik.java.api.compiler.model.*;
import com.telerik.java.api.compiler.helper.*;

/**
 * Visitor class which visits different nodes of the input source file, 
 * extracts the required attribute of the visiting class, its methods, 
 * fields, annotations etc and set it in the java class model.
 */
public class CodeAnalyzerTreeVisitor extends TreePathScanner<Object, Trees> {

	private Stack<JavaClassInfo> stack = new Stack<JavaClassInfo>();
	
    /**
     * Visits the class
     * @param classTree
     * @param trees
     * @return
     */
    @Override
    public Object visitClass(ClassTree classTree, Trees trees) {

        TreePath path = getCurrentPath();
    	JavaClassInfo current;
    	
    	JavaClassInfo enclosing = this.stack.isEmpty() ? null : this.stack.peek(); 
        //populate required class information to model
		current = ClassInfoDataSetter.populateClassInfo(enclosing, classTree, path, trees);
    	if (enclosing != null && current != null) {
    		enclosing.classTypes.add(current);
    	}

    	if (current != null) {
			this.stack.push(current);
	        
	        Object result = super.visitClass(classTree, trees);
	    	this.stack.pop();
	    	
	    	if (this.stack.isEmpty()) {
	    		ClassModelMap.getInstance().getRootClassInfoMap().put(current.getQualifiedName(), current);
	    	}

	    	return result;
    	}
    	else {
    		return null; // super.visitClass(classTree, trees);
    	}
    }

    /**
     * Visits all methods of the input java source file
     * @param methodTree
     * @param trees
     * @return
     */
    @Override
    public Object visitMethod(MethodTree methodTree, Trees trees) {
        TreePath path = getCurrentPath();
        
        JavaClassInfo current = this.stack.peek();
 		
        if (current.getName() != null) {
        	//populate required method information to model
        	MethodInfoDataSetter.populateMethodInfo(current, methodTree, path, trees);
        }

        return super.visitMethod(methodTree, trees);
    }

    /**
     * Visits all variables of the java source file
     * @param variableTree
     * @param trees
     * @return
     */
    @Override
    public Object visitVariable(VariableTree variableTree, Trees trees) {
        TreePath path = getCurrentPath();
        Element e = null;
        try {
        	e = trees.getElement(path);
        } catch (Exception ex) {
        	ex.printStackTrace();
        }


        if (e != null) {
	        switch(e.getKind()) {
	        	case FIELD:
	        	case ENUM_CONSTANT:
	        		// TODO: For ENUM_CONSTANT try to optain the default value. 
	        		JavaClassInfo current2 = this.stack.peek();
	    	        if (current2.getName() != null) {
	    	        	//populate required method information to model
	    	        	FieldInfoDataSetter.populateFieldInfo(current2, variableTree, e, path, trees);
	    	        }
	        		break;
	        	case PARAMETER:
	        	case LOCAL_VARIABLE:
	        	case EXCEPTION_PARAMETER:
	        		break;
	        	default:
	        		System.out.println(e.getKind());
	        }
        }
        
        return super.visitVariable(variableTree, trees);
    }
}

