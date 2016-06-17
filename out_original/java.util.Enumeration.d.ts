/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export class Enumeration {
			public hasMoreElements(): boolean;
			public nextElement(): java.lang.Object;
		}
	}
}
