/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export module annotation {
			export class ElementType {
				public static values(): native.Array<java.lang.annotation.ElementType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.lang.annotation.ElementType;
				public static ANNOTATION_TYPE: java.lang.annotation.ElementType;
				public static CONSTRUCTOR: java.lang.annotation.ElementType;
				public static FIELD: java.lang.annotation.ElementType;
				public static LOCAL_VARIABLE: java.lang.annotation.ElementType;
				public static METHOD: java.lang.annotation.ElementType;
				public static PACKAGE: java.lang.annotation.ElementType;
				public static PARAMETER: java.lang.annotation.ElementType;
				public static TYPE: java.lang.annotation.ElementType;
			}
		}
	}
}
