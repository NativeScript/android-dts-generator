package com.telerik.javascript.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Stack;

import com.telerik.java.api.*;

public class JToJSConverter {
	
	private JContext jContext;
	private JSGlobal jsGlobal;
	private TypeMap typeMap;
	
	private JClass jObject;
	private JSClass jsArray;
	
	private HashSet<String> structuralEquality = new HashSet<String>();
	private HashSet<String> incompatible = new HashSet<String>();
	
	public void setJContext(JContext context) {
		this.jContext = context;
	}
	
	public JSGlobal getJSGlobal() {
		return jsGlobal;
	}
	
	public void convert() {
		fillExceptionsTable();
		
		jsGlobal = new JSGlobal();
		jsGlobal.jPeer = jContext;
		
		typeMap = this.new TypeMap();

		jContext.accept(this.new HierarchyBuilder());
		
		jsGlobal.accept(this.new ClassTypeParametersBuilder());
		jsGlobal.accept(this.new InheritanceBuilder());
		jsGlobal.accept(this.new FieldsBuilder());
		jsGlobal.accept(this.new MethodsBuilder());
		
		jsGlobal.accept(this.new OverloadsBuilder());
		jsGlobal.accept(this.new FilterSignatureConflicts());
		
		jsGlobal.accept(this.new PropertiesBuilder());
		
		jsGlobal.accept(this.new StructuralEqualityResolve());
	}

	private void fillExceptionsTable() {
		
		structuralEquality.add("java.security:IPrivilegedAction");
		structuralEquality.add("java.security:IPrivilegedExceptionAction");
		
		structuralEquality.add("javax.microedition.khronos.opengles:IGL");
		structuralEquality.add("javax.microedition.khronos.egl:IEGL");
		
		structuralEquality.add("android.renderscript.Script:FieldID");
		structuralEquality.add("android.renderscript.Script:KernelID");
		
		structuralEquality.add("android.support.v8.renderscript.Script:FieldID");
		structuralEquality.add("android.support.v8.renderscript.Script:KernelID");		

		structuralEquality.add("java.lang:Byte");
		structuralEquality.add("java.lang:Short");
		structuralEquality.add("java.lang:Integer");
		structuralEquality.add("java.lang:Long");
		structuralEquality.add("java.lang:Float");
		structuralEquality.add("java.lang:Double");
		
		structuralEquality.add("native:Double");
		structuralEquality.add("native:Float");
		structuralEquality.add("native:Byte");
		structuralEquality.add("native:Long");
		structuralEquality.add("native:Short");
		
		structuralEquality.add("android.renderscript:Byte2");
		structuralEquality.add("android.renderscript:Byte3");
		structuralEquality.add("android.renderscript:Byte4");
		
		structuralEquality.add("android.renderscript:Short2");
		structuralEquality.add("android.renderscript:Short3");
		structuralEquality.add("android.renderscript:Short4");
		
		structuralEquality.add("android.renderscript:Int2");
		structuralEquality.add("android.renderscript:Int3");
		structuralEquality.add("android.renderscript:Int4");
		
		structuralEquality.add("android.renderscript:Float2");
		structuralEquality.add("android.renderscript:Float3");
		structuralEquality.add("android.renderscript:Float4");
		
		structuralEquality.add("android.renderscript:Double2");
		structuralEquality.add("android.renderscript:Double3");
		structuralEquality.add("android.renderscript:Double4");
		 
		incompatible.add("android.renderscript.ProgramFragmentFixedFunction");
		incompatible.add("android.renderscript.ProgramVertexFixedFunction");
		incompatible.add("android.widget.AbsoluteLayout");
		incompatible.add("android.R$string");
		
		incompatible.add("android.widget.CursorTreeAdapter");
		incompatible.add("java.util.concurrent.ConcurrentSkipListMap");
		incompatible.add("java.util.concurrent.ConcurrentSkipListMap.SubMap");
		incompatible.add("android.bordeaux.services.StochasticLinearRankerWithPrior");
	}
	
	private class TypeMap {

		private HashMap<JType, JSType> typesMap = new HashMap<JType, JSType>();
		private HashMap<JType, JSType> marshalledTypesMap = new HashMap<JType, JSType>();
		
		// NOTE: Perhaps I am getting the names wrong but the idea is the covariant types are present in method parameters and generate overloads,
		// while the contravariant types when in return type will substitute the return type with the contravariant type as we can not have a method to return two different types.
		private HashMap<JType, JSType> covariantTypes = new HashMap<JType, JSType>();
		private HashMap<JType, JSType> contravariantTypes = new HashMap<JType, JSType>();
		
		public TypeMap() {
			// TODO: This should not be here. The map should be populated from outside.
			jObject = jContext.getClass("java.lang.Object");
			
			putMarshalledType(jContext.getClass("boolean"), jsGlobal.getTheBooleanType());
			putMarshalledType(jContext.getClass("int"), jsGlobal.getTheNumberType());
			putMarshalledType(jContext.getClass("char"), jsGlobal.getTheStringType());
			putMarshalledType(jContext.getClass("void"), jsGlobal.getTheVoidType());
			
			// TODO: java.lang.Boolean to the boolean type.
			putMarshalledType(jContext.getClass("java.lang.Object"), jsGlobal.getTheObjectType());
			putMarshalledType(jContext.getClass("java.lang.String"), jsGlobal.getTheStringType());
			putMarshalledType(jContext.getClass("java.lang.CharSequence"), jsGlobal.getTheStringType());
			
			// TODO: The java.lang.String implement some interfaces that these too implement,
			// and some overrides specialize marshalled strings to these interfaces.
			// Add api-ref documentation explaining that stuff.
			putMarshalledType(jContext.getClass("java.lang.Appendable"), jsGlobal.getTheObjectType());
			putMarshalledType(jContext.getClass("android.text.Editable"), jsGlobal.getTheObjectType());
			
			putMarshalledType(jContext.getClass("byte"), jsGlobal.getTheNumberType());
			putMarshalledType(jContext.getClass("short"), jsGlobal.getTheNumberType());
			putMarshalledType(jContext.getClass("long"), jsGlobal.getTheNumberType());
			putMarshalledType(jContext.getClass("float"), jsGlobal.getTheNumberType());
			putMarshalledType(jContext.getClass("double"), jsGlobal.getTheNumberType());
			
			// natives
			JSModule jsNative = new JSModule();
			jsNative.name = "native";
			jsGlobal.add(jsNative);

			// Array class
			jsArray = new JSClass();
			jsArray.name = "Array";
			
			JSTypeVariable jsArrayTypeT = new JSTypeVariable();
			jsArrayTypeT.name = "T";
			jsArray.typeParameters.add(jsArrayTypeT);
					
			JSIndexer jsIndexer = new JSIndexer();
			JSParameter jsIndexParameter = new JSParameter();
			jsIndexParameter.name = "index";
			jsIndexParameter.type = jsGlobal.getTheNumberType();
			jsIndexer.jsParameter = jsIndexParameter;
			jsIndexer.jsReturnType = jsArrayTypeT;
			jsArray.indexers.add(jsIndexer);
			
			// TODO: Mark as readonly
			JSField jsLength = new JSField();
			jsLength.name = "length";
			jsLength.type = jsGlobal.getTheNumberType();
			jsArray.fields.add(jsLength);

			jsNative.add(jsArray);
			
			// Primitive constructor functions
			createPrimitiveCastFunction("byte", jsGlobal.getTheNumberType(), jsGlobal.getTheNumberType());
			createPrimitiveCastFunction("byte", jsGlobal.getTheStringType(), jsGlobal.getTheNumberType());
			
			createPrimitiveCastFunction("short", jsGlobal.getTheNumberType(), jsGlobal.getTheNumberType());
			createPrimitiveCastFunction("short", jsGlobal.getTheStringType(), jsGlobal.getTheNumberType());
			
			createPrimitiveCastFunction("long", jsGlobal.getTheNumberType(), jsGlobal.getTheNumberType());
			createPrimitiveCastFunction("long", jsGlobal.getTheStringType(), jsGlobal.getTheNumberType());
			
			createPrimitiveCastFunction("float", jsGlobal.getTheNumberType(), jsGlobal.getTheNumberType());
			createPrimitiveCastFunction("float", jsGlobal.getTheStringType(), jsGlobal.getTheNumberType());
			
			createPrimitiveCastFunction("double", jsGlobal.getTheNumberType(), jsGlobal.getTheNumberType());
			createPrimitiveCastFunction("double", jsGlobal.getTheStringType(), jsGlobal.getTheNumberType());
			
			// return paremeter types contravariance
			putContravariantType(getClassSafe("java.lang.Boolean"), jsGlobal.getTheBooleanType());
			putContravariantType(getClassSafe("java.lang.String"), jsGlobal.getTheStringType());
			
			putContravariantType(getClassSafe("byte"), jsGlobal.getTheNumberType());
			putContravariantType(getClassSafe("short"), jsGlobal.getTheNumberType());
			putContravariantType(getClassSafe("float"), jsGlobal.getTheNumberType());
			
			putContravariantType(getClassSafe("long"), jsGlobal.getTheObjectType());
			putContravariantType(getClassSafe("double"), jsGlobal.getTheObjectType());
			
			// in parameter types covariance
			putCovariantType(getClassSafe("java.lang.Boolean"), jsGlobal.getTheBooleanType());
			
			// TODO: Do we treat these as strings?
//			putCovariantType(getClassSafe("java.lang.String"), jsGlobal.getTheStringType());
//			putCovariantType(getClassSafe("java.lang.CharSequence"), jsGlobal.getTheStringType());
//			putCovariantType(getClassSafe("java.io.Serializable"), jsGlobal.getTheStringType());
			
			// TODO: We must implement structural equality for all JTypes and JSTypes...
			// putCovariantType(jContext.getClass("java.lang.Comparable<string>"), jsGlobal.getTheStringType());
		}
		
		private JClass getClassSafe(String typeQName) {
			JClass jClass = jContext.getClass(typeQName);
			if (jClass == null) {
				throw new UnsupportedOperationException("Failed to obtain a java class for " + typeQName + " from the java context.");
			}
			return jClass;
		}

		private void createPrimitiveCastFunction(String name, JSType jsFromType, JSType jsReturnType) {
			JSFunction jsCastFunction = new JSFunction();
			jsCastFunction.parent = jsGlobal;
			jsCastFunction.name = name;
			jsCastFunction.returnType = jsReturnType;
			JSParameter jsParameter = new JSParameter();
			jsParameter.name = "v";
			jsParameter.type = jsFromType;
			jsCastFunction.parameters.add(jsParameter);
			jsGlobal.functions.add(jsCastFunction);
		}

		private JSType createPrimitive(JSModule module, String javaName, String jsName) {
			JSClass jsClass = new JSClass();
			
			jsClass.name = jsName;
			JClass javaClass = jContext.getClass(javaName);
			jsClass.jPeer = javaClass;
			
			module.add(jsClass);
			return jsClass;
		}

		public void putType(JType jType, JSType jsType) {
			typesMap.put(jType, jsType);
		}
		
		public void putMarshalledType(JType jType, JSType jsType) {
			marshalledTypesMap.put(jType, jsType);
		}
				
		/**
		 * Along with the corresponding JSClass for the jClass, the jClass is also assignable from the additional jsType.
		 * @param jClass - the jClass in question
		 * @param jsType - the additional jsType that is assignable to jClass.
		 */
		private void putCovariantType(JType jType, JSType jsType) {
			if (covariantTypes.get(jType) != null)
				throw new UnsupportedOperationException("We currently support only one covariant js type per java type.");
			
			covariantTypes.put(jType, jsType);
		}

		private void putContravariantType(JType jType, JSType jsType) {
			if (contravariantTypes.get(jType) != null) {
				throw new UnsupportedOperationException("We currently support only one contravariant js type per java type.");
			}
			
			contravariantTypes.put(jType, jsType);
		}
		
		public boolean isCovariant(JType jClass) {
			return covariantTypes.containsKey(jClass);
		}
		
		public JSType marshallCovariantType(TypeScope scope, JType jType) {
			JSType jsCovariantType = covariantTypes.get(jType);
			if (jsCovariantType != null)
				return jsCovariantType;

			return marshallType(scope, jType);
		}
		
		public JSType marshallContravariantType(TypeScope scope, JType jType) {
			JSType jsContravariantType = contravariantTypes.get(jType);
			if (jsContravariantType != null)
				return jsContravariantType;
			
			return marshallType(scope, jType);
		}
		
		public JSType mapType(TypeScope scope, JType jType) {
			if (jType == null)
				throw new UnsupportedOperationException("JSTypes can not reference null JType.");
			
			// Looks up for global types like classes and interfaces. May be embedded in the jsGlobal.
			JSType jsGlobalType = typesMap.get(jType);
			if (jsGlobalType != null)
				return jsGlobalType;
			
			// Looks up for local js types such as type variables created for java type varialbes.
			JSType jsScopeType = scope.getType(jType);
			if (jsScopeType != null)
				return jsScopeType;

			return create(scope, jType);
		}
		
		public JSType marshallType(TypeScope scope, JType jType) {
			JSType jsType = marshalledTypesMap.get(jType);
			if (jsType != null)
				return jsType;
			return mapType(scope, jType);
		}
		
		public JSTypeVariable[] createTypeParameters(TypeScope scope, List<JTypeVariable> jTypeParameters) {
			JSTypeVariable[] jsTypeVariables = new JSTypeVariable[jTypeParameters.size()];
			for (int i = 0; i < jTypeParameters.size(); i++) {
				JTypeVariable jTypeParameter = jTypeParameters.get(i);
				JSTypeVariable jsTypeVariable = new JSTypeVariable();
				jsTypeVariable.jPeer = jTypeParameter;
				if (containsRecursiveBounds(jTypeParameters, jTypeParameter)) {
					// TODO: Create the type variable without bounds. JS/TS does not support bounds to reference the same list. Print in the JSTypeVariable documentation. 
				} else {
					List<JType> jTypeBounds = jTypeParameter.getBounds();
					if (jTypeBounds.size() == 1) {
						JType jBound = jTypeBounds.get(0);
						// TRICKY: Bounds to java.lang.Object are ignored so they fall back to TS/JS any.
						if (jBound != jObject && !jBound.isHidden()) {
							JSType bound = typeMap.mapType(scope, jBound);
							jsTypeVariable.bound = bound;
						}
					} else if (jTypeBounds.size() != 0) {
						System.out.println("  - Multiple bounds on type variable not supported.");
						// throw new UnsupportedOperationException("JS/TS does not support more than one bound on JSTypeVariable.");
					}
				}
				
				jsTypeVariables[i] = jsTypeVariable;
			}
			return jsTypeVariables;
		}
		
		public boolean isHidden(JType jType) {
			if (jType.isHidden())
				return true;
			
			if (jType instanceof JClass) {
				JClass jClass = (JClass)jType;
				for (String inc: incompatible) {
					try {
						if (jClass.getQualifiedName().startsWith(inc))
							return true;
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				
//				JType superClass = jClass.getGenericSuperclass(); 
//				if (superClass != null && this.isHidden(jClass.getGenericSuperclass()))
//					return true;
			}

			return false;
		}
		
		public boolean isHidden(JMethod jMethod) {
			if (jMethod.isHidden())
				return true;
			for (JParameter param: jMethod.getParameters())
				if (isHidden(param.getType()))
					return true;
			if (jMethod.getReturnType() != null && isHidden(jMethod.getReturnType()))
				return true;
			return false;
		}
		
		public boolean isHidden(JConstructor jConstructor) {
			if (jConstructor.isHidden())
				return true;
			for (JParameter param: jConstructor.getParameters())
				if (isHidden(param.getType()))
					return true;
			return false;
		}
		
		public boolean isHidden(JField jField) {
			return jField.isHidden() || isHidden(jField.getType());
		}
		
		private JSType create(TypeScope scope, JType jType) {
			if (jType instanceof JClass) return create(scope, (JClass) jType);
			else if (jType instanceof JTypeVariable) return create(scope, (JTypeVariable)jType);
			else if (jType instanceof JParameterizedType) return create(scope, (JParameterizedType)jType);
			else if (jType instanceof JWildcardType) return create(scope, (JWildcardType)jType);
			else if (jType instanceof JGenericArrayType) return create(scope, (JGenericArrayType)jType);
			throw new UnsupportedOperationException("Can not map type.");
		}
		
		private JSType create(TypeScope scope, JClass jClass) {
			if (isHidden(jClass)) {
				throw new UnsupportedOperationException("JSTypes can not be provided for hidden JTypes. " + jClass.getName());
			} else if (jClass.isArray()) {
				JSParameterizedType jsPrimitiveArrayType = new JSParameterizedType();
				jsPrimitiveArrayType.rawType = jsArray;
				jsPrimitiveArrayType.actualTypeArguments.add(marshallType(scope, jClass.getComponentType()));
				return jsPrimitiveArrayType;
			} else {
				throw new UnsupportedOperationException("JSTypes can not be provided. " + jClass.getName());
			}
		}

		private JSType create(TypeScope scope, JTypeVariable jTypeVariable) {
			// We have failed to find the type variable.
			// There are cases when type variable references refer to type
			// vars defined in enclosing types. This is not possible in TypeScrip.
			return jsGlobal.getTheObjectType();
			// throw new UnsupportedOperationException("Creating JSTypeVariable should be explicitly created due to some language limitations.");
		}
		
		private JSParameterizedType create(TypeScope scope, JParameterizedType jParameterizedType) {
			JSParameterizedType jsParameterizedType = new JSParameterizedType();
			jsParameterizedType.rawType = mapType(scope, jParameterizedType.getRawType());
			for (JType jActualType: jParameterizedType.getActualTypeArguments())
				jsParameterizedType.actualTypeArguments.add(marshallContravariantType(scope, jActualType));
			return jsParameterizedType;
		}

		private JSType create(TypeScope scope, JWildcardType jWildcardType) {
			return jsGlobal.getTheObjectType();
		}
		
		private JSType create(TypeScope scope, JGenericArrayType jGenericArrayType) {
			JSParameterizedType jsPrimitiveArrayType = new JSParameterizedType();
			jsPrimitiveArrayType.rawType = jsArray;
			jsPrimitiveArrayType.actualTypeArguments.add(marshallType(scope, jGenericArrayType.getGenericComponentType()));
			return jsPrimitiveArrayType;
		}
		
		private boolean containsRecursiveBounds(List<JTypeVariable> typeParameters, JType jType) {
			if (jType instanceof JTypeVariable) {
				JTypeVariable jTypeVariable = (JTypeVariable)jType;
				for (JType jChildType: jTypeVariable.getBounds()) {
					if (contains(typeParameters, jChildType))
						return true;
					if (containsRecursiveBounds(typeParameters, jChildType))
						return true;
				}
			} else if (jType instanceof JClass) {
				return false;
			} else if (jType instanceof JParameterizedType) {
				JParameterizedType jParameterizedType = (JParameterizedType)jType;
				for (JType jChildType: jParameterizedType.getActualTypeArguments()) {
					if (contains(typeParameters, jChildType))
						return true;
					containsRecursiveBounds(typeParameters, jChildType);
				}
			} else if (jType instanceof JWildcardType) {
				// TODO: Implement the wildcard bounds. Add the wildcard bounds in the documentation.
				// JWildcardType jWildcardType = (JWildcardType) jType;
			} else {
				throw new UnsupportedOperationException("Unsupported bounds type.");
			}
			
			// jTypeParameter.getBounds()
			return false;
		}
		
		private boolean contains(List<JTypeVariable> typeParameters, JType jType) {
			for (JTypeVariable typeParameter: typeParameters)
				if (typeParameter == jType)
					return true;
			return false;
		}
	}
	
	private class HierarchyBuilder extends JNodeVisitor {
		
		Stack<JSNode> stack = new Stack<JSNode>();
		
		@Override
		public void visit(JContext jContext) {
			stack.push(jsGlobal);
			super.visit(jContext);
		}
		
		@Override
		public void visit(JPackage jPackage) {
			addModule(jPackage);
			super.visit(jPackage);
		}
		
		@Override
		public void visit(JClass jClass) {
			if (typeMap.isHidden(jClass)) {
				stack.push(null);
			} else {
				if (jClass.isInterface()) addInterface(jClass);
				else if (jClass.isEnum()) addEnum(jClass);
				else addClass(jClass);
			}
			super.visit(jClass);
		}
		
		@Override
		public void exit() {
			stack.pop();
			super.exit();
		}
		
		private void addModule(JPackage jPackage) {
			JSModule jsModule = new JSModule();
			jsModule.jPeer = jPackage;
			jsModule.name = jPackage.getName();
			stack.peek().add(jsModule);
			stack.push(jsModule);
		}
		
		private void addInterface(JClass jClass) {
			JSInterface jsInterface = new JSInterface();
			
			typeMap.putType(jClass, jsInterface);
			jsInterface.jPeer = jClass;
			jsInterface.name = "I" + jClass.getName();
			stack.peek().add(jsInterface);
			
			JSClass jsClass = new JSClass();
			jsClass.annotate(Annotations.InterfaceConstructor, jsInterface);
			// NOTE: this jsClass has interface peer as it is artificially introduced to accommodate constructor method for the interface.
			jsClass.jPeer = jClass;
			jsClass.name = jClass.getName();
			stack.peek().add(jsClass);
			
			// Child classes will be stuffed in the class, not the interface.
			stack.push(jsClass);
		}

		private void addEnum(JClass jClass) {
			JSEnum jsEnum = new JSEnum();
			typeMap.putType(jClass, jsEnum);
			jsEnum.jPeer = jClass;
			jsEnum.name = jClass.getName();
			stack.peek().add(jsEnum);
			stack.push(jsEnum);
		}

		private void addClass(JClass jClass) {
			JSClass jsClass = new JSClass();
			typeMap.putType(jClass, jsClass);
			jsClass.jPeer = jClass;
			jsClass.name = jClass.getName();
			stack.peek().add(jsClass);
			stack.push(jsClass);
		}
	}
	
	private class ClassTypeParametersBuilder extends JSNodeVisitor {
		@Override
		public void visit(JSClass jsClass) {
			if (jsClass.getPeer() != null)
				createTypeParameters(jsClass, jsClass.typeParameters, jsClass.getPeer().getTypeParameters());
			super.visit(jsClass);
		}
		
		@Override
		public void visit(JSInterface jsInterface) {
			if (jsInterface.getPeer() != null)
				createTypeParameters(jsInterface, jsInterface.typeParameters, jsInterface.getPeer().getTypeParameters());
			super.visit(jsInterface);
		}
		
		private void createTypeParameters(TypeScope scope, ArrayList<JSTypeVariable> list, List<JTypeVariable> jTypeVariables) {
			for (JSTypeVariable jsTypeParameter: typeMap.createTypeParameters(scope, jTypeVariables))
				list.add(jsTypeParameter);
		}
	}
	
	private class InheritanceBuilder extends JSNodeVisitor {
		@Override
		public void visit(JSClass jsClass) {
			if (jsClass.getPeer() != null) {
				setSuperclass(jsClass);			
				listInterfaces(jsClass, jsClass.interfaces, jsClass.getPeer().getGenericInterfaces());
				addConstructorClassInterface(jsClass);
			}

			super.visit(jsClass);
		}

		private void addConstructorClassInterface(JSClass jsClass) {
			if (jsClass.hasAnnotation(Annotations.InterfaceConstructor)) {
				JSInterface jsInterface = (JSInterface)jsClass.getAnnotation(Annotations.InterfaceConstructor);
				if (jsInterface.getTypeParameters().size() > 0) {
					JSParameterizedType jsParameterizedType = new JSParameterizedType();
					jsParameterizedType.rawType = jsInterface;
					for (JSTypeVariable jsTypeVariable: jsClass.getTypeParameters())
						jsParameterizedType.actualTypeArguments.add(jsTypeVariable);
					jsClass.interfaces.add(jsParameterizedType);
					jsClass.annotate(Annotations.InterfaceConstructorType, jsParameterizedType);
				} else {
					jsClass.interfaces.add(jsInterface);
					jsClass.annotate(Annotations.InterfaceConstructorType, jsInterface);
				}
			}
		}
		
		@Override
		public void visit(JSInterface jsInterface) {
			listInterfaces(jsInterface, jsInterface.interfaces, jsInterface.getPeer().getGenericInterfaces());
			super.visit(jsInterface);
		}
		
		// TODO: Check if enums support inheritance. 
		private void setSuperclass(JSClass jsClass) {
			JClass jClass = jsClass.getPeer();
			JType jSuperClass = getVisibleSuperclass(jClass);
			if (jSuperClass != null)
				jsClass.superclass = typeMap.mapType(jsClass, jSuperClass);
		}
		
		private JType getVisibleSuperclass(JType jClass) {
			JType jSuperclass;
			if (jClass instanceof JClass) {
				jSuperclass = ((JClass) jClass).getGenericSuperclass();
			} else if (jClass instanceof JParameterizedType) {
				jSuperclass = ((JClass)((JParameterizedType) jClass).getRawType()).getGenericSuperclass();
			} else {
				throw new UnsupportedOperationException("Superclass expected to be a JClass or JParameterizedType with raw type - class.");
			}

			if (jSuperclass != null && typeMap.isHidden(jSuperclass))
				return getVisibleSuperclass(jSuperclass);

			return jSuperclass;
		}

		private void listInterfaces(TypeScope scope, List<JSType> jsInterfaces, List<JType> jInterfaces) {
			try {
				for (JType jInterface: jInterfaces)
					if (!typeMap.isHidden(jInterface))
						jsInterfaces.add(typeMap.mapType(scope, jInterface));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	private class FieldsBuilder extends JSNodeVisitor {
		@Override
		public void visit(JSClass jsClass) {
			if (jsClass.getPeer() != null) {
				listFields(jsClass, jsClass.fields, jsClass.getPeer().getFields());
				listClassField(jsClass);
			}
			super.visit(jsClass);
		}
		
		private void listClassField(JSClass jsClass) {
			if (jsClass.hasAnnotation(Annotations.InterfaceConstructor)) {
				// TODO: interface class field should be in interface module of its own.
			} else {
				JSField jsClassField = new JSField();
				jsClassField.name = "class";
				jsClassField.isStatic = true;
				
				JClass jClassClass = jContext.getClass("java.lang.Class");
				JSType jsClassClass = typeMap.mapType(jsClass, jClassClass);
				JSParameterizedType jsParameterizedClassType = new JSParameterizedType();
				jsParameterizedClassType.rawType = jsClassClass;
				
				// TODO: if jsRawType has type arguments the type vars from the jsClass
				jsParameterizedClassType.actualTypeArguments.add(jsClass);
				
				jsClassField.type = jsParameterizedClassType;
				
				jsClass.fields.add(jsClassField);
			}
		}

		@Override
		public void visit(JSInterface jsInterface) {
			if (jsInterface.getPeer() != null) {
				listFields(jsInterface, jsInterface.fields, jsInterface.getPeer().getFields());
			}
			super.visit(jsInterface);
		}
		
		@Override
		public void visit(JSEnum jsEnum) {
			listEnumFields(jsEnum.enumFields, jsEnum.getPeer().getFields());
			super.visit(jsEnum);
		}
		
		private void listFields(TypeScope scope, List<JSField> jsFields, List<JField> jFields) {
			for (JField jField: jFields) {
				if (typeMap.isHidden(jField) || !jField.isPublic())
					continue;
				
				JSField jsField = new JSField();
				jsField.jPeer = jField;
				jsField.name = jField.getName();
				jsField.isStatic = jField.isStatic();
				jsField.type = typeMap.marshallType(scope, jField.getType());
				jsFields.add(jsField);
			}
		}
		
		private void listEnumFields(List<JSEnumField> jsEnumFields, List<JField> fields) {
			for (JField jField: fields) {
				if (typeMap.isHidden(jField) || !jField.isPublic() || !jField.isStatic())
					continue;
				
				JSEnumField jsEnumField = new JSEnumField();
				jsEnumField.jPeer = jField;
				jsEnumField.name = jField.getName();
				jsEnumFields.add(jsEnumField);
			}
		}
	}
	
	private class MethodsBuilder extends JSNodeVisitor {
		@Override
		public void visit(JSClass jsClass) {
			if (jsClass.getPeer() != null) {
				listMethods(jsClass, jsClass.methods, jsClass.getPeer().getMethods());
				
				if (jsClass.getPeer().getEnclosingClass() == null || jsClass.getPeer().isStatic()) {
					listConstructors(jsClass, jsClass.constructors, jsClass.getPeer().getConstructors());
				} else {
					createNestedClassConstructors(jsClass);
				}
				
				addInterfaceConstructor(jsClass);
			}
			super.visit(jsClass);
		}

		private void createNestedClassConstructors(JSClass jsClass) {
			// NOTE: This is nested class and the constructors should be available as instance fields on the enclosing class.
			JSNode jsParentNode = jsClass.getParent();
			if (jsParentNode instanceof JSClass) {
				JSClass jsParentClass = (JSClass)jsParentNode;
				
				if (jsClass.getTypeParameters().size() > 0) {
					System.out.println("  - Nested constructors with type parameters not supported. " + jsClass.getQualifiedName());
				} else {
				
					JSField jsField = new JSField();
					jsField.name = jsClass.getName();
					JSObjectType jsObjectType = new JSObjectType();
					
					for (JConstructor jConstructor: jsClass.getPeer().getConstructors()) {
						if (typeMap.isHidden(jConstructor) || !jConstructor.isPublic())
							continue;
						
						jsObjectType.news.add(createNestedClassNew(jsClass, jConstructor));
						if (hasCovariantParameter(jConstructor.getParameters()))
							jsObjectType.news.add(createCovariantNestedClassNew(jsClass, jConstructor));
					}
					
					jsField.type = jsObjectType;
					
					// NOTE: We do not need to push fields for nested classes without constructors.
					if (jsObjectType.getNews().size() > 0)
						jsParentClass.fields.add(jsField);
				}
			}
			// System.out.println("Instance constructor: " + jsClass.getQualifiedName() + ", constructors(" + jsClass.getPeer().getConstructors().length + ") " + jsClass.getPeer().getConstructors()[0].isPublic());
			// TODO: Annotate the default constructor as unusable. 
		}
		
		private JSNew createNestedClassNew(JSClass parent, JConstructor jConstructor) {
			JSNew jsNew = new JSNew();
			jsNew.parent = parent;
			jsNew.jPeer = jConstructor;
			// TODO: These probably should come from the class:
			// listTypeParameters(jsNew, jsNew.typeParameters, jConstructor.getTypeParameters());
			jsNew.returnType = parent;
			
			// TODO: WARNING: When read with reflection the "this" parameter is pushed as first argument. When read from source-code - nope!!!
			// listParameters(jsNew, jsNew.parameters, cloneWithoutTheThisParameter(jConstructor.getParameters()));
			listParameters(jsNew, jsNew.parameters, jConstructor.getParameters());
			return jsNew;
		}
		
		private JSNew createCovariantNestedClassNew(JSClass parent, JConstructor jConstructor) {
			JSNew jsNew = new JSNew();
			jsNew.parent = parent;
			jsNew.jPeer = jConstructor;
			// TODO: These probably should come from the class:
			// listTypeParameters(jsNew, jsNew.typeParameters, jConstructor.getTypeParameters());
			jsNew.returnType = parent;
			
			// TODO: WARNING: When read with reflection the "this" parameter is pushed as first argument. When read from source-code - nope!!!
			//listCovariantParameters(jsNew, jsNew.parameters, cloneWithoutTheThisParameter(jConstructor.getParameters()));
			listCovariantParameters(jsNew, jsNew.parameters, jConstructor.getParameters());
			return jsNew;
		}
		
		private List<JParameter> cloneWithoutTheThisParameter(List<JParameter> parameters) {
			List<JParameter> jParams = new ArrayList<JParameter>(parameters.size() - 1);
			for (int i = 1; i < parameters.size(); i++)
				jParams.set(i - 1, parameters.get(i));
			return jParams;
		}
		
		@Override
		public void visit(JSInterface jsInterface) {
			if (jsInterface.getPeer() != null) {
				listInterfaceMethods(jsInterface, jsInterface.methods, jsInterface.getPeer().getMethods());
			}
			super.visit(jsInterface);
		}
		
		@Override
		public void visit(JSEnum jsEnum) {
			listFunctions(jsEnum, jsEnum.functions, jsEnum.getPeer().getMethods());
			super.visit(jsEnum);
		}

		private void listConstructors(JSNode parent, List<JSConstructor> jsConstructors, List<JConstructor> jConstructors) {
			for (JConstructor jConstructor: jConstructors) {
				if (typeMap.isHidden(jConstructor) || !jConstructor.isPublic())
					continue;

				jsConstructors.add(createConstructor(parent, jConstructor));
				
				if (hasCovariantParameter(jConstructor.getParameters()))
					jsConstructors.add(createCovariantConstructor(parent, jConstructor));
			}
		}

		private JSConstructor createConstructor(JSNode parent, JConstructor jConstructor) {
			JSConstructor jsConstructor = new JSConstructor();
			jsConstructor.parent = parent;
			jsConstructor.jPeer = jConstructor;
			listTypeParameters(jsConstructor, jsConstructor.typeParameters, jConstructor.getTypeParameters());
			listParameters(jsConstructor, jsConstructor.parameters, jConstructor.getParameters());
			return jsConstructor;
		}
		
		private JSConstructor createCovariantConstructor(JSNode parent, JConstructor jConstructor) {
			JSConstructor jsCovariantConstructor = new JSConstructor();
			jsCovariantConstructor.parent = parent;
			jsCovariantConstructor.jPeer = jConstructor;
			listTypeParameters(jsCovariantConstructor, jsCovariantConstructor.typeParameters, jConstructor.getTypeParameters());
			listCovariantParameters(jsCovariantConstructor, jsCovariantConstructor.parameters, jConstructor.getParameters());
			return jsCovariantConstructor;
		}
		
		private void addInterfaceConstructor(JSClass jsClass) {
			if (jsClass.hasAnnotation(Annotations.InterfaceConstructorType)) {
				JSType jsInterfaceType = (JSType)jsClass.getAnnotation(Annotations.InterfaceConstructorType);
				JSConstructor jsConstructor = new JSConstructor();
				JSParameter jsParameter = new JSParameter();
				jsParameter.name = "implementation";
				jsParameter.type = jsInterfaceType;
				jsConstructor.parameters.add(jsParameter);
				jsClass.constructors.add(jsConstructor);
			}
		}
		
		private void listMethods(JSNode parent, List<JSMethod> jsMethods, List<JMethod> jMethods) {
			for (JMethod jMethod: jMethods) {
				if (typeMap.isHidden(jMethod) || !jMethod.isPublic())
					continue;

				jsMethods.add(createMethod(parent, jMethod));
				if (hasCovariantParameter(jMethod.getParameters()))
					jsMethods.add(createCovariantMethod(parent, jMethod));
			}
		}
		
		private void listInterfaceMethods(JSNode parent, List<JSMethod> jsMethods, List<JMethod> jMethods) {
			for (JMethod jMethod: jMethods) {
				if (typeMap.isHidden(jMethod) || !jMethod.isPublic())
					continue;
				
				// NOTE: Covariant methods are preffered over the regular methods. Duplicates are skipped to relax interface implementation... 
				if (hasCovariantParameter(jMethod.getParameters())) {
					jsMethods.add(createCovariantMethod(parent, jMethod));
				} else {
					jsMethods.add(createMethod(parent, jMethod));
				}
			}
		}

		private JSMethod createMethod(JSNode parent, JMethod jMethod) {
			JSMethod jsMethod = new JSMethod();
			jsMethod.parent = parent;
			jsMethod.jPeer = jMethod;
			listTypeParameters(jsMethod, jsMethod.typeParameters, jMethod.getTypeParameters());
			listParameters(jsMethod, jsMethod.parameters, jMethod.getParameters());
			jsMethod.returnType = typeMap.marshallContravariantType(jsMethod, jMethod.getReturnType());
			return jsMethod;
		}
		
		private JSMethod createCovariantMethod(JSNode parent, JMethod jMethod) {
			JSMethod jsMethod = new JSMethod();
			jsMethod.parent = parent;
			jsMethod.jPeer = jMethod;
			listTypeParameters(jsMethod, jsMethod.typeParameters, jMethod.getTypeParameters());
			listCovariantParameters(jsMethod, jsMethod.parameters, jMethod.getParameters());
			jsMethod.returnType = typeMap.marshallContravariantType(jsMethod, jMethod.getReturnType());
			return jsMethod;
		}
		
		private void listFunctions(JSNode parent, List<JSFunction> jsFunctions, List<JMethod> jMethods) {
			for (JMethod jMethod: jMethods) {
				if (typeMap.isHidden(jMethod) || !jMethod.isPublic() || !jMethod.isStatic())
					continue;
				
				jsFunctions.add(createFunction(parent, jMethod));
				
				if (hasCovariantParameter(jMethod.getParameters()))
					jsFunctions.add(createCovariantFunction(parent, jMethod));	
			}
		}

		private JSFunction createFunction(JSNode parent, JMethod jMethod) {
			JSFunction jsFunction = new JSFunction();
			jsFunction.parent = parent;
			jsFunction.jPeer = jMethod;
			listTypeParameters(jsFunction, jsFunction.typeParameters, jMethod.getTypeParameters());
			listParameters(jsFunction, jsFunction.parameters, jMethod.getParameters());
			jsFunction.returnType = typeMap.marshallContravariantType(jsFunction, jMethod.getReturnType());
			return jsFunction;
		}
		
		private JSFunction createCovariantFunction(JSNode parent, JMethod jMethod) {
			JSFunction jsFunction = new JSFunction();
			jsFunction.parent = parent;
			jsFunction.jPeer = jMethod;
			listTypeParameters(jsFunction, jsFunction.typeParameters, jMethod.getTypeParameters());
			listCovariantParameters(jsFunction, jsFunction.parameters, jMethod.getParameters());
			jsFunction.returnType = typeMap.marshallContravariantType(jsFunction, jMethod.getReturnType());
			return jsFunction;
		}

		private void listTypeParameters(TypeScope scope, List<JSTypeVariable> jsParameters, List<JTypeVariable> jParameters) {
			for (JSTypeVariable jsTypeParameter: typeMap.createTypeParameters(scope, jParameters))
				jsParameters.add(jsTypeParameter);
		}
		
		private void listParameters(TypeScope scope, List<JSParameter> jsParameters, List<JParameter> jParameters) {
			for (JParameter jParameter: jParameters) {
				JSParameter jsParameter = new JSParameter();
				jsParameter.jPeer = jParameter;
				jsParameter.type = typeMap.marshallType(scope, jParameter.getType());
				jsParameters.add(jsParameter);
			}
		}
		
		private void listCovariantParameters(TypeScope scope, List<JSParameter> jsParameters, List<JParameter> jParameters) {
			for (JParameter jParameter: jParameters) {
				JSParameter jsParameter = new JSParameter();
				jsParameter.jPeer = jParameter;
				jsParameter.type = typeMap.marshallCovariantType(scope, jParameter.getType());
				jsParameters.add(jsParameter);
			}
		}
		
		private boolean hasCovariantParameter(List<JParameter> parameters) {
			for (JParameter jParameter: parameters)
				if (typeMap.isCovariant(jParameter.getType()))
					return true;
			return false;
		}
	}
	
	private class PropertiesBuilder extends JSNodeVisitor {
		// NOTE: We will not add properties for interfaces as it would put extra weight on implementing them.
		@Override
		public void visit(JSClass jsClass) {
			if (jsClass.getPeer() != null) {
				for (PropertyInfo propertyInfo: getPropertyMethods(jsClass)) {
					
					String getPrefix = null;
					String setPrefix = null;
					
					if (hasMethodWithPrefix(propertyInfo, "get", "set")) {
						getPrefix = "get";
						setPrefix = "set";
					} else if (hasMethodWithPrefix(propertyInfo, "is", "setIs")) {
						getPrefix = "is";
						setPrefix = "setIs";
					} else if (hasMethodWithPrefix(propertyInfo, "has", "setHas")) {
						getPrefix = "has";
						setPrefix = "setHas";
					}
					
					if (getPrefix != null && setPrefix != null) {
						JSMethod jsGetter = getGetterMethod(propertyInfo.getterMethods, getPrefix);
						if (jsGetter == null) {
							// NOTE: We do not want to create fire-and-forget properties. 
						} else {
							boolean isReadOnly = !hasSetterOfType(propertyInfo, setPrefix, jsGetter.getReturnType());
							// TODO: If it is read only - create readonly field...
							if (!isReadOnly) {
								JSField jsField = new JSField();
								jsField.name = propertyInfo.name;
								jsField.type = jsGetter.getReturnType();
								jsClass.fields.add(jsField);
								// System.out.println("  Create property... on " + jsClass.getName() + " the " + jsField.name + " ofType " + jsField.type);
							}
						}
					}
				}
			}
		}
	
		private boolean hasSetterOfType(PropertyInfo propertyInfo, String setPrefix, JSType ofType) {
			for (JSMethod jsMethod: propertyInfo.setterMethods)
				if (jsMethod.getName().startsWith(setPrefix))
					if (JSAssignmentOperations.isAssignableFrom(jsMethod.getParameters().get(0).getType(), ofType))
						return true;
			return false;
		}

		private boolean hasMethodWithPrefix(PropertyInfo propertyInfo, String getPrefix, String setPrefix) {
			return hasPrefixedMethod(propertyInfo.getterMethods, getPrefix) || hasPrefixedMethod(propertyInfo.setterMethods, setPrefix);
		}
		
		private JSMethod getGetterMethod(Iterable<JSMethod> methods, String prefix) {
			for (JSMethod jsMethod: methods)
				if (jsMethod.getName().startsWith(prefix))
					return jsMethod;
			return null;
		}

		private boolean hasPrefixedMethod(Iterable<JSMethod> methods, String prefix) {
			for (JSMethod jsMethod: methods)
				if (jsMethod.getName().startsWith(prefix))
					return true;
			return false;
		}

		private Iterable<PropertyInfo> getPropertyMethods(JSClass jsClass) {
			HashMap<String, PropertyInfo> properties = new HashMap<String, PropertyInfo>();
			for (JSMethod jsMethod: jsClass.getMethods()) {
				
				if (jsMethod.isStatic())
					continue;
				
				String name = jsMethod.getName();
				PropertyMethod propertyMethod = PropertyMethod.None;
				
				if (name.startsWith("get")) {
					propertyMethod = PropertyMethod.Getter;
					name = name.substring(3);
				} else if (name.startsWith("is")) {
					propertyMethod = PropertyMethod.Getter;
					name = name.substring(2);
				} else if (name.startsWith("has")) {
					propertyMethod = PropertyMethod.Getter;
					name = name.substring(3);
				} else if (name.startsWith("setIs")) {
					propertyMethod = PropertyMethod.Setter;
					name = name.substring(5);
				} else if (name.startsWith("setHas")) {
					propertyMethod = PropertyMethod.Setter;
					name = name.substring(6);
				} else if (name.startsWith("set")) {
					propertyMethod = PropertyMethod.Setter;
					name = name.substring(3);
				}
				
				if (name.length() == 0)
					continue;
				
				if (!Character.isUnicodeIdentifierStart(name.charAt(0)))
					continue;
								
				if (propertyMethod != PropertyMethod.None) {
					
					if (propertyMethod == PropertyMethod.Getter) {
						if (jsMethod.getParameters().size() != 0)
							continue;
						if (jsMethod.getTypeParameters().size() != 0)
							continue;
						if (jsMethod.getReturnType() == jsGlobal.getTheVoidType())
							continue;
					} else if (propertyMethod == PropertyMethod.Setter) {
						if (jsMethod.getParameters().size() != 1)
							continue;
						if (jsMethod.getTypeParameters().size() != 0)
							continue;					
					}
					
					PropertyInfo propertyInfo = properties.get(name);
					if (propertyInfo == null) {
						propertyInfo = new PropertyInfo();
						properties.put(name, propertyInfo);
						propertyInfo.name = name;
					}
					
					if (propertyMethod == PropertyMethod.Getter)
						propertyInfo.getterMethods.add(jsMethod);
					else if (propertyMethod == PropertyMethod.Setter)
						propertyInfo.setterMethods.add(jsMethod);
				}
			}
			
			return properties.values();
		}
	}
	
	private static class PropertyInfo {
		String name;
		List<JSMethod> getterMethods = new ArrayList<JSMethod>();
		List<JSMethod> setterMethods = new ArrayList<JSMethod>();
	}
	
	private enum PropertyMethod {
		None,
		Getter,
		Setter
	}

	private class OverloadsBuilder extends JSNodeVisitor {
		
		private HashSet<JSNode> visited = new HashSet<JSNode>();

		@Override
		public void visit(JSClass jsClass) {
			process(jsClass);
		}
		
		@Override
		public void visit(JSInterface jsInterface) {
			process(jsInterface);
		}

		private void process(JSClass jsClass) {
			if (visited.contains(jsClass))
				return;
				
			visited.add(jsClass);
			
			for (JSType jsInterfaceType: jsClass.getInterfaces()) {
				JSInterface jsImplementedInterface;
				HashMap<JSType, JSType> map;
				
				if (jsInterfaceType instanceof JSInterface) {
					jsImplementedInterface = (JSInterface)jsInterfaceType; 
					map = new HashMap<JSType, JSType>();
					for (JSTypeVariable jsTypeVariable: jsImplementedInterface.getTypeParameters())
						map.put(jsTypeVariable, jsGlobal.getTheObjectType());
				} else if (jsInterfaceType instanceof JSParameterizedType) {
					JSParameterizedType jsParameterizedType = (JSParameterizedType)jsInterfaceType;
					if (jsParameterizedType.getRawType() instanceof JSInterface) {
						jsImplementedInterface = (JSInterface)jsParameterizedType.getRawType();
						map = createSubstitutionMap(jsParameterizedType.getActualTypeArguments(), jsImplementedInterface.getTypeParameters());
					} else {
						throw new UnsupportedOperationException("An interface extends parameterized type which does not have an interface as raw type.");
					}
				} else {
					throw new UnsupportedOperationException("An interface extends something that is not an interface nor parameterized type.");
				}
				
				process(jsImplementedInterface);
				
				for (JSMethod jsSupermethod: jsImplementedInterface.getMethods()) {
					JSMethod jsSubstitutedMethod = substitute(jsSupermethod, map);
					if (!callSignatureExist(jsClass, jsSubstitutedMethod))
						jsClass.getMethods().add(jsSubstitutedMethod);
				}
			}
			
			processSuperclass(jsClass);
						
			HashSet<String> overloads = new HashSet<String>();
			for (JSMethod jsMethod: jsClass.getMethods())
				overloads.add(jsMethod.getName());
			
			JSType jsSuperclassType = jsClass.getSuperclass();
			HashMap<JSType, JSType> map = new HashMap<JSType, JSType>();
			while(jsSuperclassType != null) {
				map = pushMap(jsSuperclassType, map);
				JSClass jsSuperclass = getClassFromType(jsSuperclassType);
				for (JSMethod jsSupermethod: jsSuperclass.getMethods()) {
					if (overloads.contains(jsSupermethod.getName())) {
						if (!callSignatureExist(jsClass, jsSupermethod)) {
							jsClass.getMethods().add(substitute(jsSupermethod, map));							
						}
					}
				}
				jsSuperclassType = jsSuperclass.getSuperclass();
			}
		}

		private boolean callSignatureExist(JSClass jsClass, JSMethod jsSupermethod) {
			boolean callableExist = false;
			for (JSMethod jsMethod: jsClass.getMethods()) {
				if (JSAssignmentOperations.callSignatureMatch(jsSupermethod, jsMethod)) {
					callableExist = true;
					break;
				}
			}
			return callableExist;
		}

		private void processSuperclass(JSClass jsClass) {
			JSClass jsSuperclass = getClassFromType(jsClass.getSuperclass());
			if (jsSuperclass != null)
				process(jsSuperclass);
		}

		private void process(JSInterface jsInterface) {
			if (visited.contains(jsInterface))
				return;
			
			visited.add(jsInterface);
			
			HashSet<String> overloads = new HashSet<String>();
			for (JSMethod jsMethod: jsInterface.getMethods())
				overloads.add(jsMethod.getName());
			
			for (JSType jsInterfaceType: jsInterface.getInterfaces()) {
				JSInterface jsImplementedInterface;
				HashMap<JSType, JSType> map;
				
				if (jsInterfaceType instanceof JSInterface) {
					jsImplementedInterface = (JSInterface)jsInterfaceType;					
					map = new HashMap<JSType, JSType>();
					for (JSTypeVariable jsTypeVariable: jsImplementedInterface.getTypeParameters())
						map.put(jsTypeVariable, jsGlobal.getTheObjectType());
				} else {
					JSParameterizedType jsParameterizedType = (JSParameterizedType)jsInterfaceType;
					jsImplementedInterface = (JSInterface)jsParameterizedType.getRawType();
					map = createSubstitutionMap(jsParameterizedType.getActualTypeArguments(), jsImplementedInterface.getTypeParameters());
				}
				
				process(jsImplementedInterface);
				
				for (JSMethod jsSupermethod: jsImplementedInterface.getMethods())
					jsInterface.getMethods().add(substitute(jsSupermethod, map));
			}
		}
		
		private HashMap<JSType, JSType> createSubstitutionMap(List<JSType> actualTypes, List<JSTypeVariable> typeVars) {
			HashMap<JSType, JSType> map = new HashMap<JSType, JSType>();
			for (int i = 0; i < actualTypes.size(); i++)
				map.put(typeVars.get(i), actualTypes.get(i));
			return map;
		}
		
		private HashMap<JSType, JSType> pushMap(JSType jsType, HashMap<JSType, JSType> map) {
			HashMap<JSType, JSType> childMap = new HashMap<JSType, JSType>(map);
			if (jsType instanceof JSParameterizedType) {
				JSParameterizedType jsParameterizedType = (JSParameterizedType)jsType;
				List<JSTypeVariable> jsTypeVariables = null;
				
				if (jsParameterizedType.getRawType() instanceof JSClass) 
					jsTypeVariables = ((JSClass)jsParameterizedType.getRawType()).getTypeParameters();
				else if (jsParameterizedType.getRawType() instanceof JSInterface)
					jsTypeVariables = ((JSInterface)jsParameterizedType.getRawType()).getTypeParameters();
				
				for (int i = 0; i < jsParameterizedType.getActualTypeArguments().size(); i++)
					childMap.put(jsTypeVariables.get(i), substitute(jsParameterizedType.getActualTypeArguments().get(i), map));
			}
			return childMap;
		}
		
		private JSMethod substitute(JSMethod jsMethod, HashMap<JSType, JSType> map) {
			JSMethod jsSubstitute = new JSMethod();
			jsSubstitute.jPeer = jsMethod.jPeer;
			
			if (jsMethod.getTypeParameters().size() > 0) {
				HashMap<JSType, JSType> childMap = new HashMap<JSType, JSType>(map);
				for (JSTypeVariable jsTypeVariable: jsMethod.getTypeParameters()) {
					JSTypeVariable jsType = substitute(jsTypeVariable, map);
					childMap.put(jsTypeVariable, jsType);
					// TODO: Substitute bounds and push in new map:
					jsSubstitute.typeParameters.add(jsType);
				}
				map = childMap;
			}
			
			for (JSParameter jsParameter: jsMethod.getParameters())
				jsSubstitute.parameters.add(substitute(jsParameter, map));
			
			jsSubstitute.returnType = substitute(jsMethod.getReturnType(), map);
			
			return jsSubstitute;
		}
		
		private JSParameter substitute(JSParameter jsParameter, HashMap<JSType, JSType> map) {
			JSParameter jsSubstitute = new JSParameter();
			jsSubstitute.jPeer = jsParameter.jPeer;
			jsSubstitute.type = substitute(jsParameter.getType(), map);
			return jsSubstitute;
		}

		private JSTypeVariable substitute(JSTypeVariable jsTypeVariable, HashMap<JSType, JSType> map) {
			JSTypeVariable jsSubstitute = new JSTypeVariable();
			jsSubstitute.jPeer = jsTypeVariable.jPeer;
			jsSubstitute.bound = substitute(jsTypeVariable.getBound(), map);
			return jsSubstitute;
		}
		
		private JSType substitute(JSType jsType, HashMap<JSType, JSType> map) {
			JSType jsSubstitute = map.get(jsType);
			if (jsSubstitute != null)
				return jsSubstitute;
			// TODO: Recursively substitute in type parameters.
			if (jsType instanceof JSParameterizedType) {
				return substitute((JSParameterizedType)jsType, map);
			}
			return jsType;
		}
		
		private JSType substitute(JSParameterizedType jsType, HashMap<JSType, JSType> map) {
			JSParameterizedType jsSubstitute = new JSParameterizedType();
			jsSubstitute.rawType = jsType.getRawType();
			for (JSType jsActualTypeParameter: jsType.getActualTypeArguments())
				jsSubstitute.actualTypeArguments.add(substitute(jsActualTypeParameter, map));
			return jsSubstitute;
		}

		private JSClass getClassFromType(JSType jsType) {
			if (jsType == null) {
				return null;
			} else if (jsType instanceof JSClass) {
				return (JSClass) jsType;
			} else if (jsType instanceof JSParameterizedType) {
				return (JSClass)((JSParameterizedType)jsType).getRawType();
			} else {
				throw new UnsupportedOperationException("Can not get JSClass from the provided type.");
			}
		}
	}
	
	private class FilterSignatureConflicts extends JSNodeVisitor {
		@Override
		public void visit(JSClass jsClass) {
			// System.out.println(jsClass.getQualifiedName() + " --- ");
			Iterable<JSMethod> shadowedMethods = getShadowedMethods(jsClass.getMethods());
			for (JSMethod toRemove: shadowedMethods)
				jsClass.methods.remove(toRemove);
			
			Iterable<JSConstructor> shadowedConstructors = getShadowedConstructors(jsClass.getConstructors());
			for (JSConstructor toRemove: shadowedConstructors)
				jsClass.constructors.remove(toRemove);
			
			super.visit(jsClass);
		}

		@Override
		public void visit(JSInterface jsInterface) {
			Iterable<JSMethod> shadowedMethods = getShadowedMethods(jsInterface.getMethods());
			for (JSMethod toRemove: shadowedMethods)
				jsInterface.methods.remove(toRemove);
			super.visit(jsInterface);
		}

		private Iterable<JSMethod> getShadowedMethods(List<JSMethod> methods) {
			// For the sake of simplicity I would call it "method promotion"
			// That is when two overloads have the same argument types but different return types.
			// For example: "object clone()" and "ConcurrentSkipListMap clone()"
			// And we select the one with most concrete return type to keep in TS/JS, the other is "shadowed".
			
			HashSet<JSMethod> shadowedMethods = new HashSet<JSMethod>();
			// TODO: We need a proper hash map here to go from O(n^2) to O(2n)
			for (int i = 0; i < methods.size() - 1; i++) {
				for (int j = i + 1; j < methods.size(); j++) {
					
					JSMethod left = methods.get(i);
					JSMethod right = methods.get(j);
					
					if (JSAssignmentOperations.callSignatureMatch(left, right)) {

						JSType aReturnType = left.getReturnType();
						JSType bReturnType = right.getReturnType();
					
						boolean canSetAtoB = JSAssignmentOperations.isAssignableFrom(bReturnType, aReturnType);
						boolean canSetBtoA = JSAssignmentOperations.isAssignableFrom(aReturnType, bReturnType);

						// TODO: We need to figure out the "canSetAtoB && canSetBtoA" and "!canSetAtoB && !canSetBtoA" better
						if (canSetAtoB && canSetBtoA) {
							shadowedMethods.add(right);
							//System.out.println(i + " > " + j);
						} else if (!canSetAtoB && !canSetBtoA) {
							shadowedMethods.add(right);
							//System.out.println(i + " > " + j);
							// throw new UnsupportedOperationException("Incompatible return types for promotion!");
						} else if (canSetAtoB) {
							shadowedMethods.add(right);
							//System.out.println(i + " > " + j);
						} else if (canSetBtoA) {
							shadowedMethods.add(left);
							//System.out.println(j + " > " + i);
						} else {
							throw new UnsupportedOperationException("This code should be unreachable.");
						}
					}
				}
			}
			
			return shadowedMethods;
		}
		
		private Iterable<JSConstructor> getShadowedConstructors(List<JSConstructor> constructors) {
			HashSet<JSConstructor> shadowedConstructors = new HashSet<JSConstructor>();
			
			for (int i = 0; i < constructors.size() - 1; i++) {
				for (int j = i + 1; j < constructors.size(); j++) {

					JSConstructor left = constructors.get(i);
					JSConstructor right = constructors.get(j);
					
					if (JSAssignmentOperations.callSignatureMatch(left, right)) {
						shadowedConstructors.add(right);
					}
				}
			}
			
			return shadowedConstructors;
		}
	}
	
	private class StructuralEqualityResolve extends JSNodeVisitor {
		
		@Override
		public void visit(JSInterface jsInterface) {
			if (structuralEquality.contains(jsInterface.getQualifiedName())) {
				JSField jsField = new JSField();
				jsField.isOptional = true;
				jsField.name = "__" + jsInterface.getQualifiedName().replace('.', '_').replace(':', '_');
				jsField.type = jsGlobal.getTheObjectType();
				jsInterface.fields.add(jsField);
			}
			super.visit(jsInterface);
		}
		
		@Override
		public void visit(JSClass jsClass) {
			if (structuralEquality.contains(jsClass.getQualifiedName())) {
				JSField jsField = new JSField();
				jsField.isPrivate = true;
				jsField.name = "__" + jsClass.getQualifiedName().replace('.', '_').replace(':', '_');
				jsField.type = jsGlobal.getTheObjectType();
				jsClass.fields.add(jsField);
			}
			super.visit(jsClass);
		}
	}

	private enum Annotations {
		BridgeClass,
		InterfaceConstructor,
		InterfaceConstructorType
	}
}













