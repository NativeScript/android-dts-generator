/// <reference path="./_helpers.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Entity {
				public getPublicId(): string;
				public getSystemId(): string;
				public getNotationName(): string;
				public getInputEncoding(): string;
				public getXmlEncoding(): string;
				public getXmlVersion(): string;
			}
		}
	}
}
