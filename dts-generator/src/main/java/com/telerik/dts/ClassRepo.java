package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ClassRepo {
	private ClassRepo() {
	}

	private static ArrayList<ClassMapProvider> cachedProviders = new ArrayList<ClassMapProvider>();
	private static List<String> allSortedClasses = new ArrayList<String>();

	public static void cacheJarFile(ClassMapProvider classMapProvider) {
		for (String className : classMapProvider.getClassMap().keySet()) {
			for (ClassMapProvider cachedProvider : cachedProviders) {
				JavaClass clazz = cachedProvider.getClassMap().get(className);
				if (clazz != null) {
					String errMsg = "Class " + className + " conflict: "
							+ classMapProvider.getPath() + " and " + cachedProvider.getPath();
					throw new IllegalArgumentException(errMsg);
				}
			}
		}
		cachedProviders.add(classMapProvider);
	}

	public static void sortCachedProviders() {
		for(ClassMapProvider cmp : cachedProviders) {
			allSortedClasses.addAll(cmp.getClassMap().keySet());
		}
		Collections.sort(allSortedClasses, new Comparator<String>() {
			@Override
			public int compare(String className1, String className2) {
				if(className1.startsWith(className2)) {
					return 1;
				}
				if(className2.startsWith(className1)) {
					return  -1;
				}
				return className1.compareTo(className2);
			}
		});
	}

	public static JavaClass findClass(String className) {
		JavaClass clazz = null;
		for (ClassMapProvider classMapProvider : cachedProviders) {
			clazz = classMapProvider.getClassMap().get(className);
			if (clazz != null) {
				break;
			}
		}
		return clazz;
	}

	public static String[] getClassNames() {
		ArrayList<String> names = new ArrayList<String>();
		for (ClassMapProvider classMapProvider : cachedProviders) {
			for (String className : classMapProvider.getClassMap().keySet()) {
				names.add(className);
			}
		}
		String[] arrClassNames = names.toArray(new String[names.size()]);
		Arrays.sort(arrClassNames);
		return arrClassNames;
	}
}
