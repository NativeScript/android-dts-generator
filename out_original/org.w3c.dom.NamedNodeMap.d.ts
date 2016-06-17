/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class NamedNodeMap {
				public getNamedItem(param0: string): org.w3c.dom.Node;
				public setNamedItem(param0: org.w3c.dom.Node): org.w3c.dom.Node;
				public removeNamedItem(param0: string): org.w3c.dom.Node;
				public item(param0: number): org.w3c.dom.Node;
				public getLength(): number;
				public getNamedItemNS(param0: string, param1: string): org.w3c.dom.Node;
				public setNamedItemNS(param0: org.w3c.dom.Node): org.w3c.dom.Node;
				public removeNamedItemNS(param0: string, param1: string): org.w3c.dom.Node;
			}
		}
	}
}
