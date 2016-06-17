/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.CacheRequest.d.ts" />
/// <reference path="./java.net.CacheResponse.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module net {
		export class ResponseCache {
			public constructor();
			public static getDefault(): java.net.ResponseCache;
			public static setDefault(param0: java.net.ResponseCache): void;
			public get(param0: java.net.URI, param1: string, param2: java.util.Map): java.net.CacheResponse;
			public put(param0: java.net.URI, param1: java.net.URLConnection): java.net.CacheRequest;
		}
	}
}
