/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
/// <reference path="./java.util.concurrent.locks.Condition.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class ReentrantReadWriteLock {
					public constructor();
					public constructor(param0: boolean);
					public writeLock(): java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock;
					public readLock(): java.util.concurrent.locks.ReentrantReadWriteLock.ReadLock;
					public isFair(): boolean;
					public getOwner(): java.lang.Thread;
					public getReadLockCount(): number;
					public isWriteLocked(): boolean;
					public isWriteLockedByCurrentThread(): boolean;
					public getWriteHoldCount(): number;
					public getReadHoldCount(): number;
					public getQueuedWriterThreads(): java.util.Collection;
					public getQueuedReaderThreads(): java.util.Collection;
					public hasQueuedThreads(): boolean;
					public hasQueuedThread(param0: java.lang.Thread): boolean;
					public getQueueLength(): number;
					public getQueuedThreads(): java.util.Collection;
					public hasWaiters(param0: java.util.concurrent.locks.Condition): boolean;
					public getWaitQueueLength(param0: java.util.concurrent.locks.Condition): number;
					public getWaitingThreads(param0: java.util.concurrent.locks.Condition): java.util.Collection;
					public toString(): string;
				}
				export module ReentrantReadWriteLock {
					export class ReadLock {
						public constructor();
						public constructor(param0: java.util.concurrent.locks.ReentrantReadWriteLock);
						public lock(): void;
						public lockInterruptibly(): void;
						public tryLock(): boolean;
						public tryLock(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public unlock(): void;
						public newCondition(): java.util.concurrent.locks.Condition;
						public toString(): string;
					}
					export class WriteLock {
						public constructor();
						public constructor(param0: java.util.concurrent.locks.ReentrantReadWriteLock);
						public lock(): void;
						public lockInterruptibly(): void;
						public tryLock(): boolean;
						public tryLock(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public unlock(): void;
						public newCondition(): java.util.concurrent.locks.Condition;
						public toString(): string;
						public isHeldByCurrentThread(): boolean;
						public getHoldCount(): number;
					}
				}
			}
		}
	}
}
