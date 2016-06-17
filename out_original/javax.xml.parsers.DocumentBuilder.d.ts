/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />

declare module javax {
	export module xml {
		export module parsers {
			export class DocumentBuilder {
				public constructor();
				public reset(): void;
				public parse(param0: java.io.InputStream): org.w3c.dom.Document;
				public parse(param0: java.io.InputStream, param1: string): org.w3c.dom.Document;
				public parse(param0: string): org.w3c.dom.Document;
				public parse(param0: java.io.File): org.w3c.dom.Document;
				public parse(param0: org.xml.sax.InputSource): org.w3c.dom.Document;
				public isNamespaceAware(): boolean;
				public isValidating(): boolean;
				public setEntityResolver(param0: org.xml.sax.EntityResolver): void;
				public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
				public newDocument(): org.w3c.dom.Document;
				public getDOMImplementation(): org.w3c.dom.DOMImplementation;
				public getSchema(): javax.xml.validation.Schema;
				public isXIncludeAware(): boolean;
			}
		}
	}
}
