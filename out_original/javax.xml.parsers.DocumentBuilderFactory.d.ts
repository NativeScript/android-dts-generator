/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.parsers.DocumentBuilder.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />

declare module javax {
	export module xml {
		export module parsers {
			export class DocumentBuilderFactory {
				public constructor();
				public static newInstance(): javax.xml.parsers.DocumentBuilderFactory;
				public static newInstance(param0: string, param1: java.lang.ClassLoader): javax.xml.parsers.DocumentBuilderFactory;
				public newDocumentBuilder(): javax.xml.parsers.DocumentBuilder;
				public setNamespaceAware(param0: boolean): void;
				public setValidating(param0: boolean): void;
				public setIgnoringElementContentWhitespace(param0: boolean): void;
				public setExpandEntityReferences(param0: boolean): void;
				public setIgnoringComments(param0: boolean): void;
				public setCoalescing(param0: boolean): void;
				public isNamespaceAware(): boolean;
				public isValidating(): boolean;
				public isIgnoringElementContentWhitespace(): boolean;
				public isExpandEntityReferences(): boolean;
				public isIgnoringComments(): boolean;
				public isCoalescing(): boolean;
				public setAttribute(param0: string, param1: java.lang.Object): void;
				public getAttribute(param0: string): java.lang.Object;
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
