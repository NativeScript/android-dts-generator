/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class URLUtil {
			public constructor();
			public static guessUrl(param0: string): string;
			public static composeSearchUrl(param0: string, param1: string, param2: string): string;
			public static decode(param0: native.Array<number>): native.Array<number>;
			public static isAssetUrl(param0: string): boolean;
			public static isCookielessProxyUrl(param0: string): boolean;
			public static isFileUrl(param0: string): boolean;
			public static isAboutUrl(param0: string): boolean;
			public static isDataUrl(param0: string): boolean;
			public static isJavaScriptUrl(param0: string): boolean;
			public static isHttpUrl(param0: string): boolean;
			public static isHttpsUrl(param0: string): boolean;
			public static isNetworkUrl(param0: string): boolean;
			public static isContentUrl(param0: string): boolean;
			public static isValidUrl(param0: string): boolean;
			public static stripAnchor(param0: string): string;
			public static guessFileName(param0: string, param1: string, param2: string): string;
		}
	}
}
