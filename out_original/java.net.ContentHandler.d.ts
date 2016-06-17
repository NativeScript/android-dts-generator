/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />

declare module java {
	export module net {
		export class ContentHandler {
			public constructor();
			public getContent(param0: java.net.URLConnection): java.lang.Object;
			public getContent(param0: java.net.URLConnection, param1: native.Array<java.lang.Class>): java.lang.Object;
		}
	}
}
