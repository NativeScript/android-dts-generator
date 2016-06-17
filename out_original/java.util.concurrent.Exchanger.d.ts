/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Exchanger {
				public constructor();
				public exchange(param0: java.lang.Object): java.lang.Object;
				public exchange(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): java.lang.Object;
			}
		}
	}
}
