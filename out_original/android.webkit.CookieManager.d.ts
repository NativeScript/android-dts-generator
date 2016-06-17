/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class CookieManager {
			public constructor();
			public clone(): java.lang.Object;
			public static getInstance(): android.webkit.CookieManager;
			public setAcceptCookie(param0: boolean): void;
			public acceptCookie(): boolean;
			public setAcceptThirdPartyCookies(param0: android.webkit.WebView, param1: boolean): void;
			public acceptThirdPartyCookies(param0: android.webkit.WebView): boolean;
			public setCookie(param0: string, param1: string): void;
			public setCookie(param0: string, param1: string, param2: android.webkit.ValueCallback): void;
			public getCookie(param0: string): string;
			public removeSessionCookie(): void;
			public removeSessionCookies(param0: android.webkit.ValueCallback): void;
			public removeAllCookie(): void;
			public removeAllCookies(param0: android.webkit.ValueCallback): void;
			public hasCookies(): boolean;
			public removeExpiredCookie(): void;
			public flush(): void;
			public static allowFileSchemeCookies(): boolean;
			public static setAcceptFileSchemeCookies(param0: boolean): void;
		}
	}
}
