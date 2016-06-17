/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class LocatorImpl {
					public constructor();
					public constructor(param0: org.xml.sax.Locator);
					public getPublicId(): string;
					public getSystemId(): string;
					public getLineNumber(): number;
					public getColumnNumber(): number;
					public setPublicId(param0: string): void;
					public setSystemId(param0: string): void;
					public setLineNumber(param0: number): void;
					public setColumnNumber(param0: number): void;
				}
			}
		}
	}
}
