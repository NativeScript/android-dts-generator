/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DocumentType {
				public getName(): string;
				public getEntities(): org.w3c.dom.NamedNodeMap;
				public getNotations(): org.w3c.dom.NamedNodeMap;
				public getPublicId(): string;
				public getSystemId(): string;
				public getInternalSubset(): string;
			}
		}
	}
}
