package com.telerik.javascript.api;

import java.util.List;

public class JSAssignmentOperations {
	
	// Assignment in TypeScript is over-complicated.
	public static boolean callSignatureMatch(JSMethod left, JSMethod right) {
		if (!left.getName().equals(right.getName()))
			return false;
		
		List<JSParameter> leftParams = left.getParameters();
		List<JSParameter> rightParams = right.getParameters();
		
		if (!parametersMatch(leftParams, rightParams))
			return false;
		
		return true;
	}
	
	public static boolean callSignatureMatch(JSConstructor left, JSConstructor right) {
		
		List<JSParameter> leftParams = left.getParameters();
		List<JSParameter> rightParams = right.getParameters();
		
		if (!parametersMatch(leftParams, rightParams))
			return false;
		
		return true;
	}

	private static boolean parametersMatch(List<JSParameter> leftParams, List<JSParameter> rightParams) {
		if (leftParams.size() != rightParams.size())
			return false;
		
		for(int i = 0; i < leftParams.size(); i++) {
			JSType leftParamType = leftParams.get(i).getType();
			JSType rightParamType = rightParams.get(i).getType();
			
			if (JSAssignmentOperations.areCrossAssignable(leftParamType, rightParamType)) {

			} else {
				return false;
			}
		}
		
		return true;
	}
	
	public static boolean isAssignableFrom(JSType to, JSType from) {
		if (to instanceof JSPrimitive && ((JSPrimitive)to).getName().equals("object")) {
			if (from instanceof JSPrimitive) {
				// TODO: There are some interfaces that expose remove(i:number) and remove(o:object) and these overloads are not interchangeable.
			} else {
				return true;
			}
		}
		
		if (to == from) return true;
		
		JSClass toClass = getClass(to);
		JSClass fromClass = getClass(from);
		
		if (toClass != null && fromClass != null)
			return inheritsFrom(fromClass, toClass);
		
		JSInterface toInterface = getInterface(to);
		JSInterface fromInterface = getInterface(from);
		
		if (toInterface != null && fromInterface != null)
			return implementsInterface(fromInterface, toInterface);
		
		if (toInterface != null && fromClass != null)
			return implementsInterface(fromClass, toInterface);
		
		if (to instanceof JSArray && from instanceof JSArray) {
			JSArray toArray = new JSArray();
			JSArray fromArray = new JSArray();
			return areCrossAssignable(toArray.getComponentType(), fromArray.getComponentType());
		}
		
		// TODO: For the sake of simplicity we will consider type parameters to assignable if they have the same name.
		// For perfect solution we should examine the type parameters along with their position and bounds.
		// It get messy when in different methods.
		if (to instanceof JSTypeVariable && from instanceof JSTypeVariable) {
			JSTypeVariable toTypeVar = (JSTypeVariable)to;
			JSTypeVariable fromTypeVar = (JSTypeVariable)from;
			return toTypeVar.getName().equals(fromTypeVar.getName());
		}
		
		return false;
	}
	
	public static boolean areCrossAssignable(JSType left, JSType right) {
		boolean isLeftAssignableFromRight = isAssignableFrom(left, right);
		boolean isRigthAssignableFromLeft = isAssignableFrom(right, left);
		return isLeftAssignableFromRight && isRigthAssignableFromLeft;
	}

	private static boolean inheritsFrom(JSClass source, JSClass targetToImplement) {
		if (source == targetToImplement) return true;
		JSClass sourceSuperclass = getClass(source.getSuperclass());
		if (sourceSuperclass != null)
			return inheritsFrom(sourceSuperclass, targetToImplement);
		return false;
	}
	
	private static boolean implementsInterface(JSInterface source, JSInterface targetToImplement) {
		if (source == targetToImplement)
			return true;
		for(JSType childSource: source.getInterfaces())
			if (implementsInterface(getInterface(childSource), targetToImplement))
				return true;
		return false;
	}
	
	private static boolean implementsInterface(JSClass source, JSInterface targetToImplement) {
		for(JSType sourceInterfaces: source.getInterfaces())
			if (implementsInterface(getInterface(sourceInterfaces), targetToImplement))
				return true;
		JSClass superclass = getClass(source.getSuperclass());
		if (superclass != null)
			return implementsInterface(superclass, targetToImplement);
		return false;
	}

	private static JSClass getClass(JSType to) {
		if (to instanceof JSClass) return (JSClass)to;
		else if (to instanceof JSParameterizedType) {
			JSType toRawType = ((JSParameterizedType)to).getRawType();
			if (toRawType instanceof JSClass) return (JSClass) toRawType;
		}
		return null;
	}
	
	private static JSInterface getInterface(JSType to) {
		if (to instanceof JSInterface) return (JSInterface)to;
		else if (to instanceof JSParameterizedType) {
			JSType toRawType = ((JSParameterizedType)to).getRawType();
			if (toRawType instanceof JSInterface) return (JSInterface) toRawType;
		}
		return null;
	}
}
