/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Attr.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.TypeInfo.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Element {
				public getTagName(): string;
				public getAttribute(param0: string): string;
				public setAttribute(param0: string, param1: string): void;
				public removeAttribute(param0: string): void;
				public getAttributeNode(param0: string): org.w3c.dom.Attr;
				public setAttributeNode(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;
				public removeAttributeNode(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;
				public getElementsByTagName(param0: string): org.w3c.dom.NodeList;
				public getAttributeNS(param0: string, param1: string): string;
				public setAttributeNS(param0: string, param1: string, param2: string): void;
				public removeAttributeNS(param0: string, param1: string): void;
				public getAttributeNodeNS(param0: string, param1: string): org.w3c.dom.Attr;
				public setAttributeNodeNS(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;
				public getElementsByTagNameNS(param0: string, param1: string): org.w3c.dom.NodeList;
				public hasAttribute(param0: string): boolean;
				public hasAttributeNS(param0: string, param1: string): boolean;
				public getSchemaTypeInfo(): org.w3c.dom.TypeInfo;
				public setIdAttribute(param0: string, param1: boolean): void;
				public setIdAttributeNS(param0: string, param1: string, param2: boolean): void;
				public setIdAttributeNode(param0: org.w3c.dom.Attr, param1: boolean): void;
			}
		}
	}
}
