/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class NodeList {
				public item(param0: number): org.w3c.dom.Node;
				public getLength(): number;
			}
		}
	}
}
