/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.DocumentType.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMImplementation {
				public hasFeature(param0: string, param1: string): boolean;
				public createDocumentType(param0: string, param1: string, param2: string): org.w3c.dom.DocumentType;
				public createDocument(param0: string, param1: string, param2: org.w3c.dom.DocumentType): org.w3c.dom.Document;
				public getFeature(param0: string, param1: string): java.lang.Object;
			}
		}
	}
}
