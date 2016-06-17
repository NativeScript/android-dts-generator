/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.lang.reflect.TypeVariable.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class Method {
				public getAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public getModifiers(): number;
				public isVarArgs(): boolean;
				public isBridge(): boolean;
				public isSynthetic(): boolean;
				public getName(): string;
				public getDeclaringClass(): java.lang.Class;
				public getExceptionTypes(): native.Array<java.lang.Class>;
				public getParameterTypes(): native.Array<java.lang.Class>;
				public getReturnType(): java.lang.Class;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toGenericString(): string;
				public getTypeParameters(): native.Array<java.lang.reflect.TypeVariable>;
				public getGenericParameterTypes(): native.Array<java.lang.reflect.Type>;
				public isAnnotationPresent(param0: java.lang.Class): boolean;
				public getGenericExceptionTypes(): native.Array<java.lang.reflect.Type>;
				public getGenericReturnType(): java.lang.reflect.Type;
				public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
				public getParameterAnnotations(): native.Array<native.Array<java.lang.annotation.Annotation>>;
				public getDefaultValue(): java.lang.Object;
				public invoke(param0: java.lang.Object, param1: native.Array<java.lang.Object>): java.lang.Object;
				public toString(): string;
			}
		}
	}
}
