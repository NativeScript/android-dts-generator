/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Package.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Constructor.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.lang.reflect.TypeVariable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />

declare module java {
	export module lang {
		export class Class {
			public static forName(param0: string): java.lang.Class;
			public static forName(param0: string, param1: boolean, param2: java.lang.ClassLoader): java.lang.Class;
			public getClasses(): native.Array<java.lang.Class>;
			public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
			public getAnnotations(): native.Array<java.lang.annotation.Annotation>;
			public getCanonicalName(): string;
			public getClassLoader(): java.lang.ClassLoader;
			public getComponentType(): java.lang.Class;
			public getConstructor(param0: native.Array<java.lang.Class>): java.lang.reflect.Constructor;
			public getDeclaredConstructor(param0: native.Array<java.lang.Class>): java.lang.reflect.Constructor;
			public getConstructors(): native.Array<java.lang.reflect.Constructor>;
			public getDeclaredConstructors(): native.Array<java.lang.reflect.Constructor>;
			public getDeclaredMethod(param0: string, param1: native.Array<java.lang.Class>): java.lang.reflect.Method;
			public getMethod(param0: string, param1: native.Array<java.lang.Class>): java.lang.reflect.Method;
			public getDeclaredMethods(): native.Array<java.lang.reflect.Method>;
			public getMethods(): native.Array<java.lang.reflect.Method>;
			public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
			public getDeclaredClasses(): native.Array<java.lang.Class>;
			public getDeclaredField(param0: string): java.lang.reflect.Field;
			public getDeclaredFields(): native.Array<java.lang.reflect.Field>;
			public getDeclaringClass(): java.lang.Class;
			public getEnclosingClass(): java.lang.Class;
			public getEnclosingConstructor(): java.lang.reflect.Constructor;
			public getEnclosingMethod(): java.lang.reflect.Method;
			public getEnumConstants(): native.Array<java.lang.Object>;
			public getField(param0: string): java.lang.reflect.Field;
			public getFields(): native.Array<java.lang.reflect.Field>;
			public getGenericInterfaces(): native.Array<java.lang.reflect.Type>;
			public getGenericSuperclass(): java.lang.reflect.Type;
			public getInterfaces(): native.Array<java.lang.Class>;
			public getModifiers(): number;
			public getName(): string;
			public getSimpleName(): string;
			public getProtectionDomain(): java.security.ProtectionDomain;
			public getResource(param0: string): java.net.URL;
			public getResourceAsStream(param0: string): java.io.InputStream;
			public getSigners(): native.Array<java.lang.Object>;
			public getSuperclass(): java.lang.Class;
			public getTypeParameters(): native.Array<java.lang.reflect.TypeVariable>;
			public isAnnotation(): boolean;
			public isAnnotationPresent(param0: java.lang.Class): boolean;
			public isAnonymousClass(): boolean;
			public isArray(): boolean;
			public isAssignableFrom(param0: java.lang.Class): boolean;
			public isEnum(): boolean;
			public isInstance(param0: java.lang.Object): boolean;
			public isInterface(): boolean;
			public isLocalClass(): boolean;
			public isMemberClass(): boolean;
			public isPrimitive(): boolean;
			public isSynthetic(): boolean;
			public newInstance(): java.lang.Object;
			public toString(): string;
			public getPackage(): java.lang.Package;
			public desiredAssertionStatus(): boolean;
			public asSubclass(param0: java.lang.Class): java.lang.Class;
			public cast(param0: java.lang.Object): java.lang.Object;
		}
	}
}
