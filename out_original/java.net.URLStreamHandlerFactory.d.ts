/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URLStreamHandler.d.ts" />

declare module java {
	export module net {
		export class URLStreamHandlerFactory {
			public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
		}
	}
}
