/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Attr.d.ts" />
/// <reference path="./org.w3c.dom.CDATASection.d.ts" />
/// <reference path="./org.w3c.dom.Comment.d.ts" />
/// <reference path="./org.w3c.dom.DOMConfiguration.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
/// <reference path="./org.w3c.dom.DocumentFragment.d.ts" />
/// <reference path="./org.w3c.dom.DocumentType.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
/// <reference path="./org.w3c.dom.EntityReference.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.ProcessingInstruction.d.ts" />
/// <reference path="./org.w3c.dom.Text.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Document {
				public getDoctype(): org.w3c.dom.DocumentType;
				public getImplementation(): org.w3c.dom.DOMImplementation;
				public getDocumentElement(): org.w3c.dom.Element;
				public createElement(param0: string): org.w3c.dom.Element;
				public createDocumentFragment(): org.w3c.dom.DocumentFragment;
				public createTextNode(param0: string): org.w3c.dom.Text;
				public createComment(param0: string): org.w3c.dom.Comment;
				public createCDATASection(param0: string): org.w3c.dom.CDATASection;
				public createProcessingInstruction(param0: string, param1: string): org.w3c.dom.ProcessingInstruction;
				public createAttribute(param0: string): org.w3c.dom.Attr;
				public createEntityReference(param0: string): org.w3c.dom.EntityReference;
				public getElementsByTagName(param0: string): org.w3c.dom.NodeList;
				public importNode(param0: org.w3c.dom.Node, param1: boolean): org.w3c.dom.Node;
				public createElementNS(param0: string, param1: string): org.w3c.dom.Element;
				public createAttributeNS(param0: string, param1: string): org.w3c.dom.Attr;
				public getElementsByTagNameNS(param0: string, param1: string): org.w3c.dom.NodeList;
				public getElementById(param0: string): org.w3c.dom.Element;
				public getInputEncoding(): string;
				public getXmlEncoding(): string;
				public getXmlStandalone(): boolean;
				public setXmlStandalone(param0: boolean): void;
				public getXmlVersion(): string;
				public setXmlVersion(param0: string): void;
				public getStrictErrorChecking(): boolean;
				public setStrictErrorChecking(param0: boolean): void;
				public getDocumentURI(): string;
				public setDocumentURI(param0: string): void;
				public adoptNode(param0: org.w3c.dom.Node): org.w3c.dom.Node;
				public getDomConfig(): org.w3c.dom.DOMConfiguration;
				public normalizeDocument(): void;
				public renameNode(param0: org.w3c.dom.Node, param1: string, param2: string): org.w3c.dom.Node;
			}
		}
	}
}
