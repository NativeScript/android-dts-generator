package com.telerik.dts;

import kotlin.Metadata;
import kotlin.metadata.Attributes;
import kotlin.metadata.KmClass;
import kotlin.metadata.KmDeclarationContainer;
import kotlin.metadata.KmFunction;
import kotlin.metadata.KmProperty;
import kotlin.metadata.KmPropertyAccessorAttributes;
import kotlin.metadata.Visibility;
import kotlin.metadata.jvm.JvmExtensionsKt;
import kotlin.metadata.jvm.JvmMetadataUtil;
import kotlin.metadata.jvm.JvmMethodSignature;
import kotlin.metadata.jvm.KotlinClassMetadata;

import org.apache.bcel.classfile.AnnotationEntry;
import org.apache.bcel.classfile.ArrayElementValue;
import org.apache.bcel.classfile.ElementValue;
import org.apache.bcel.classfile.ElementValuePair;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.SimpleElementValue;

/**
 * Kotlin visibility of a class and its members, read from the @kotlin.Metadata annotation.
 *
 * The JVM has no `internal` modifier — Kotlin compiles internal declarations down to public ones —
 * so without consulting this annotation an internal type is indistinguishable from public API.
 */
public class KotlinVisibility {

    private static final String KOTLIN_METADATA_ANNOTATION = "Lkotlin/Metadata;";

    static final KotlinVisibility NOT_KOTLIN = new KotlinVisibility(null, false);

    private final KmDeclarationContainer container;
    private final boolean internalClass;

    private KotlinVisibility(KmDeclarationContainer container, boolean internalClass) {
        this.container = container;
        this.internalClass = internalClass;
    }

    public static KotlinVisibility of(JavaClass clazz) {
        AnnotationEntry annotation = findMetadataAnnotation(clazz);
        if (annotation == null) {
            return NOT_KOTLIN;
        }

        KotlinClassMetadata metadata;
        try {
            // readLenient accepts metadata from any Kotlin newer than the one bundled here;
            // readStrict would reject those classes outright.
            metadata = KotlinClassMetadata.readLenient(toMetadata(annotation));
        } catch (Exception e) {
            return NOT_KOTLIN;
        }

        if (metadata instanceof KotlinClassMetadata.Class) {
            KmClass kmClass = ((KotlinClassMetadata.Class) metadata).getKmClass();
            return new KotlinVisibility(kmClass, Attributes.getVisibility(kmClass) == Visibility.INTERNAL);
        }
        if (metadata instanceof KotlinClassMetadata.FileFacade) {
            return new KotlinVisibility(((KotlinClassMetadata.FileFacade) metadata).getKmPackage(), false);
        }
        if (metadata instanceof KotlinClassMetadata.MultiFileClassPart) {
            return new KotlinVisibility(((KotlinClassMetadata.MultiFileClassPart) metadata).getKmPackage(), false);
        }

        return NOT_KOTLIN;
    }

    public boolean isInternalClass() {
        return internalClass;
    }

    public boolean isInternalMember(String name, String descriptor) {
        if (container == null) {
            return false;
        }

        for (KmFunction function : container.getFunctions()) {
            if (matches(JvmExtensionsKt.getSignature(function), name, descriptor)) {
                return Attributes.getVisibility(function) == Visibility.INTERNAL;
            }
        }

        // Property accessors are absent from getFunctions(), and an accessor may also narrow the
        // property's own visibility, as in `var x: String = "" ; internal set`.
        for (KmProperty property : container.getProperties()) {
            if (matches(JvmExtensionsKt.getGetterSignature(property), name, descriptor)) {
                return isInternal(property, property.getGetter());
            }
            if (matches(JvmExtensionsKt.getSetterSignature(property), name, descriptor)) {
                return isInternal(property, property.getSetter());
            }
        }

        return false;
    }

    private static boolean isInternal(KmProperty property, KmPropertyAccessorAttributes accessor) {
        if (Attributes.getVisibility(property) == Visibility.INTERNAL) {
            return true;
        }
        return accessor != null && Attributes.getVisibility(accessor) == Visibility.INTERNAL;
    }

    private static boolean matches(JvmMethodSignature signature, String name, String descriptor) {
        return signature != null && signature.getName().equals(name) && signature.getDescriptor().equals(descriptor);
    }

    private static AnnotationEntry findMetadataAnnotation(JavaClass clazz) {
        AnnotationEntry[] annotations = clazz.getAnnotationEntries();
        if (annotations == null) {
            return null;
        }

        for (AnnotationEntry annotation : annotations) {
            if (KOTLIN_METADATA_ANNOTATION.equals(annotation.getAnnotationType())) {
                return annotation;
            }
        }

        return null;
    }

    private static Metadata toMetadata(AnnotationEntry annotation) {
        Integer kind = 1;
        int[] metadataVersion = new int[0];
        String[] data1 = new String[0];
        String[] data2 = new String[0];
        String extraString = "";
        String packageName = "";
        Integer extraInt = 0;

        ElementValuePair[] pairs = annotation.getElementValuePairs();
        if (pairs != null) {
            for (ElementValuePair pair : pairs) {
                ElementValue value = pair.getValue();
                switch (pair.getNameString()) {
                    case "k":
                        kind = ((SimpleElementValue) value).getValueInt();
                        break;
                    case "mv":
                        metadataVersion = readIntArray(value);
                        break;
                    case "d1":
                        data1 = readStringArray(value);
                        break;
                    case "d2":
                        data2 = readStringArray(value);
                        break;
                    case "xs":
                        extraString = ((SimpleElementValue) value).getValueString();
                        break;
                    case "pn":
                        packageName = ((SimpleElementValue) value).getValueString();
                        break;
                    case "xi":
                        extraInt = ((SimpleElementValue) value).getValueInt();
                        break;
                    default:
                        break;
                }
            }
        }

        return JvmMetadataUtil.Metadata(kind, metadataVersion, data1, data2, extraString, packageName, extraInt);
    }

    private static int[] readIntArray(ElementValue value) {
        ElementValue[] values = ((ArrayElementValue) value).getElementValuesArray();
        int[] result = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            result[i] = ((SimpleElementValue) values[i]).getValueInt();
        }
        return result;
    }

    private static String[] readStringArray(ElementValue value) {
        ElementValue[] values = ((ArrayElementValue) value).getElementValuesArray();
        String[] result = new String[values.length];
        for (int i = 0; i < values.length; i++) {
            result[i] = ((SimpleElementValue) values[i]).getValueString();
        }
        return result;
    }
}
