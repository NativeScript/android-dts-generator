/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export module annotation {
			export class RetentionPolicy {
				public static values(): native.Array<java.lang.annotation.RetentionPolicy>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.lang.annotation.RetentionPolicy;
				public static CLASS: java.lang.annotation.RetentionPolicy;
				public static RUNTIME: java.lang.annotation.RetentionPolicy;
				public static SOURCE: java.lang.annotation.RetentionPolicy;
			}
		}
	}
}
