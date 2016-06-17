/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Semaphore {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: boolean);
				public acquire(): void;
				public acquireUninterruptibly(): void;
				public tryAcquire(): boolean;
				public tryAcquire(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public release(): void;
				public acquire(param0: number): void;
				public acquireUninterruptibly(param0: number): void;
				public tryAcquire(param0: number): boolean;
				public tryAcquire(param0: number, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public release(param0: number): void;
				public availablePermits(): number;
				public drainPermits(): number;
				public reducePermits(param0: number): void;
				public isFair(): boolean;
				public hasQueuedThreads(): boolean;
				public getQueueLength(): number;
				public getQueuedThreads(): java.util.Collection;
				public toString(): string;
			}
		}
	}
}
