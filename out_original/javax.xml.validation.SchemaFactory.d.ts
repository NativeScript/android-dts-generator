/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSResourceResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />

declare module javax {
	export module xml {
		export module validation {
			export class SchemaFactory {
				public constructor();
				public static newInstance(param0: string): javax.xml.validation.SchemaFactory;
				public static newInstance(param0: string, param1: string, param2: java.lang.ClassLoader): javax.xml.validation.SchemaFactory;
				public isSchemaLanguageSupported(param0: string): boolean;
				public getFeature(param0: string): boolean;
				public setFeature(param0: string, param1: boolean): void;
				public setProperty(param0: string, param1: java.lang.Object): void;
				public getProperty(param0: string): java.lang.Object;
				public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
				public getErrorHandler(): org.xml.sax.ErrorHandler;
				public setResourceResolver(param0: org.w3c.dom.ls.LSResourceResolver): void;
				public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver;
				public newSchema(param0: javax.xml.transform.Source): javax.xml.validation.Schema;
				public newSchema(param0: java.io.File): javax.xml.validation.Schema;
				public newSchema(param0: java.net.URL): javax.xml.validation.Schema;
				public newSchema(param0: native.Array<javax.xml.transform.Source>): javax.xml.validation.Schema;
				public newSchema(): javax.xml.validation.Schema;
			}
		}
	}
}
