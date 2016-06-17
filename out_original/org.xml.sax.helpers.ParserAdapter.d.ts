/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.Parser.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class ParserAdapter {
					public constructor();
					public constructor(param0: org.xml.sax.Parser);
					public setFeature(param0: string, param1: boolean): void;
					public getFeature(param0: string): boolean;
					public setProperty(param0: string, param1: java.lang.Object): void;
					public getProperty(param0: string): java.lang.Object;
					public setEntityResolver(param0: org.xml.sax.EntityResolver): void;
					public getEntityResolver(): org.xml.sax.EntityResolver;
					public setDTDHandler(param0: org.xml.sax.DTDHandler): void;
					public getDTDHandler(): org.xml.sax.DTDHandler;
					public setContentHandler(param0: org.xml.sax.ContentHandler): void;
					public getContentHandler(): org.xml.sax.ContentHandler;
					public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
					public getErrorHandler(): org.xml.sax.ErrorHandler;
					public parse(param0: string): void;
					public parse(param0: org.xml.sax.InputSource): void;
					public setDocumentLocator(param0: org.xml.sax.Locator): void;
					public startDocument(): void;
					public endDocument(): void;
					public startElement(param0: string, param1: org.xml.sax.AttributeList): void;
					public endElement(param0: string): void;
					public characters(param0: native.Array<string>, param1: number, param2: number): void;
					public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
					public processingInstruction(param0: string, param1: string): void;
				}
			}
		}
	}
}
