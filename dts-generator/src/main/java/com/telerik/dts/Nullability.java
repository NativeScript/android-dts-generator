package com.telerik.dts;

import org.apache.bcel.classfile.AnnotationEntry;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.classfile.ParameterAnnotationEntry;
import org.apache.bcel.generic.Type;

/**
 * Reads @Nullable / @NonNull off bytecode. Both the platform's android.annotation package and
 * androidx.annotation are retained in class files, so the simple name is enough to recognise them
 * and no dependency on either library is needed.
 *
 * Most of the API carries neither annotation, which means unknown rather than non-null.
 */
public final class Nullability {

    private Nullability() {
    }

    public static boolean isNullable(AnnotationEntry[] annotations) {
        return hasSimpleName(annotations, "Nullable;");
    }

    public static boolean isNonNull(AnnotationEntry[] annotations) {
        return hasSimpleName(annotations, "NonNull;");
    }

    public static AnnotationEntry[] parameterAnnotations(Method method, int index) {
        ParameterAnnotationEntry[] parameters = method.getParameterAnnotationEntries();
        if (parameters == null || index >= parameters.length || parameters[index] == null) {
            return null;
        }
        return parameters[index].getAnnotationEntries();
    }

    /** null is only expressible for reference types; a primitive never needs the union. */
    public static boolean isReferenceType(Type type) {
        String signature = type.getSignature();
        return signature.startsWith("L") || signature.startsWith("[");
    }

    private static boolean hasSimpleName(AnnotationEntry[] annotations, String suffix) {
        if (annotations == null) {
            return false;
        }

        for (AnnotationEntry annotation : annotations) {
            if (annotation.getAnnotationType().endsWith(suffix)) {
                return true;
            }
        }

        return false;
    }
}
