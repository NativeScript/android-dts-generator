/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Callable {
				public call(): java.lang.Object;
			}
		}
	}
}
