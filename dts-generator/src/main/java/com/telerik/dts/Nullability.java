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

    /** The annotations on the parameter at a descriptor index. */
    public static AnnotationEntry[] parameterAnnotations(Method method, int index) {
        ParameterAnnotationEntry[] parameters = method.getParameterAnnotationEntries();
        if (parameters == null) {
            return null;
        }
        // javac can leave synthetic leading parameters, such as an inner class constructor's outer
        // instance, out of the annotations, so the entries line up with the descriptor's tail.
        int entry = index - Math.max(0, method.getArgumentTypes().length - parameters.length);
        if (entry < 0 || entry >= parameters.length || parameters[entry] == null) {
            return null;
        }
        return parameters[entry].getAnnotationEntries();
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
