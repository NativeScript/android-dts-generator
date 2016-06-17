/// <reference path="./_helpers.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class Locator {
				public getPublicId(): string;
				public getSystemId(): string;
				public getLineNumber(): number;
				public getColumnNumber(): number;
			}
		}
	}
}
