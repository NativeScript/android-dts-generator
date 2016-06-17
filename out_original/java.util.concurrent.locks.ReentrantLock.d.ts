/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
/// <reference path="./java.util.concurrent.locks.Condition.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class ReentrantLock {
					public constructor();
					public constructor(param0: boolean);
					public lock(): void;
					public lockInterruptibly(): void;
					public tryLock(): boolean;
					public tryLock(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public unlock(): void;
					public newCondition(): java.util.concurrent.locks.Condition;
					public getHoldCount(): number;
					public isHeldByCurrentThread(): boolean;
					public isLocked(): boolean;
					public isFair(): boolean;
					public getOwner(): java.lang.Thread;
					public hasQueuedThreads(): boolean;
					public hasQueuedThread(param0: java.lang.Thread): boolean;
					public getQueueLength(): number;
					public getQueuedThreads(): java.util.Collection;
					public hasWaiters(param0: java.util.concurrent.locks.Condition): boolean;
					public getWaitQueueLength(param0: java.util.concurrent.locks.Condition): number;
					public getWaitingThreads(param0: java.util.concurrent.locks.Condition): java.util.Collection;
					public toString(): string;
				}
			}
		}
	}
}
