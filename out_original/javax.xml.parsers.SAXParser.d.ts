/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
/// <reference path="./org.xml.sax.HandlerBase.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Parser.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
/// <reference path="./org.xml.sax.helpers.DefaultHandler.d.ts" />

declare module javax {
	export module xml {
		export module parsers {
			export class SAXParser {
				public constructor();
				public reset(): void;
				public parse(param0: java.io.InputStream, param1: org.xml.sax.HandlerBase): void;
				public parse(param0: java.io.InputStream, param1: org.xml.sax.HandlerBase, param2: string): void;
				public parse(param0: java.io.InputStream, param1: org.xml.sax.helpers.DefaultHandler): void;
				public parse(param0: java.io.InputStream, param1: org.xml.sax.helpers.DefaultHandler, param2: string): void;
				public parse(param0: string, param1: org.xml.sax.HandlerBase): void;
				public parse(param0: string, param1: org.xml.sax.helpers.DefaultHandler): void;
				public parse(param0: java.io.File, param1: org.xml.sax.HandlerBase): void;
				public parse(param0: java.io.File, param1: org.xml.sax.helpers.DefaultHandler): void;
				public parse(param0: org.xml.sax.InputSource, param1: org.xml.sax.HandlerBase): void;
				public parse(param0: org.xml.sax.InputSource, param1: org.xml.sax.helpers.DefaultHandler): void;
				public getParser(): org.xml.sax.Parser;
				public getXMLReader(): org.xml.sax.XMLReader;
				public isNamespaceAware(): boolean;
				public isValidating(): boolean;
				public setProperty(param0: string, param1: java.lang.Object): void;
				public getProperty(param0: string): java.lang.Object;
				public getSchema(): javax.xml.validation.Schema;
				public isXIncludeAware(): boolean;
			}
		}
	}
}
