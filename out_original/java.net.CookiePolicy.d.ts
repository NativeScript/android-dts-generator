/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.HttpCookie.d.ts" />
/// <reference path="./java.net.URI.d.ts" />

declare module java {
	export module net {
		export class CookiePolicy {
			public shouldAccept(param0: java.net.URI, param1: java.net.HttpCookie): boolean;
			public static ACCEPT_ALL: java.net.CookiePolicy;
			public static ACCEPT_NONE: java.net.CookiePolicy;
			public static ACCEPT_ORIGINAL_SERVER: java.net.CookiePolicy;
		}
	}
}
