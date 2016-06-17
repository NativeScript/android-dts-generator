/// <reference path="./_helpers.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class Modifier {
				public constructor();
				public static classModifiers(): number;
				public static constructorModifiers(): number;
				public static fieldModifiers(): number;
				public static interfaceModifiers(): number;
				public static methodModifiers(): number;
				public static isAbstract(param0: number): boolean;
				public static isFinal(param0: number): boolean;
				public static isInterface(param0: number): boolean;
				public static isNative(param0: number): boolean;
				public static isPrivate(param0: number): boolean;
				public static isProtected(param0: number): boolean;
				public static isPublic(param0: number): boolean;
				public static isStatic(param0: number): boolean;
				public static isStrict(param0: number): boolean;
				public static isSynchronized(param0: number): boolean;
				public static isTransient(param0: number): boolean;
				public static isVolatile(param0: number): boolean;
				public toString(): string;
				public static toString(param0: number): string;
				public static ABSTRACT: number;
				public static FINAL: number;
				public static INTERFACE: number;
				public static NATIVE: number;
				public static PRIVATE: number;
				public static PROTECTED: number;
				public static PUBLIC: number;
				public static STATIC: number;
				public static STRICT: number;
				public static SYNCHRONIZED: number;
				public static TRANSIENT: number;
				public static VOLATILE: number;
			}
		}
	}
}
