/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.ext.LexicalHandler.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module sax {
				export class SAXResult {
					public constructor();
					public constructor(param0: org.xml.sax.ContentHandler);
					public setHandler(param0: org.xml.sax.ContentHandler): void;
					public getHandler(): org.xml.sax.ContentHandler;
					public setLexicalHandler(param0: org.xml.sax.ext.LexicalHandler): void;
					public getLexicalHandler(): org.xml.sax.ext.LexicalHandler;
					public setSystemId(param0: string): void;
					public getSystemId(): string;
					public static FEATURE: string;
				}
			}
		}
	}
}
