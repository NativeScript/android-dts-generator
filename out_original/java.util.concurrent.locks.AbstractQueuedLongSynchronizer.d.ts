/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class AbstractQueuedLongSynchronizer {
					public constructor();
					public getState(): number;
					public setState(param0: number): void;
					public compareAndSetState(param0: number, param1: number): boolean;
					public tryAcquire(param0: number): boolean;
					public tryRelease(param0: number): boolean;
					public tryAcquireShared(param0: number): number;
					public tryReleaseShared(param0: number): boolean;
					public isHeldExclusively(): boolean;
					public acquire(param0: number): void;
					public acquireInterruptibly(param0: number): void;
					public tryAcquireNanos(param0: number, param1: number): boolean;
					public release(param0: number): boolean;
					public acquireShared(param0: number): void;
					public acquireSharedInterruptibly(param0: number): void;
					public tryAcquireSharedNanos(param0: number, param1: number): boolean;
					public releaseShared(param0: number): boolean;
					public hasQueuedThreads(): boolean;
					public hasContended(): boolean;
					public getFirstQueuedThread(): java.lang.Thread;
					public isQueued(param0: java.lang.Thread): boolean;
					public hasQueuedPredecessors(): boolean;
					public getQueueLength(): number;
					public getQueuedThreads(): java.util.Collection;
					public getExclusiveQueuedThreads(): java.util.Collection;
					public getSharedQueuedThreads(): java.util.Collection;
					public toString(): string;
					public owns(param0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): boolean;
					public hasWaiters(param0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): boolean;
					public getWaitQueueLength(param0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): number;
					public getWaitingThreads(param0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer.ConditionObject): java.util.Collection;
				}
				export module AbstractQueuedLongSynchronizer {
					export class ConditionObject {
						public constructor();
						public constructor(param0: java.util.concurrent.locks.AbstractQueuedLongSynchronizer);
						public signal(): void;
						public signalAll(): void;
						public awaitUninterruptibly(): void;
						public await(): void;
						public awaitNanos(param0: number): number;
						public awaitUntil(param0: java.util.Date): boolean;
						public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public hasWaiters(): boolean;
						public getWaitQueueLength(): number;
						public getWaitingThreads(): java.util.Collection;
					}
				}
			}
		}
	}
}
