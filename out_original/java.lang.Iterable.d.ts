/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module lang {
		export class Iterable {
			public iterator(): java.util.Iterator;
		}
	}
}
