package com.telerik.java.api.bcel;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.generic.Type;

public class Test {
	public void go() {
		ScopeDispenser sd = null;
		try {
			sd = new ScopeDispenser(
					"C:/Work/NativeScript/android-metadata-generator/jars");
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

	private JavaClass prevClass;

	private void processFileScopes(Iterator<FileScope> it) {
		while (it.hasNext()) {
			this.prevClass = null;
			FileScope fs = it.next();
			ps = null;
			try {
				File[] files = fs.getFiles();
				if ((files != null) && (files.length > 0)) {
					JavaClass clazz = ClassRepo.loadClass(files[0]);
					ps = new PrintStream(new File(
							"C:/Work/NativeScript/NativeScript/dtsfiles",
							clazz.getClassName() + ".d.ts"));
					processClassScopes(fs.iterator(), ps);
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

	private void processClassScopes(Iterator<ClassScope> it, PrintStream ps) {
		while (it.hasNext()) {
			ClassScope cs = it.next();
			JavaClass currClass = cs.getJavaClass();
			//
			this.ident = closePackage(this.prevClass, currClass);
			this.ident = openPackage(this.prevClass, currClass);
			//
			String tabs = getTabs(this.ident);
			ps.println(tabs + "export class " + getSimpleClassname(currClass)
					+ " {");
			processMemberScopes(cs.iterator());
			ps.println(tabs + "}");
			this.prevClass = currClass;
		}
		closePackage(prevClass, null);
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
				ps.println(tabs + "}");
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
			ps.println(tabs + "}");
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
				ps.print(tabs + "declare ");
			} else {
				ps.print(tabs + "export ");
			}
			ps.println("module " + currParts[idx] + " {");
		}

		if (isNested(currClass) && (prevParts.length < currParts.length)) {
			String tabs = getTabs(prevParts.length - 1);
			ps.println(tabs + "export module "
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

		if (cs != prevCs) {
			ms1 = new HashMap<String, Method>();
			ArrayList<MethodScope> currentScopeMethods = new ArrayList<MethodScope>();
			for (Iterator<MemberScope> it = cs.iterator(); it.hasNext();) {
				MemberScope memberScope = it.next();
				if (memberScope instanceof MethodScope) {
					currentScopeMethods.add((MethodScope) memberScope);
				}
			}

			JavaClass clazz = cs.getJavaClass();
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
						ps.print(tabs + "public ");
						if (bm.isStatic()) {
							ps.print("static ");
						}
						ps.println(bm.getName() + "(): "
								+ getTypeScriptTypeFromJavaType(bm.getReturnType()) + ";");

					}
				}
			}
		}

		ps.print(tabs + "public ");
		if (m.isStatic()) {
			ps.print("static ");
		}
		ps.println(m.getName() + "(): "
				+ getTypeScriptTypeFromJavaType(m.getReturnType()) + ";");
	}

	private void processField(FieldScope fs) {
		Field f = fs.getField();
		String tabs = getTabs(this.ident + 1);
		ps.print(tabs + "public ");
		if (f.isStatic()) {
			ps.print("static ");
		}
		ps.println(f.getName() + ": "
				+ getTypeScriptTypeFromJavaType(f.getType()) + ";");
	}

	private String getTypeScriptTypeFromJavaType(Type t) {
		String tsType;
		String type = t.getSignature();

		switch (type) {
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

	private void convertToTypeScriptType(String type, StringBuilder tsType) {
		switch (type) {
		case "C":
			tsType.append("string");
			break;
		case "Z":
			tsType.append("boolean");
			break;
		case "B":
		case "S":
		case "I":
		case "J":
		case "F":
		case "D":
			tsType.append("number");
			break;
		case "java.lang.CharSequence":
		case "java.lang.String":
			tsType.append("string");
			break;
		default:
			if (type.charAt(0) == '[') {
				tsType.append("native.Array<");
				convertToTypeScriptType(type.substring(1), tsType);
				tsType.append(">");
			} else {
				String ts;
				int idx = type.indexOf('<');
				if (idx > 0) {
					ts = type.substring(1, idx).replaceAll("/", ".")
							.replaceAll("\\$", "\\.").replaceAll(";", "");
					tsType.append(ts);
				} else {
					ts = type.substring(1).replaceAll("/", ".")
							.replaceAll("\\$", "\\.").replaceAll(";", "");
					tsType.append(ts);
				}
			}
		}
	}

	private String getMethodFullSignature(Method m) {
		String sig = m.getName() + m.getSignature();
		return sig;
	}

}
