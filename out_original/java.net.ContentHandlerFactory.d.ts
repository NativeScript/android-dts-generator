/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.ContentHandler.d.ts" />

declare module java {
	export module net {
		export class ContentHandlerFactory {
			public createContentHandler(param0: string): java.net.ContentHandler;
		}
	}
}
