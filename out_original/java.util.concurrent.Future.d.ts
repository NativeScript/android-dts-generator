/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Future {
				public cancel(param0: boolean): boolean;
				public isCancelled(): boolean;
				public isDone(): boolean;
				public get(): java.lang.Object;
				public get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
			}
		}
	}
}
