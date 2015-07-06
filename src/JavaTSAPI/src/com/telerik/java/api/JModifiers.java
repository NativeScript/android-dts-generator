package com.telerik.java.api;

import java.util.List;

public interface JModifiers {
	
	/**
	 * Marks classes that are not officially public,
	 * methods and fields that can be found in the API but are marked with comments as hidden or rely on hidden classes.
	 * @return true if the element requires classes outside the current java context.  
	 */
	boolean isHidden();
	
	boolean isPublic();
	boolean isProtected();
	boolean isPrivate();
	
	boolean isStatic();
	
	boolean isAbstract();
	boolean isFinal();
	
	List<JAnnotation> getAnnotations();
}
