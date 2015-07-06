package com.telerik.java.api.reflection;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.lang.reflect.*;
import java.util.jar.*;

import com.telerik.java.api.*;

public class JavaJarContext extends JavaNode implements JContext {
	
	private HashMap<String, JavaClass> jarClasses;
	private HashMap<Object, Object> javaNodeForReflectedObject;
	private URLClassLoader loader;
	
	private JavaJarContext() {
		jarClasses = new HashMap<String, JavaClass>();
		javaNodeForReflectedObject = new HashMap<Object, Object>();
	}
	
	public JavaClass getClass(String name) {
		return jarClasses.get(name);
	}
	
	@Override
	public String getName() {
		return "";
	}
	
	@Override
	public String getQualifiedName() {
		return "";
	}
	
	private void addClass(String className) throws ClassNotFoundException {
		String[] tokens = className.split("\\.");
		addNamespaces(this, tokens, 0);
	}
	
	private void addNamespaces(JavaNode jarEntity, String[] tokens, int depth) throws ClassNotFoundException {
		if (depth < tokens.length - 1) {
			String name = tokens[depth];
			JavaPackage current = (JavaPackage)jarEntity.get(name);
			if (current == null) {
				current = new JavaPackage(name);
				jarEntity.put(current);
			}
			jarEntity = current;
			addNamespaces(jarEntity, tokens, depth + 1);
		} else {
			tokens = tokens[depth].split("\\$");
			addClasses(jarEntity, tokens, 0);
		}
	}
	
	private void addClasses(JavaNode jarEntity, String[] tokens, int depth) throws ClassNotFoundException {
		if (depth < tokens.length) {
			String className = tokens[depth];
			JavaClass current = (JavaClass)jarEntity.get(className);
			if (current == null) {
				current = new JavaClass(className);
				jarEntity.put(current);
				String qualifiedName = current.getQualifiedName();
				Class<?> reflectedClass = this.loader.loadClass(qualifiedName);
				current.reflectedClass = reflectedClass;
				javaNodeForReflectedObject.put(reflectedClass, current);
				jarClasses.put(qualifiedName, current);
			}
			jarEntity = current;
			addClasses(jarEntity, tokens, depth + 1);
		}
	}
	
	public static JavaJarContext fromFile(String[] paths) throws IOException, FileNotFoundException, ClassNotFoundException {
		
		URL[] urls = new URL[paths.length];
		for(int i = 0; i < paths.length; i++)
			urls[i] = new URL("jar:file:" + paths[i] + "!/");
		
        URLClassLoader loader = URLClassLoader.newInstance(urls);
        
        JavaJarContext root = new JavaJarContext();
        root.loader = loader;
        root.createPrimitiveTypes();
        
        for(String path: paths)
        	root.createClassHierarchy(path);
        
        root.reflectMembersRecursively(root);
        
        return root;
	}

	private void createPrimitiveTypes() {
		createPrimitiveType(boolean.class);
		createPrimitiveType(char.class);
		createPrimitiveType(byte.class);
		createPrimitiveType(short.class);
		createPrimitiveType(int.class);
		createPrimitiveType(long.class);
		createPrimitiveType(float.class);
		createPrimitiveType(double.class);
	}
	
	private JavaType createParameterizedType(ParameterizedType reflectedType) {
		// reflectedType.getActualTypeArguments()
		JavaParameterizedType javaType = new JavaParameterizedType();
		javaNodeForReflectedObject.put(reflectedType, javaType);
		
		javaType.rawType = getJavaType(reflectedType.getRawType());
		
		Type[] reflectedActualTypeArguments = reflectedType.getActualTypeArguments();
		List<JType> javaActualTypeArguments = createTypes(reflectedActualTypeArguments);
		
		javaType.actualTypeArguments = javaActualTypeArguments;
		
		return javaType;
	}
	
	private JavaType createTypeVariable(TypeVariable<?> reflectedTypeVariable) {
		JavaTypeVariable javaTypeVariable = new JavaTypeVariable();
		javaNodeForReflectedObject.put(reflectedTypeVariable, javaTypeVariable);
		Type[] reflectedBounds = reflectedTypeVariable.getBounds();
		ArrayList<JType> javaBounds = new ArrayList<JType>(reflectedBounds.length);
		for (int i = 0; i < reflectedBounds.length; i++)
			javaBounds.add(getJavaType(reflectedBounds[i]));
		javaTypeVariable.bounds = javaBounds;
		javaTypeVariable.name = reflectedTypeVariable.getName();
		return javaTypeVariable;
	}
	
	private JavaWildcardType createWildcardType(WildcardType reflectedWildcardType) {
		JavaWildcardType javaWildcardType = new JavaWildcardType();
		javaNodeForReflectedObject.put(reflectedWildcardType, javaWildcardType);
		// TODO: Lower and Upper bounds
		return javaWildcardType;
	}

	private JavaClass createPrimitiveType(Class<?> reflectedClass) {
		JavaClass javaClass = new JavaClass(reflectedClass.getName());
		javaClass.fields = new ArrayList<JField>();
		javaClass.constructors = new ArrayList<JConstructor>();
		javaClass.methods = new ArrayList<JMethod>();
		javaClass.typeParameters = new ArrayList<JTypeVariable>();
		javaClass.genericInterfaces = new ArrayList<JType>();
		javaNodeForReflectedObject.put(reflectedClass, javaClass);
		javaClass.reflectedClass = reflectedClass;
		jarClasses.put(javaClass.getName(), javaClass);
		return javaClass;
	}
	
	private JavaClass createArrayType(Class<?> arrayClass) {
		JavaClass javaClass = new JavaClass(arrayClass.getName());
		javaNodeForReflectedObject.put(arrayClass, javaClass);
		
		javaClass.reflectedClass = arrayClass;
		JavaClass componentType = getJavaClass(arrayClass.getComponentType());
		javaClass.componentType = componentType;
		
		return javaClass;
	}
	
	private JavaType createGenericArrayType(GenericArrayType refectedGenericArrayType) {
		JavaGenericArrayType javaGenericArrayType = new JavaGenericArrayType();
		javaNodeForReflectedObject.put(refectedGenericArrayType, javaGenericArrayType);
		javaGenericArrayType.genericComponentType = getJavaType(refectedGenericArrayType.getGenericComponentType());
		refectedGenericArrayType.getGenericComponentType();
		return javaGenericArrayType;
	}
	
	private JavaClass createHiddenClass(Class<?> reflectedClass) {
		JavaClass javaClass = new JavaClass();
		javaNodeForReflectedObject.put(reflectedClass, javaClass);
		jarClasses.put(javaClass.getName(), javaClass);
		javaClass.genericInterfaces = new ArrayList<JType>();
		javaClass.typeParameters = new ArrayList<JTypeVariable>();
		javaClass.genericInterfaces = new ArrayList<JType>();
		javaClass.fields = new ArrayList<JField>();
		javaClass.constructors = new ArrayList<JConstructor>();
		javaClass.methods = new ArrayList<JMethod>();
		javaClass.isHidden = true;
		return javaClass;
	}

	private void createClassHierarchy(String path) throws IOException, ClassNotFoundException {
		
		JarFile jarFile = new JarFile(path);
		Enumeration<JarEntry> e = jarFile.entries();
		
		while (e.hasMoreElements()) {
		    JarEntry je = (JarEntry) e.nextElement();
		    if(je.isDirectory() || !je.getName().endsWith(".class")) {
		        continue;
		    }
		    
		    // -6 because of .class
		    String className = je.getName().substring(0,je.getName().length() - 6);
		    className = className.replace('/', '.');
		    
		    addClass(className);
		}
		
		jarFile.close();
	}

	private void reflectMembersRecursively(JavaNode node) throws ClassNotFoundException {
		if (node instanceof JavaClass) {
			JavaClass javaClass = (JavaClass)node;
			reflectClassMembers(javaClass);
		}
		
		for (JavaNode child: node.getChildren()) {
			reflectMembersRecursively(child);
		}
	}

	private void reflectClassMembers(JavaClass javaClass) throws ClassNotFoundException {
		Class<?> reflectedClass = javaClass.reflectedClass; // loader.loadClass(javaClass.getQualifiedName());
		javaClass.typeParameters = createTypeVariables(reflectedClass.getTypeParameters());

		Type reflectedSuperclass = reflectedClass.getGenericSuperclass();
		if (reflectedSuperclass != null)
			javaClass.genericSuperclass = getJavaType(reflectedSuperclass);
		
		javaClass.genericInterfaces = createTypes(reflectedClass.getGenericInterfaces());
		javaClass.fields = createFields(reflectedClass.getDeclaredFields());
		// TODO: Constructors: reflectedClass.getDeclaredConstructors()
		javaClass.constructors = createConstructors(reflectedClass.getDeclaredConstructors());
		javaClass.methods = createMethods(reflectedClass.getDeclaredMethods());
	}

	private List<JParameter> createParameters(Type[] parameterTypes) {
		ArrayList<JParameter> javaParameters = new ArrayList<JParameter>(parameterTypes.length);
		for(int i = 0; i < parameterTypes.length; i++) {
			Type reflectedParameterClass = parameterTypes[i];
			JavaParameter javaParameter = new JavaParameter();
			// We can not get that with reflection...
			javaParameter.name = "arg" + (i + 1);
			javaParameter.type = getJavaType(reflectedParameterClass);
			javaParameters.add(javaParameter);
		}
		return javaParameters;
	}

	private List<JTypeVariable> createTypeVariables(TypeVariable<?>[] reflectedTypeParameters) {
		ArrayList<JTypeVariable> javaTypeParameters = new ArrayList<JTypeVariable>();
		for (int i = 0; i < reflectedTypeParameters.length; i++)
			javaTypeParameters.add(getJavaTypeVariable(reflectedTypeParameters[i]));
		return javaTypeParameters;
	}
	
	private List<JType> createTypes(Type[] reflectedTypes) {
		ArrayList<JType> genericInterfaces = new ArrayList<JType>(reflectedTypes.length);
		for (int i = 0; i < reflectedTypes.length; i++)
			genericInterfaces.add(getJavaType(reflectedTypes[i]));
		return genericInterfaces;
	}
	
	private List<JField> createFields(Field[] reflectedFields) {
		ArrayList<JField> fields = new ArrayList<JField>(reflectedFields.length);
		for (int i = 0; i < reflectedFields.length; i++) {
			Field field = reflectedFields[i];
			JavaField javaField = new JavaField();
			javaField.reflectedField = field;
			javaField.type = getJavaType(field.getGenericType());
			fields.add(javaField);
		}
		return fields;
	}
	
	private List<JConstructor> createConstructors(Constructor<?>[] reflectedConstructors) {
		ArrayList<JConstructor> javaConstructors = new ArrayList<JConstructor>(reflectedConstructors.length);
		for (int i = 0; i < reflectedConstructors.length; i++) {
			Constructor<?> reflectedConstructor = reflectedConstructors[i];
			JavaConstructor javaConstructor = new JavaConstructor();
			javaConstructor.reflectedConstructor = reflectedConstructor;
			javaConstructor.typeParameters = createTypeVariables(reflectedConstructor.getTypeParameters());
			javaConstructor.parameters = createParameters(reflectedConstructor.getGenericParameterTypes());
			javaConstructors.add(javaConstructor);
		}
		return javaConstructors;
	}
	
	private List<JMethod> createMethods(Method[] reflectedMethods) {
		ArrayList<JMethod> javaMethods = new ArrayList<JMethod>(reflectedMethods.length);
		for (int i = 0; i < reflectedMethods.length; i++) {
			Method reflectedMethod = reflectedMethods[i]; 
			JavaMethod javaMethod = new JavaMethod();
			javaMethod.reflectedMethod = reflectedMethod;
			javaMethod.typeParameters = createTypeVariables(reflectedMethod.getTypeParameters());
			javaMethod.parameters = createParameters(reflectedMethod.getGenericParameterTypes());
			javaMethod.returnType = getJavaType(reflectedMethod.getGenericReturnType());
			javaMethods.add(javaMethod);
		}
		return javaMethods;
	}
	
	private JavaTypeVariable getJavaTypeVariable(TypeVariable<?> reflectedTypeParameter) {
		return (JavaTypeVariable)getJavaType(reflectedTypeParameter);
	}

	private JavaClass getJavaClass(Class<?> reflectedClass) {
		return (JavaClass)getJavaType(reflectedClass);
	}

	private JavaType getJavaType(Type reflectedType) {
		Object javaNode = javaNodeForReflectedObject.get(reflectedType);
		if (javaNode != null) {
			if (javaNode instanceof JType) {
				return (JavaType)javaNode;
			} else {
				
			}
		} else if (reflectedType instanceof Class<?>) {
			Class<?> reflectedClass = (Class<?>)reflectedType;
			if (reflectedClass.isPrimitive()) {
				return createPrimitiveType(reflectedClass);
			} else if (reflectedClass.isArray()) {
				return createArrayType(reflectedClass);
			} else {
				// WARNING: Some classes can not be found and public API requiring or exposing them is skipped.
				// System.out.println("Hidden: " + reflectedClass.toString());
				return createHiddenClass(reflectedClass);
			}
		} else if (reflectedType instanceof ParameterizedType) {
			ParameterizedType reflectedParameterizedType = (ParameterizedType)reflectedType;
			JavaType javaType = createParameterizedType(reflectedParameterizedType);
			return javaType;
		} else if (reflectedType instanceof TypeVariable<?>) {
			TypeVariable<?> reflectedTypeVariable = (TypeVariable<?>)reflectedType;
			JavaType javaType = createTypeVariable(reflectedTypeVariable);
			return javaType;
		} else if (reflectedType instanceof WildcardType) {
			WildcardType reflectedWildcardType = (WildcardType)reflectedType;
			JavaType javaType = createWildcardType(reflectedWildcardType);
			return javaType;
		} else if (reflectedType instanceof GenericArrayType) {
			GenericArrayType refectedGenericArrayType = (GenericArrayType)reflectedType;
			JavaType javaType = createGenericArrayType(refectedGenericArrayType);
			return javaType;
		}
		
		if (reflectedType == null) {
			System.out.println("Missing: type null");
		} else {
			System.out.println("Missing: " + reflectedType.toString());
		}

		return null;
		// throw new UnsupportedOperationException("JavaType not implemented for type.");
	}
	
	@Override
	public void accept(JNodeVisitor jNodeVisitor) {
		jNodeVisitor.visit(this);
		super.accept(jNodeVisitor);
	}

	@Override
	public String getDocumentation() {
		return null;
	}
	
	private static <T> List<T> arrayToList(T[] arg) {
		ArrayList<T> list = new ArrayList<T>(arg.length);
		for (T t: arg) list.add(t);
		return list;
	}
}





