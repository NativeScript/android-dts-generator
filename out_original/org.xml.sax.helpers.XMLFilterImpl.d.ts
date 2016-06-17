/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class XMLFilterImpl {
					public constructor();
					public constructor(param0: org.xml.sax.XMLReader);
					public setParent(param0: org.xml.sax.XMLReader): void;
					public getParent(): org.xml.sax.XMLReader;
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
					public parse(param0: org.xml.sax.InputSource): void;
					public parse(param0: string): void;
					public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
					public notationDecl(param0: string, param1: string, param2: string): void;
					public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
					public setDocumentLocator(param0: org.xml.sax.Locator): void;
					public startDocument(): void;
					public endDocument(): void;
					public startPrefixMapping(param0: string, param1: string): void;
					public endPrefixMapping(param0: string): void;
					public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;
					public endElement(param0: string, param1: string, param2: string): void;
					public characters(param0: native.Array<string>, param1: number, param2: number): void;
					public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
					public processingInstruction(param0: string, param1: string): void;
					public skippedEntity(param0: string): void;
					public warning(param0: org.xml.sax.SAXParseException): void;
					public error(param0: org.xml.sax.SAXParseException): void;
					public fatalError(param0: org.xml.sax.SAXParseException): void;
				}
			}
		}
	}
}
