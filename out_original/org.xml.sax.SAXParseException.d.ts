/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class SAXParseException {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: string, param1: java.lang.Exception);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string, param1: org.xml.sax.Locator);
				public constructor(param0: string, param1: org.xml.sax.Locator, param2: java.lang.Exception);
				public constructor(param0: string, param1: string, param2: string, param3: number, param4: number);
				public constructor(param0: string, param1: string, param2: string, param3: number, param4: number, param5: java.lang.Exception);
				public getPublicId(): string;
				public getSystemId(): string;
				public getLineNumber(): number;
				public getColumnNumber(): number;
			}
		}
	}
}
