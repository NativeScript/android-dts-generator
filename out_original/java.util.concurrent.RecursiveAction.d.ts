/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class RecursiveAction {
				public constructor();
				public compute(): void;
				public getRawResult(): java.lang.Object;
				public getRawResult(): java.lang.Void;
				public setRawResult(param0: java.lang.Object): void;
				public setRawResult(param0: java.lang.Void): void;
				public exec(): boolean;
			}
		}
	}
}
