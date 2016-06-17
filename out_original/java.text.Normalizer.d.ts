/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module text {
		export class Normalizer {
			public static isNormalized(param0: string, param1: java.text.Normalizer.Form): boolean;
			public static normalize(param0: string, param1: java.text.Normalizer.Form): string;
		}
		export module Normalizer {
			export class Form {
				public static values(): native.Array<java.text.Normalizer.Form>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.text.Normalizer.Form;
				public static NFC: java.text.Normalizer.Form;
				public static NFD: java.text.Normalizer.Form;
				public static NFKC: java.text.Normalizer.Form;
				public static NFKD: java.text.Normalizer.Form;
			}
		}
	}
}
