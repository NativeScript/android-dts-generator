/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Observable.d.ts" />

declare module java {
	export module util {
		export class Observer {
			public update(param0: java.util.Observable, param1: java.lang.Object): void;
		}
	}
}
