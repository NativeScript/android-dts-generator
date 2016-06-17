/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.TypeInfoProvider.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSResourceResolver.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />

declare module javax {
	export module xml {
		export module validation {
			export class ValidatorHandler {
				public constructor();
				public setContentHandler(param0: org.xml.sax.ContentHandler): void;
				public getContentHandler(): org.xml.sax.ContentHandler;
				public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
				public getErrorHandler(): org.xml.sax.ErrorHandler;
				public setResourceResolver(param0: org.w3c.dom.ls.LSResourceResolver): void;
				public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver;
				public getTypeInfoProvider(): javax.xml.validation.TypeInfoProvider;
				public getFeature(param0: string): boolean;
				public setFeature(param0: string, param1: boolean): void;
				public setProperty(param0: string, param1: java.lang.Object): void;
				public getProperty(param0: string): java.lang.Object;
			}
		}
	}
}
