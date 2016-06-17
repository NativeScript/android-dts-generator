/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
/// <reference path="./java.util.concurrent.locks.Condition.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class Lock {
					public lock(): void;
					public lockInterruptibly(): void;
					public tryLock(): boolean;
					public tryLock(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public unlock(): void;
					public newCondition(): java.util.concurrent.locks.Condition;
				}
			}
		}
	}
}
