/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.CookiePolicy.d.ts" />
/// <reference path="./java.net.CookieStore.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module net {
		export class CookieManager {
			public constructor();
			public constructor(param0: java.net.CookieStore, param1: java.net.CookiePolicy);
			public get(param0: java.net.URI, param1: java.util.Map): java.util.Map;
			public put(param0: java.net.URI, param1: java.util.Map): void;
			public setCookiePolicy(param0: java.net.CookiePolicy): void;
			public getCookieStore(): java.net.CookieStore;
		}
	}
}
