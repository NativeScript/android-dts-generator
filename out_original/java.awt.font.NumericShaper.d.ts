/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module awt {
		export module font {
			export class NumericShaper {
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public static getContextualShaper(param0: number, param1: number): java.awt.font.NumericShaper;
				public static getContextualShaper(param0: number): java.awt.font.NumericShaper;
				public getRanges(): number;
				public static getShaper(param0: number): java.awt.font.NumericShaper;
				public isContextual(): boolean;
				public shape(param0: native.Array<string>, param1: number, param2: number, param3: number): void;
				public shape(param0: native.Array<string>, param1: number, param2: number): void;
				public static ALL_RANGES: number;
				public static ARABIC: number;
				public static BENGALI: number;
				public static DEVANAGARI: number;
				public static EASTERN_ARABIC: number;
				public static ETHIOPIC: number;
				public static EUROPEAN: number;
				public static GUJARATI: number;
				public static GURMUKHI: number;
				public static KANNADA: number;
				public static KHMER: number;
				public static LAO: number;
				public static MALAYALAM: number;
				public static MONGOLIAN: number;
				public static MYANMAR: number;
				public static ORIYA: number;
				public static TAMIL: number;
				public static TELUGU: number;
				public static THAI: number;
				public static TIBETAN: number;
			}
		}
	}
}
