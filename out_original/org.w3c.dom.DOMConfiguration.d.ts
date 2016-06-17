/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMStringList.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMConfiguration {
				public setParameter(param0: string, param1: java.lang.Object): void;
				public getParameter(param0: string): java.lang.Object;
				public canSetParameter(param0: string, param1: java.lang.Object): boolean;
				public getParameterNames(): org.w3c.dom.DOMStringList;
			}
		}
	}
}
