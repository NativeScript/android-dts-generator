/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Node {
				public getNodeName(): string;
				public getNodeValue(): string;
				public setNodeValue(param0: string): void;
				public getNodeType(): number;
				public getParentNode(): org.w3c.dom.Node;
				public getChildNodes(): org.w3c.dom.NodeList;
				public getFirstChild(): org.w3c.dom.Node;
				public getLastChild(): org.w3c.dom.Node;
				public getPreviousSibling(): org.w3c.dom.Node;
				public getNextSibling(): org.w3c.dom.Node;
				public getAttributes(): org.w3c.dom.NamedNodeMap;
				public getOwnerDocument(): org.w3c.dom.Document;
				public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
				public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
				public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
				public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
				public hasChildNodes(): boolean;
				public cloneNode(param0: boolean): org.w3c.dom.Node;
				public normalize(): void;
				public isSupported(param0: string, param1: string): boolean;
				public getNamespaceURI(): string;
				public getPrefix(): string;
				public setPrefix(param0: string): void;
				public getLocalName(): string;
				public hasAttributes(): boolean;
				public getBaseURI(): string;
				public compareDocumentPosition(param0: org.w3c.dom.Node): number;
				public getTextContent(): string;
				public setTextContent(param0: string): void;
				public isSameNode(param0: org.w3c.dom.Node): boolean;
				public lookupPrefix(param0: string): string;
				public isDefaultNamespace(param0: string): boolean;
				public lookupNamespaceURI(param0: string): string;
				public isEqualNode(param0: org.w3c.dom.Node): boolean;
				public getFeature(param0: string, param1: string): java.lang.Object;
				public setUserData(param0: string, param1: java.lang.Object, param2: org.w3c.dom.UserDataHandler): java.lang.Object;
				public getUserData(param0: string): java.lang.Object;
				public static ATTRIBUTE_NODE: number;
				public static CDATA_SECTION_NODE: number;
				public static COMMENT_NODE: number;
				public static DOCUMENT_FRAGMENT_NODE: number;
				public static DOCUMENT_NODE: number;
				public static DOCUMENT_POSITION_CONTAINED_BY: number;
				public static DOCUMENT_POSITION_CONTAINS: number;
				public static DOCUMENT_POSITION_DISCONNECTED: number;
				public static DOCUMENT_POSITION_FOLLOWING: number;
				public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
				public static DOCUMENT_POSITION_PRECEDING: number;
				public static DOCUMENT_TYPE_NODE: number;
				public static ELEMENT_NODE: number;
				public static ENTITY_NODE: number;
				public static ENTITY_REFERENCE_NODE: number;
				public static NOTATION_NODE: number;
				public static PROCESSING_INSTRUCTION_NODE: number;
				public static TEXT_NODE: number;
			}
		}
	}
}
