/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module dom {
				export class DOMSource {
					public constructor();
					public constructor(param0: org.w3c.dom.Node);
					public constructor(param0: org.w3c.dom.Node, param1: string);
					public setNode(param0: org.w3c.dom.Node): void;
					public getNode(): org.w3c.dom.Node;
					public setSystemId(param0: string): void;
					public getSystemId(): string;
					public static FEATURE: string;
				}
			}
		}
	}
}
