/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export class Iterator {
			public hasNext(): boolean;
			public next(): java.lang.Object;
			public remove(): void;
		}
	}
}
