/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class Condition {
					public await(): void;
					public awaitUninterruptibly(): void;
					public awaitNanos(param0: number): number;
					public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public awaitUntil(param0: java.util.Date): boolean;
					public signal(): void;
					public signalAll(): void;
				}
			}
		}
	}
}
