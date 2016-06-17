/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />

declare module android {
	export module sax {
		export class RootElement {
			public constructor();
			public constructor(param0: string, param1: string);
			public constructor(param0: string);
			public getContentHandler(): org.xml.sax.ContentHandler;
		}
	}
}
