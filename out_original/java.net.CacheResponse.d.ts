/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module net {
		export class CacheResponse {
			public constructor();
			public getBody(): java.io.InputStream;
			public getHeaders(): java.util.Map;
		}
	}
}
