/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.CacheRequest.d.ts" />
/// <reference path="./java.net.CacheResponse.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module net {
		export module http {
			export class HttpResponseCache {
				public static getInstalled(): android.net.http.HttpResponseCache;
				public static install(param0: java.io.File, param1: number): android.net.http.HttpResponseCache;
				public get(param0: java.net.URI, param1: string, param2: java.util.Map): java.net.CacheResponse;
				public put(param0: java.net.URI, param1: java.net.URLConnection): java.net.CacheRequest;
				public size(): number;
				public maxSize(): number;
				public flush(): void;
				public getNetworkCount(): number;
				public getHitCount(): number;
				public getRequestCount(): number;
				public close(): void;
				public delete(): void;
			}
		}
	}
}
