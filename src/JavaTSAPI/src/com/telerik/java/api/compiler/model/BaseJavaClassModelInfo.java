package com.telerik.java.api.compiler.model;

import java.util.ArrayList;
import java.util.List;

import com.telerik.java.api.JAnnotation;
import com.telerik.java.api.JModifiers;

public class BaseJavaClassModelInfo implements JModifiers {

    private int moduleType;    
    private String name = null;    
    private List<JAnnotation> annontations = new ArrayList<JAnnotation>();    
    private boolean publicFlag;    
    private boolean privateFlag;    
    private boolean protectedFlag;    
    private boolean finalFlag; 
    private boolean abstractFlag;    
    private boolean nativeFlag;
    private boolean staticFlag;
	private String comment;
	private boolean isHidden;
	
	private List<String> paramsDoc = new ArrayList<String>();
    
    public void setAbstractFlag(boolean abstractFlag) {
        this.abstractFlag = abstractFlag;
    }
    
    public boolean isAbstract() {
        return abstractFlag;
    }

    public void setFinalFlag(boolean finalFlag) {
        this.finalFlag = finalFlag;
    }
    
    public boolean isFinal() {
         return finalFlag;
    }

    public void setNativeFlag(boolean nativeFlag) {
        this.nativeFlag = nativeFlag;
    }
    
    public boolean isNative() {
         return nativeFlag;
    }

    public void setPrivateFlag(boolean privateFlag) {
        this.privateFlag = privateFlag;
    }
    
    public boolean isPrivate() {
        return privateFlag;
    }

    public void setProtectedFlag(boolean protectedFlag) {
        this.protectedFlag = protectedFlag;
    }
    
    public boolean isProtected() {
        return protectedFlag;
    }

    public void setPublicFlag(boolean publicFlag) {
        this.publicFlag = publicFlag;
    }
    
    public boolean isPublic() {
        return publicFlag;
    }

    public void setStaticFlag(boolean staticFlag) {
        this.staticFlag = staticFlag;
    }
    
    public boolean isStatic() {
        return staticFlag;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public List<JAnnotation> getAnnotations() {
        return annontations;
    }
    
    public void addAnnotation(JAnnotation anno){
        annontations.add(anno);
    }

    public int getModuleType() {
        return moduleType;
    }
    
    public void setModuleType(int moduleType) {
        this.moduleType = moduleType;
    }
    
    public String getDocumentation() {
    	return this.comment;
    }
    
    public String getParameterDocumentation(int index) {
    	if (this.paramsDoc.size() > index)
    		return this.paramsDoc.get(index);
    	return null;
    }
    
    public void setComment(String comment){
    	this.comment = comment;
    	this.paramsDoc.clear();
    	if (this.comment != null)
    		for(String line: this.comment.split("\\r?\\n"))
    			if (line.contains("@param"))
    				this.paramsDoc.add(line);
    }

    public void setIsHidden() {
    	this.isHidden = true;
    }
    
	@Override
	public boolean isHidden() {
		if (this.isHidden)
			return true;
		String doc = this.getDocumentation();
    	if (doc != null && doc.contains("@hide"))
    		this.setIsHidden();
		return this.isHidden;
	}
}
