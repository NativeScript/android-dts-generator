/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.w3c.dom.DOMLocator.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class DOMError {
				public getSeverity(): number;
				public getMessage(): string;
				public getType(): string;
				public getRelatedException(): java.lang.Object;
				public getRelatedData(): java.lang.Object;
				public getLocation(): org.w3c.dom.DOMLocator;
				public static SEVERITY_ERROR: number;
				public static SEVERITY_FATAL_ERROR: number;
				public static SEVERITY_WARNING: number;
			}
		}
	}
}
