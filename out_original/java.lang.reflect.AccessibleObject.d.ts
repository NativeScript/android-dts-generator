/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class AccessibleObject {
				public constructor();
				public isAccessible(): boolean;
				public setAccessible(param0: boolean): void;
				public static setAccessible(param0: native.Array<java.lang.reflect.AccessibleObject>, param1: boolean): void;
				public isAnnotationPresent(param0: java.lang.Class): boolean;
				public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public getAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
			}
		}
	}
}
