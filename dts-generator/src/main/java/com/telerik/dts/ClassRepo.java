package com.telerik.dts;

import org.apache.bcel.classfile.JavaClass;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;

public class ClassRepo {
	private ClassRepo() {
	}

	private static ArrayList<ClassMapProvider> cachedProviders = new ArrayList<ClassMapProvider>();
	private static HashSet<String> classesSet = new HashSet<>();
	private static List<String> sortedClasses;
	private static int traversedFilesIdx = 0;

	public static void cacheJarFile(ClassMapProvider classMapProvider) {
		for (String className : classMapProvider.getClassMap().keySet()) {
			for (ClassMapProvider cachedProvider : cachedProviders) {
				JavaClass clazz = cachedProvider.getClassMap().get(className);
			}
		}

		cachedProviders.add(classMapProvider);
	}

	public static void sortCachedProviders() {
		for(ClassMapProvider cmp : cachedProviders) {
			classesSet.addAll(cmp.getClassMap().keySet());
		}

		sortedClasses = new ArrayList<>(classesSet);

		Collections.sort(sortedClasses, (className1, className2) -> {
				if(className1.startsWith(className2)) {
					return 1;
				}
				if(className2.startsWith(className1)) {
					return  -1;
				}
				return className1.compareTo(className2);
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

	public static List<JavaClass> getNextClassGroup() {
		ArrayList<JavaClass> lst = new ArrayList<JavaClass>();
		boolean first = true;

		while ((traversedFilesIdx < sortedClasses.size()) && keepGoing(first)) {
			JavaClass f = getCurrentJavaClass();
			String name = f.getClassName();
			if (!name.contains("$0") && !name.contains("$1")
					&& !name.contains("$2") && !name.contains("$3")
					&& !name.contains("$4") && !name.contains("$5")
					&& !name.contains("$6") && !name.contains("$7")
					&& !name.contains("$8") && !name.contains("$9")
					&& !name.contains("$string")) {
				lst.add(f);
			}
			first = false;
			++traversedFilesIdx;
		}

		return lst;
	}

	public static boolean hasNext() {
		return traversedFilesIdx < sortedClasses.size();
	}

	private static JavaClass getCurrentJavaClass() {
		String currentClassName = sortedClasses.get(traversedFilesIdx);
		return ClassRepo.findClass(currentClassName);
	}

	private static boolean keepGoing(boolean first) {
		JavaClass file = getCurrentJavaClass();
		boolean isNestedClass = file.getClassName().contains("$");
		boolean res = first ? !isNestedClass : isNestedClass;
		return res;
	}
}
