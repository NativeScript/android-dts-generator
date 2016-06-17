/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class AnnotatedElement {
				public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
				public getAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public isAnnotationPresent(param0: java.lang.Class): boolean;
			}
		}
	}
}
