/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.parsers.SAXParser.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />

declare module javax {
	export module xml {
		export module parsers {
			export class SAXParserFactory {
				public constructor();
				public static newInstance(): javax.xml.parsers.SAXParserFactory;
				public static newInstance(param0: string, param1: java.lang.ClassLoader): javax.xml.parsers.SAXParserFactory;
				public newSAXParser(): javax.xml.parsers.SAXParser;
				public setNamespaceAware(param0: boolean): void;
				public setValidating(param0: boolean): void;
				public isNamespaceAware(): boolean;
				public isValidating(): boolean;
				public setFeature(param0: string, param1: boolean): void;
				public getFeature(param0: string): boolean;
				public getSchema(): javax.xml.validation.Schema;
				public setSchema(param0: javax.xml.validation.Schema): void;
				public setXIncludeAware(param0: boolean): void;
				public isXIncludeAware(): boolean;
			}
		}
	}
}
