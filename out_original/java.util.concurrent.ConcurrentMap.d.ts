/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ConcurrentMap {
				public putIfAbsent(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public remove(param0: java.lang.Object, param1: java.lang.Object): boolean;
				public replace(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object): boolean;
				public replace(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			}
		}
	}
}
