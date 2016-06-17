/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMLocator {
				public getLineNumber(): number;
				public getColumnNumber(): number;
				public getByteOffset(): number;
				public getUtf16Offset(): number;
				public getRelatedNode(): org.w3c.dom.Node;
				public getUri(): string;
			}
		}
	}
}
