/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class Locale {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: string);
			public static forLanguageTag(param0: string): java.util.Locale;
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public static getAvailableLocales(): native.Array<java.util.Locale>;
			public getCountry(): string;
			public static getDefault(): java.util.Locale;
			public getDisplayCountry(): string;
			public getDisplayCountry(param0: java.util.Locale): string;
			public getDisplayLanguage(): string;
			public getDisplayLanguage(param0: java.util.Locale): string;
			public getDisplayName(): string;
			public getDisplayName(param0: java.util.Locale): string;
			public getDisplayVariant(): string;
			public getDisplayVariant(param0: java.util.Locale): string;
			public getISO3Country(): string;
			public getISO3Language(): string;
			public static getISOCountries(): native.Array<string>;
			public static getISOLanguages(): native.Array<string>;
			public getLanguage(): string;
			public getVariant(): string;
			public getScript(): string;
			public getDisplayScript(): string;
			public getDisplayScript(param0: java.util.Locale): string;
			public toLanguageTag(): string;
			public getExtensionKeys(): java.util.Set;
			public getExtension(param0: string): string;
			public getUnicodeLocaleType(param0: string): string;
			public getUnicodeLocaleAttributes(): java.util.Set;
			public getUnicodeLocaleKeys(): java.util.Set;
			public hashCode(): number;
			public static setDefault(param0: java.util.Locale): void;
			public toString(): string;
			public static CANADA: java.util.Locale;
			public static CANADA_FRENCH: java.util.Locale;
			public static CHINA: java.util.Locale;
			public static CHINESE: java.util.Locale;
			public static ENGLISH: java.util.Locale;
			public static FRANCE: java.util.Locale;
			public static FRENCH: java.util.Locale;
			public static GERMAN: java.util.Locale;
			public static GERMANY: java.util.Locale;
			public static ITALIAN: java.util.Locale;
			public static ITALY: java.util.Locale;
			public static JAPAN: java.util.Locale;
			public static JAPANESE: java.util.Locale;
			public static KOREA: java.util.Locale;
			public static KOREAN: java.util.Locale;
			public static PRC: java.util.Locale;
			public static PRIVATE_USE_EXTENSION: string;
			public static ROOT: java.util.Locale;
			public static SIMPLIFIED_CHINESE: java.util.Locale;
			public static TAIWAN: java.util.Locale;
			public static TRADITIONAL_CHINESE: java.util.Locale;
			public static UK: java.util.Locale;
			public static UNICODE_LOCALE_EXTENSION: string;
			public static US: java.util.Locale;
		}
		export module Locale {
			export class Builder {
				public constructor();
				public setLanguage(param0: string): java.util.Locale.Builder;
				public setLanguageTag(param0: string): java.util.Locale.Builder;
				public setRegion(param0: string): java.util.Locale.Builder;
				public setVariant(param0: string): java.util.Locale.Builder;
				public setScript(param0: string): java.util.Locale.Builder;
				public setLocale(param0: java.util.Locale): java.util.Locale.Builder;
				public addUnicodeLocaleAttribute(param0: string): java.util.Locale.Builder;
				public removeUnicodeLocaleAttribute(param0: string): java.util.Locale.Builder;
				public setExtension(param0: string, param1: string): java.util.Locale.Builder;
				public clearExtensions(): java.util.Locale.Builder;
				public setUnicodeLocaleKeyword(param0: string, param1: string): java.util.Locale.Builder;
				public clear(): java.util.Locale.Builder;
				public build(): java.util.Locale;
			}
		}
	}
}
