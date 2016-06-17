/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.CollationKey.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module text {
		export class Collator {
			public constructor();
			public clone(): java.lang.Object;
			public compare(param0: java.lang.Object, param1: java.lang.Object): number;
			public compare(param0: string, param1: string): number;
			public equals(param0: java.lang.Object): boolean;
			public equals(param0: string, param1: string): boolean;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public getCollationKey(param0: string): java.text.CollationKey;
			public getDecomposition(): number;
			public static getInstance(): java.text.Collator;
			public static getInstance(param0: java.util.Locale): java.text.Collator;
			public getStrength(): number;
			public hashCode(): number;
			public setDecomposition(param0: number): void;
			public setStrength(param0: number): void;
			public static CANONICAL_DECOMPOSITION: number;
			public static FULL_DECOMPOSITION: number;
			public static IDENTICAL: number;
			public static NO_DECOMPOSITION: number;
			public static PRIMARY: number;
			public static SECONDARY: number;
			public static TERTIARY: number;
		}
	}
}
