/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module ext {
				export class Locator2Impl {
					public constructor(param0: org.xml.sax.Locator);
					public constructor();
					public constructor(param0: org.xml.sax.Locator);
					public getXMLVersion(): string;
					public getEncoding(): string;
					public setXMLVersion(param0: string): void;
					public setEncoding(param0: string): void;
				}
			}
		}
	}
}
