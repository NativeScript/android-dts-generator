package com.telerik.java.api.compiler.helper;

/**
 * Encapsulates the utility methods of verification module
 */
public class CodeAnalyzerUtil {

    /**
     * Returns the simple name of an element from its fully qualified name
     * @param qualifiedName Fully qualified name of the element
     * @return simpleName Simple name of the element
     */
    public static String getSimpleNameFromQualifiedName(String qualifiedName) {

        String simpleName = null;
        if (qualifiedName != null && qualifiedName.length() > 0) {
            simpleName = qualifiedName.substring(1 + qualifiedName.
                         lastIndexOf("."), qualifiedName.length());
        }
        return simpleName;
    }
}
