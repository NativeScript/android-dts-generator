/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementationList.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMImplementationSource {
				public getDOMImplementation(param0: string): org.w3c.dom.DOMImplementation;
				public getDOMImplementationList(param0: string): org.w3c.dom.DOMImplementationList;
			}
		}
	}
}
