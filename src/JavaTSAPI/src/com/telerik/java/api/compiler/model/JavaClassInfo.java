package com.telerik.java.api.compiler.model;

import java.util.ArrayList;
import java.util.List;
import javax.lang.model.element.NestingKind;

import com.telerik.java.api.*;

public class JavaClassInfo extends BaseJavaClassModelInfo implements JClass {

	private String qualifiedName;
	private JType componentType;
    private JType superClass;
    private String packageName;
    private String nestingKind;
    
    private boolean isInterface;
    private boolean isArray;
    private boolean isEnum;
    
    public JavaClassInfo enclosingType;
    
    public List<JMethod> methods = new ArrayList<JMethod>();
    public List<JConstructor> constructors = new ArrayList<JConstructor>();
    public List<JType> genericInterfaceTypes = new ArrayList<JType>();
    private List<JType> genericInterfaces;
    public List<JTypeVariable> typeParameters = new ArrayList<JTypeVariable>();
    public List<JField> fields = new ArrayList<JField>();
    
    public List<JNode> classTypes = new ArrayList<JNode>();

    private boolean isPrimitive;
	public boolean isDefined;
    
    public void setIsPrimitive(boolean isPrimitive) {
        this.isPrimitive = isPrimitive;
    }
    
    public boolean isPrimitive() {
        return isPrimitive;
    }

    public List<JField> getFields() {
        return fields;
    }

    public void setGenericSuperclass(JType superClass) {
        this.superClass = superClass;
    }

    public JType getGenericSuperclass() {
		// TRICKY: At some cases "extends" on missing class will find an interface with the same name,
		// this results in a class extending an interface... sooooo coool. Unfortunately at parse time we do not know what the type is yet.
    	if (this.superClass instanceof JavaClassInfo && !((JavaClassInfo) this.superClass).isClass())
    		return null;
    	else if (this.superClass instanceof ParameterizedTypeInfo && !((JavaClassInfo)((ParameterizedTypeInfo)this.superClass).getRawType()).isClass())
    		return null;
    	
        return this.superClass;
    }

    private boolean isClass() {
		return !this.isInterface() && !this.isEnum();
	}

	public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getPackageName() {
        return this.packageName;
    }

    public String getNestingKind() {
        return nestingKind;
    }

    public void setNestingKind(String nestingKind) {
        this.nestingKind = nestingKind;
    }

    public List<JMethod> getMethods() {
        return this.methods;
    }

    public List<JConstructor> getConstructors() {
        return constructors;
    }

    public List<JType> getGenericInterfaces() {
    	// TRICKY: Since this is filtered once on access use the this.genericInterfaceTypes directly during the initial polupation.
    	
		// TRICKY: At some interface "extends" on missing interface will find a class with the same name,
		// this results in an interface extending a class, or a class implementing a class... sooooo coool.
    	// Unfortunately at parse time we do not know what the type is yet.
    	if (genericInterfaces == null) {
    		this.genericInterfaces = new ArrayList<JType>();
    		for (JType jType: this.genericInterfaceTypes)
    			if (jType instanceof JavaClassInfo)
    				if (((JavaClassInfo) jType).isInterface())
    					this.genericInterfaces.add(jType);
    			else if (jType instanceof ParameterizedTypeInfo)
    				if (((JavaClassInfo)((ParameterizedTypeInfo) jType).getRawType()).isInterface())
    					this.genericInterfaces.add(jType);
    	}
    	
        return this.genericInterfaces;
    }

    public boolean isInterface() {
        return this.isInterface;
    }

    public void setIsInterface(boolean interfaceFlag) {
        this.isInterface = interfaceFlag;
    }
    
    public boolean isTopLevelClass() {
        return nestingKind.equals(NestingKind.TOP_LEVEL.toString());
    }
    
    public List<JTypeVariable> getTypeParameters() {
        return this.typeParameters;
    }

	@Override
	public Iterable<? extends JNode> getChildren() {
		return this.classTypes;
	}
	
	public void addChild(JNode child) {
		this.classTypes.add(child);
	}
	
	@Override
	public String getQualifiedName() {
		return this.qualifiedName;
	}
	
	public void setQualifiedName(String qualifiedName){
		this.qualifiedName = qualifiedName;
	}

	@Override
	public boolean isEnum() {
		return this.isEnum;
	}
	
	public void setIsEnum(boolean isEnum) {
		this.isEnum = isEnum;
	}

	@Override
	public boolean isArray() {
		return this.isArray;
	}
	
	public void setIsArray(boolean isArray) {
		this.isArray = isArray;
	}

	@Override
	public JType getComponentType() {
		return this.componentType;
	}
	
	public void setComponentType(JType componentType) {
		this.componentType = componentType;
	}

	@Override
	public void accept(JNodeVisitor jNodeVisitor) {
		jNodeVisitor.visit(this);
		for (JNode javaNode: getChildren())
			javaNode.accept(jNodeVisitor);
		jNodeVisitor.exit();
	}

	@Override
	public JClass getEnclosingClass() {
		return this.enclosingType;
	}
	
	@Override
	public boolean isHidden() {
		if (super.isHidden())
			return true;
		
//    	for (JMethod method: this.getMethods())
//    		if (method.isHidden() && method.isAbstract())
//    			this.setIsHidden();
		
    	for (JTypeVariable jTypeVar: this.getTypeParameters())
    		if (jTypeVar.isHidden())
    			this.setIsHidden();
    	
    	if ((this.enclosingType != null && this.enclosingType.isHidden())
				|| !this.isDefined
				|| this.getName() == null
				|| this.getName().equals("")
				) {
    		this.setIsHidden();
    	}
		
		return super.isHidden();
	}

//	@Override
//	public String getDocumentation() {
//		return comment;
//	}
}
