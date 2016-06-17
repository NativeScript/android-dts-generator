/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module org {
	export module xmlpull {
		export module v1 {
			export module sax2 {
				export class Driver {
					public constructor();
					public constructor(param0: org.xmlpull.v1.XmlPullParser);
					public getLength(): number;
					public getURI(param0: number): string;
					public getLocalName(param0: number): string;
					public getQName(param0: number): string;
					public getType(param0: number): string;
					public getValue(param0: number): string;
					public getIndex(param0: string, param1: string): number;
					public getIndex(param0: string): number;
					public getType(param0: string, param1: string): string;
					public getType(param0: string): string;
					public getValue(param0: string, param1: string): string;
					public getValue(param0: string): string;
					public getPublicId(): string;
					public getSystemId(): string;
					public getLineNumber(): number;
					public getColumnNumber(): number;
					public getFeature(param0: string): boolean;
					public setFeature(param0: string, param1: boolean): void;
					public getProperty(param0: string): java.lang.Object;
					public setProperty(param0: string, param1: java.lang.Object): void;
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
					public parseSubTree(param0: org.xmlpull.v1.XmlPullParser): void;
					public startElement(param0: string, param1: string, param2: string): void;
					public static APACHE_DYNAMIC_VALIDATION_FEATURE: string;
					public static APACHE_SCHEMA_VALIDATION_FEATURE: string;
					public static DECLARATION_HANDLER_PROPERTY: string;
					public static LEXICAL_HANDLER_PROPERTY: string;
					public static NAMESPACES_FEATURE: string;
					public static NAMESPACE_PREFIXES_FEATURE: string;
					public static VALIDATION_FEATURE: string;
					public contentHandler: org.xml.sax.ContentHandler;
					public errorHandler: org.xml.sax.ErrorHandler;
					public pp: org.xmlpull.v1.XmlPullParser;
					public systemId: string;
				}
			}
		}
	}
}
