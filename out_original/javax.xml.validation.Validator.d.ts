/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSResourceResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />

declare module javax {
	export module xml {
		export module validation {
			export class Validator {
				public constructor();
				public reset(): void;
				public validate(param0: javax.xml.transform.Source): void;
				public validate(param0: javax.xml.transform.Source, param1: javax.xml.transform.Result): void;
				public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
				public getErrorHandler(): org.xml.sax.ErrorHandler;
				public setResourceResolver(param0: org.w3c.dom.ls.LSResourceResolver): void;
				public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver;
				public getFeature(param0: string): boolean;
				public setFeature(param0: string, param1: boolean): void;
				public setProperty(param0: string, param1: java.lang.Object): void;
				public getProperty(param0: string): java.lang.Object;
			}
		}
	}
}
