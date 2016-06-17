/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module net {
		export class UrlQuerySanitizer {
			public constructor();
			public constructor(param0: string);
			public getUnregisteredParameterValueSanitizer(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public setUnregisteredParameterValueSanitizer(param0: android.net.UrlQuerySanitizer.ValueSanitizer): void;
			public static getAllIllegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getAllButNulLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getAllButWhitespaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getUrlLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getUrlAndSpaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getAmpLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getAmpAndSpaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getSpaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public static getAllButNulAndAngleBracketsLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;
			public parseUrl(param0: string): void;
			public parseQuery(param0: string): void;
			public getParameterSet(): java.util.Set;
			public getParameterList(): java.util.List;
			public hasParameter(param0: string): boolean;
			public getValue(param0: string): string;
			public registerParameter(param0: string, param1: android.net.UrlQuerySanitizer.ValueSanitizer): void;
			public registerParameters(param0: native.Array<string>, param1: android.net.UrlQuerySanitizer.ValueSanitizer): void;
			public setAllowUnregisteredParamaters(param0: boolean): void;
			public getAllowUnregisteredParamaters(): boolean;
			public setPreferFirstRepeatedParameter(param0: boolean): void;
			public getPreferFirstRepeatedParameter(): boolean;
			public parseEntry(param0: string, param1: string): void;
			public addSanitizedEntry(param0: string, param1: string): void;
			public getValueSanitizer(param0: string): android.net.UrlQuerySanitizer.ValueSanitizer;
			public getEffectiveValueSanitizer(param0: string): android.net.UrlQuerySanitizer.ValueSanitizer;
			public unescape(param0: string): string;
			public isHexDigit(param0: string): boolean;
			public decodeHexDigit(param0: string): number;
			public clear(): void;
		}
		export module UrlQuerySanitizer {
			export class IllegalCharacterValueSanitizer {
				public constructor();
				public constructor(param0: number);
				public sanitize(param0: string): string;
				public static ALL_BUT_NUL_AND_ANGLE_BRACKETS_LEGAL: number;
				public static ALL_BUT_NUL_LEGAL: number;
				public static ALL_BUT_WHITESPACE_LEGAL: number;
				public static ALL_ILLEGAL: number;
				public static ALL_OK: number;
				public static ALL_WHITESPACE_OK: number;
				public static AMP_AND_SPACE_LEGAL: number;
				public static AMP_LEGAL: number;
				public static AMP_OK: number;
				public static DQUOTE_OK: number;
				public static GT_OK: number;
				public static LT_OK: number;
				public static NON_7_BIT_ASCII_OK: number;
				public static NUL_OK: number;
				public static OTHER_WHITESPACE_OK: number;
				public static PCT_OK: number;
				public static SCRIPT_URL_OK: number;
				public static SPACE_LEGAL: number;
				public static SPACE_OK: number;
				public static SQUOTE_OK: number;
				public static URL_AND_SPACE_LEGAL: number;
				public static URL_LEGAL: number;
			}
			export class ParameterValuePair {
				public constructor();
				public constructor(param0: android.net.UrlQuerySanitizer, param1: string, param2: string);
				public mParameter: string;
				public mValue: string;
			}
			export class ValueSanitizer {
				public sanitize(param0: string): string;
			}
		}
	}
}
