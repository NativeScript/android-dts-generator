/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module dom {
				export class DOMLocator {
					public getOriginatingNode(): org.w3c.dom.Node;
				}
			}
		}
	}
}
