/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class RecursiveTask {
				public constructor();
				public compute(): java.lang.Object;
				public getRawResult(): java.lang.Object;
				public setRawResult(param0: java.lang.Object): void;
				public exec(): boolean;
			}
		}
	}
}
