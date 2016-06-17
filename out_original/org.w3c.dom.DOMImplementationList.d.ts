/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMImplementationList {
				public item(param0: number): org.w3c.dom.DOMImplementation;
				public getLength(): number;
			}
		}
	}
}
