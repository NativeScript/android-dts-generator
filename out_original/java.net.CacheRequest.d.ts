/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module java {
	export module net {
		export class CacheRequest {
			public constructor();
			public abort(): void;
			public getBody(): java.io.OutputStream;
		}
	}
}
