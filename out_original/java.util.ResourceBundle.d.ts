/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class ResourceBundle {
			public constructor();
			public static getBundle(param0: string): java.util.ResourceBundle;
			public static getBundle(param0: string, param1: java.util.Locale): java.util.ResourceBundle;
			public static getBundle(param0: string, param1: java.util.Locale, param2: java.lang.ClassLoader): java.util.ResourceBundle;
			public static getBundle(param0: string, param1: java.util.ResourceBundle.Control): java.util.ResourceBundle;
			public static getBundle(param0: string, param1: java.util.Locale, param2: java.util.ResourceBundle.Control): java.util.ResourceBundle;
			public static getBundle(param0: string, param1: java.util.Locale, param2: java.lang.ClassLoader, param3: java.util.ResourceBundle.Control): java.util.ResourceBundle;
			public getKeys(): java.util.Enumeration;
			public getLocale(): java.util.Locale;
			public getObject(param0: string): java.lang.Object;
			public getString(param0: string): string;
			public getStringArray(param0: string): native.Array<string>;
			public handleGetObject(param0: string): java.lang.Object;
			public setParent(param0: java.util.ResourceBundle): void;
			public static clearCache(): void;
			public static clearCache(param0: java.lang.ClassLoader): void;
			public containsKey(param0: string): boolean;
			public keySet(): java.util.Set;
			public handleKeySet(): java.util.Set;
			public parent: java.util.ResourceBundle;
		}
		export module ResourceBundle {
			export class Control {
				public constructor();
				public static getControl(param0: java.util.List): java.util.ResourceBundle.Control;
				public static getNoFallbackControl(param0: java.util.List): java.util.ResourceBundle.Control;
				public getCandidateLocales(param0: string, param1: java.util.Locale): java.util.List;
				public getFormats(param0: string): java.util.List;
				public getFallbackLocale(param0: string, param1: java.util.Locale): java.util.Locale;
				public newBundle(param0: string, param1: java.util.Locale, param2: string, param3: java.lang.ClassLoader, param4: boolean): java.util.ResourceBundle;
				public getTimeToLive(param0: string, param1: java.util.Locale): number;
				public needsReload(param0: string, param1: java.util.Locale, param2: string, param3: java.lang.ClassLoader, param4: java.util.ResourceBundle, param5: number): boolean;
				public toBundleName(param0: string, param1: java.util.Locale): string;
				public toResourceName(param0: string, param1: string): string;
				public static FORMAT_CLASS: java.util.List;
				public static FORMAT_DEFAULT: java.util.List;
				public static FORMAT_PROPERTIES: java.util.List;
				public static TTL_DONT_CACHE: number;
				public static TTL_NO_EXPIRATION_CONTROL: number;
			}
		}
	}
}
