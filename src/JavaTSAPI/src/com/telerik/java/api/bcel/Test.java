package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.bcel.classfile.Attribute;
import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.classfile.Signature;
import org.apache.bcel.generic.ArrayType;
import org.apache.bcel.generic.BasicType;
import org.apache.bcel.generic.ObjectType;
import org.apache.bcel.generic.Type;

public class Test {
	public void go() {
		ScopeDispenser sd = null;
		try {
			sd = new ScopeDispenser(
//					"/home/local/PROGRESS/plpetkov/work/repos/android-metadata-generator/jars"
					"/home/plamen5kov/work/repo/android-metadata-generator/jars"
					);
			processJarScopes(sd.iterator());
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (sd != null) {
				try {
					sd.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

	private void processJarScopes(Iterator<JarScope> it) {
		while (it.hasNext()) {
			JarScope js = it.next();
			processDirectoryScopes(js.iterator());
		}
	}

	private void processDirectoryScopes(Iterator<DirectoryScope> it) {
		while (it.hasNext()) {
			DirectoryScope ds = it.next();
			processFileScopes(ds.iterator());
		}
	}

	private PrintStream ps;
	
	private StringBuilder2 sbContent;
	
	private StringBuilder2 sbHeaders;
	
	private Set<String> references;

	private JavaClass prevClass;
	
	private String currentFileClassname;

	private void processFileScopes(Iterator<FileScope> it) {
		while (it.hasNext()) {
			this.prevClass = null;
			FileScope fs = it.next();
			ps = null;
			try {
				File[] files = fs.getFiles();
				if ((files != null) && (files.length > 0)) {
					JavaClass clazz = ClassRepo.loadClass(files[0]);
					sbHeaders = new StringBuilder2();
					sbContent = new StringBuilder2();
					references = new HashSet<String>();
					currentFileClassname = clazz.getClassName();
					ps = new PrintStream(new File(
//							"/home/local/PROGRESS/plpetkov/work/repos/NativeScript/dtsfiles"
							"/home/plamen5kov/work/repo/NativeScript/dtsfiles"
							,
							currentFileClassname + ".d.ts"));

					processClassScopes(fs.iterator(), sbContent);
					
					String[] refs = references.toArray(new String[references.size()]);
					Arrays.sort(refs);
					for (String r: refs) {
						sbHeaders.append("/// <reference path=\"./");
						sbHeaders.append(r);
						sbHeaders.appendln(".d.ts\" />");
					}
					
					ps.println("/// <reference path=\"./_helpers.d.ts\" />");
					ps.println(sbHeaders.toString());
					ps.print(sbContent.toString());
				}
			} catch (IOException e) {
				throw new RuntimeException(e);
			} finally {
				if (ps != null) {
					ps.close();
				}
			}
		}
	}

	private int ident;

	private void processClassScopes(Iterator<ClassScope> it, StringBuilder2 sbContent) {
		while (it.hasNext()) {
			ClassScope cs = it.next();
			JavaClass currClass = cs.getJavaClass();
			//
			this.ident = closePackage(this.prevClass, currClass);
			this.ident = openPackage(this.prevClass, currClass);
			//
			String tabs = getTabs(this.ident);
			sbContent.appendln(tabs + "export class " + getSimpleClassname(currClass) + getGenericClassParams(currClass)
					+ " {");
			processMemberScopes(cs.iterator());
			sbContent.appendln(tabs + "}");
			this.prevClass = currClass;
		}
		closePackage(prevClass, null);
	}

	private String getGenericClassParams(JavaClass currClass) {
		StringBuilder defaultGenericLine = new StringBuilder();
		Attribute[] attributes = currClass.getAttributes();
		for(Attribute attribute : attributes) {
			if(attribute instanceof Signature) { 
				String classSignature = ((Signature)attribute).getSignature();
				String genericParamsLine = getGenericParams(classSignature);
				if(genericParamsLine == null) {
					continue;
				}
				
				List<String> sepParams = getSeparateParams(genericParamsLine);
				int paramSize = sepParams.size();
				
				defaultGenericLine.append("<");
				
				for(int i = 0; i < paramSize; i++) {
					
					String itemToAdd = sepParams.get(i);
					defaultGenericLine.append(itemToAdd);
					
					if(i != (sepParams.size() - 1)) {
						defaultGenericLine.append(",");
					}
				}
				defaultGenericLine.append(">");
			}
		}
		return defaultGenericLine.toString();
	}
	
	private List<String> getSeparateParams(String genericParamsLine) {
		List<String> res = new ArrayList<String>();

		String pattern = "(\\w+)\\:{1,2}([\\w\\/]+(([<].*[>])|));";
		Pattern r = Pattern.compile(pattern);
		Matcher m = r.matcher(genericParamsLine);
		while(m.find()) {
			res.add(m.group(1));
		}
		return res;
	}

	private String getGenericParams(String classSignature) {
		String res = null;
		if(classSignature.startsWith("<")) {
			Integer sigLen = classSignature.length();
			Integer obc = 0;
			for(int i = 0; i < sigLen; i++) {
				if(classSignature.charAt(i) == '<') {
					obc ++;
				}
				if(classSignature.charAt(i) == '>') {
					obc --;
				}
				if(obc == 0) { 
					res = classSignature.substring(1, i);
					break;
				}
			}
		}
		return res;
	}

	private String getSimpleClassname(JavaClass javaClass) {
		String[] parts = javaClass.getClassName().replace('$', '.')
				.split("\\.");
		return parts[parts.length - 1];
	}

	private int closePackage(JavaClass prevClass, JavaClass currClass) {
		int ident = 0;

		if (prevClass == null) {
			return ident;
		}

		String prevClassName = prevClass.getClassName();
		int prevDotCount = prevClassName.length()
				- prevClassName.replace(".", "").length();
		int prevDollarCount = prevClassName.length()
				- prevClassName.replace("$", "").length();
		int prevCount = prevDotCount + prevDollarCount;

		if (currClass == null) {
			ident = prevCount;
			while (ident > 0) {
				String tabs = getTabs(--ident);
				sbContent.appendln(tabs + "}");
			}
			return ident;
		}

		String currClassName = currClass.getClassName();
		int currDotCount = currClassName.length()
				- currClassName.replace(".", "").length();
		int currDollarCount = currClassName.length()
				- currClassName.replace("$", "").length();
		int currCount = currDotCount + currDollarCount;

		while (prevCount > currCount) {
			String tabs = getTabs(--prevCount);
			sbContent.appendln(tabs + "}");
		}

		boolean isNested = isNested(currClass);

		if (!isNested) {
			throw new UnsupportedOperationException("TODO: implement");
			// String prevClassName = prevClass.getClassName();
			// int dotCount = prevClassName.length() -
			// prevClassName.replace(".", "").length();
			// int dollarCount = prevClassName.length() -
			// prevClassName.replace("$", "").length();
			// ident = dotCount + dollarCount;
			//
			// String[] prevParts = prevClassName.replace('$',
			// '.').split("\\.");
			// String[] currParts = currClass.getClassName().replace('$',
			// '.').split("\\.");
			//
			// int diffIdx = 0;
			// while ((diffIdx < prevParts.length) && (diffIdx <
			// currParts.length) &&
			// prevParts[diffIdx].equals(currParts[diffIdx])) {
			// ++diffIdx;
			// }
			//
			// int count = prevParts.length - diffIdx - 1;
			// while (count-- > 0) {
			// String tabs = getTabs(--ident);
			// ps.println(tabs + "}");
			// }
		}

		return ident;
	}

	private int openPackage(JavaClass prevClass, JavaClass currClass) {
		int ident = 0;
		// String prevPackage = getPackageName(prevClass);
		// String currPackage = getPackageName(currClass);
		//
		String prevClassName = (prevClass != null) ? prevClass.getClassName()
				: "";
		// int countDots = prevClassName.length() - prevClassName.replace(".",
		// "").length();
		// int countDollars = prevClassName.length() -
		// prevClassName.replace("$", "").length();
		// int count = countDots + countDollars;
		//
		String[] prevParts = prevClassName.replace('$', '.').split("\\.");
		String[] currParts = currClass.getClassName().replace('$', '.')
				.split("\\.");

		int diffIdx = 0;
		while ((diffIdx < prevParts.length) && (diffIdx < currParts.length)
				&& prevParts[diffIdx].equals(currParts[diffIdx])) {
			++diffIdx;
		}

		ident = diffIdx;
		for (int idx = diffIdx; idx < currParts.length - 1; idx++) {
			++ident;
			String tabs = getTabs(idx);
			if (idx == 0) {
				sbContent.append(tabs + "declare ");
			} else {
				sbContent.append(tabs + "export ");
			}
			sbContent.appendln("module " + currParts[idx] + " {");
		}

		if (isNested(currClass) && (prevParts.length < currParts.length)) {
			String tabs = getTabs(prevParts.length - 1);
			sbContent.appendln(tabs + "export module "
					+ prevParts[prevParts.length - 1] + " {");
		}

		// boolean isNested = currPackage.startsWith(prevPackage);
		//
		// if (isNested) {
		//
		// } else {
		// String[] prevParts = prevPackage.split("\\.");
		// String[] currParts = prevPackage.split("\\.");
		// int diffIdx = 0;
		// while ((diffIdx < prevParts.length) && (diffIdx < currParts.length)
		// && prevParts[diffIdx].equals(currParts[diffIdx])) {
		// ++diffIdx;
		// }
		// }
		return ident;
	}

	private String getTabs(int count) {
		String tabs = new String(new char[count]).replace("\0", "\t");
		return tabs;
	}

	private boolean isNested(JavaClass javaClass) {
		boolean isNested = javaClass.getClassName().contains("$");
		return isNested;
	}

	private String getPackageName(JavaClass javaClass) {
		String name = (javaClass != null) ? javaClass.getPackageName() : "";
		return name;
	}

	private void processMemberScopes(Iterator<MemberScope> it) {
		while (it.hasNext()) {
			MemberScope ms = it.next();
			processMember(ms);
		}
	}

	private void processMember(MemberScope ms) {
		if (ms instanceof MethodScope) {
			processMethod((MethodScope) ms);
		} else if (ms instanceof FieldScope) {
			processField((FieldScope) ms);
		} else {
			throw new IllegalArgumentException("ms");
		}
	}

	private ClassScope prevCs = null;
	private Set<String> baseMethodNames;
	private List<Method> baseMethods;
	private Map<String, Method> ms1;

	private void processMethod(MethodScope ms) {
		ClassScope cs = (ClassScope) ms.getParent();
		assert (cs != null);
		
		JavaClass clazz = cs.getJavaClass();

		if (cs != prevCs) {
			ms1 = new HashMap<String, Method>();
			ArrayList<MethodScope> currentScopeMethods = new ArrayList<MethodScope>();
			for (Iterator<MemberScope> it = cs.iterator(); it.hasNext();) {
				MemberScope memberScope = it.next();
				if (memberScope instanceof MethodScope) {
					currentScopeMethods.add((MethodScope) memberScope);
				}
			}

			baseMethodNames = new HashSet<String>();
			baseMethods = new ArrayList<Method>();
			String scn = clazz.getSuperclassName();
			JavaClass currClass = ClassRepo.findClass(scn);
			assert currClass != null : "javaClass=" + clazz.getClassName()
					+ " scn=" + scn;

			while (true) {
				for (Method m : currClass.getMethods()) {
					if (!m.isSynthetic() && (m.isPublic() || m.isProtected())) {
						baseMethods.add(m);
						baseMethodNames.add(m.getName());
					}
				}

				if (currClass.getClassName().equals("java.lang.Object"))
					break;

				scn = currClass.getSuperclassName();
				JavaClass baseClass = ClassRepo.findClass(scn);
				assert baseClass != null : "baseClass="
						+ currClass.getClassName() + " scn=" + scn;
				currClass = baseClass;
			}
			prevCs = cs;
		}

		String tabs = getTabs(this.ident + 1);

		Method m = ms.getMethod();
		String currMethodSig = getMethodFullSignature(m);

		if (!ms1.containsKey(currMethodSig)) {
			ms1.put(currMethodSig, m);
		}
		String name = m.getName();
		if (baseMethodNames.contains(name)) {
			for (Method bm : baseMethods) {
				if (bm.getName().equals(name)) {
					String sig = getMethodFullSignature(bm);
					if (!ms1.containsKey(sig)) {
						ms1.put(sig, bm);
						// print
						sbContent.append(tabs + "public ");
						if (bm.isStatic()) {
							sbContent.append("static ");
						}
						sbContent.append(getMethodName(bm) + getMethodParamSignature(clazz, bm));
						String bmSig = "";
						if (!isConstructor(bm)) {
							bmSig += ": " + getTypeScriptTypeFromJavaType(clazz, bm.getReturnType());
						}
						sbContent.appendln(bmSig + ";");

					}
				}
			}
		}

		sbContent.append(tabs + "public ");
		if (m.isStatic()) {
			sbContent.append("static ");
		}
		sbContent.append(getMethodName(m) + getMethodParamSignature(clazz, m));
		String mSig = "";
		if (!isConstructor(m)) {
			mSig += ": " + getTypeScriptTypeFromJavaType(clazz, m.getReturnType());
		}
		sbContent.appendln(mSig + ";");
	}

	private void processField(FieldScope fs) {
		Field f = fs.getField();
		ClassScope cs = (ClassScope) fs.getParent();
		JavaClass clazz = cs.getJavaClass();
		
		String tabs = getTabs(this.ident + 1);
		sbContent.append(tabs + "public ");
		if (f.isStatic()) {
			sbContent.append("static ");
		}
		sbContent.appendln(f.getName() + ": " + getTypeScriptTypeFromJavaType(clazz, f.getType()) + ";");
	}

	private String getTypeScriptTypeFromJavaType(JavaClass clazz, Type type) {
		String tsType;
		String typeSig = type.getSignature();
		
		if(clazz.getClassName().equals("java.util.concurrent.ThreadPoolExecutor")) {
			int a = 5;
		}

		switch (typeSig) {
		case "V":
			tsType = "void";
			break;
		case "C":
			tsType = "string";
			break;
		case "Z":
			tsType = "boolean";
			break;
		case "B":
		case "S":
		case "I":
		case "J":
		case "F":
		case "D":
			tsType = "number";
			break;
		case "Ljava/lang/CharSequence;":
		case "Ljava/lang/String;":
			tsType = "string";
			break;
		default:
			StringBuilder sb = new StringBuilder();
			convertToTypeScriptType(type, sb);
			tsType = sb.toString();
		}

		return tsType;
	}

	private void convertToTypeScriptType(Type type, StringBuilder tsType) {
		boolean isPrimitive = type instanceof BasicType;
		boolean isArray = type instanceof ArrayType;
		boolean isObjectType = type instanceof ObjectType;
		
		if (isPrimitive)
		{
			if (type.equals(Type.BOOLEAN))
			{
				tsType.append("boolean");
			}
			else if (type.equals(Type.BYTE) || type.equals(Type.SHORT)
					|| type.equals(Type.INT) || type.equals(Type.LONG)
					|| type.equals(Type.FLOAT) || type.equals(Type.DOUBLE))
			{
				tsType.append("number");
			}
			else if (type.equals(Type.CHAR))
			{
				tsType.append("string");
			}
			else
			{
				throw new RuntimeException("Unexpected type=" + type.getSignature());
			}
		}
		else if (isArray)
		{
			tsType.append("native.Array<");
			Type elementType = ((ArrayType)type).getElementType();
			convertToTypeScriptType(elementType, tsType);
			tsType.append(">");
		}
		else if (type.equals(Type.STRING))
		{
			tsType.append("string");
		}
		else if (isObjectType)
		{
			ObjectType objType = (ObjectType)type;
			String typeName = objType.getClassName();
			if (typeName.contains("$"))
			{
				typeName = typeName.replaceAll("\\$", "\\.");
			}
			tsType.append(typeName);
			addReference(type);
		}
		else
		{
			throw new RuntimeException("Unhandled type=" + type.getSignature());
		}
	}

	private String getMethodFullSignature(Method m) {
		String sig = m.getName() + m.getSignature();
		return sig;
	}
	
	private String getMethodParamSignature(JavaClass clazz, Method m) {
		StringBuilder sb = new StringBuilder();
		sb.append("(");
		int idx = 0;
		
		for (Type type: m.getArgumentTypes()) {
			if (idx > 0)
			{
				sb.append(", ");
			}
			sb.append("param");
			sb.append(idx++);
			sb.append(": ");
			addReference(type);
			String paramTypeName = getTypeScriptTypeFromJavaType(clazz, type);
			sb.append(paramTypeName);
		}
		sb.append(")");
		String sig = sb.toString();
		return sig;
	}
	
	// todo: plamen5kov: split to:
	// m.getArgumentTypes() -> getGenericArgumentTypes() << pass special type parsed from generic's
	// m.getReturnType() -> getGenericReturnType() << pass special type parsed from generic's
	
	private String getMethodSignatureG(Method m) {
		Attribute[] s = m.getAttributes();
		for(Attribute a : s) {
			if(a instanceof Signature) {
//				System.out.println(clazz.getClassName());
//				System.out.println("\t" + m.getName());
//				System.out.println("\t" + ((Signature) a).getSignature());
	
				
				String methodSignature = ((Signature) a).getSignature();

				String pattern = "([<>\\w/;:\\[\\]\\*\\+\\-\\$]*)(\\([<>\\w/;:\\[\\]\\*\\+\\-\\$]*\\))([<>\\w/;:\\[\\]\\*\\+\\-\\$]*)";
				Pattern r = Pattern.compile(pattern);
				Matcher match = r.matcher(methodSignature);
				String genericDeclaration = "";
				String parameters = "";
				String returnType = "";
				while(match.find()) {
					genericDeclaration = match.group(1);
					parameters = match.group(2);
					returnType = match.group(3);

					System.out.println("=================");
					System.out.println(clazz.getClassName());
					System.out.println(m.getName());
					System.out.println(genericDeclaration);
					System.out.println(parameters);
					System.out.println(returnType);
					System.out.println("=================");
				}
			}
		}
	}
	
	private void addReference(Type type)
	{
		boolean isObjectType = type instanceof ObjectType;
		if (isObjectType) {
			ObjectType objType = (ObjectType)type;
			String typeName = objType.getClassName();
			if (!typeName.equals(currentFileClassname)) {
				boolean isNested = typeName.contains("$");
				if (!isNested) {
					references.add(typeName);
				}
			}
		}
	}

	private boolean isConstructor(Method m) {
		return m.getName().equals("<init>");
	}

	private String getMethodName(Method m) {
		String name = m.getName();

		if (isConstructor(m)) {
			name = "constructor";
		}

		return name;
	}
}
