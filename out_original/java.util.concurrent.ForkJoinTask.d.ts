/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.ForkJoinPool.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ForkJoinTask {
				public constructor();
				public fork(): java.util.concurrent.ForkJoinTask;
				public join(): java.lang.Object;
				public invoke(): java.lang.Object;
				public static invokeAll(param0: java.util.concurrent.ForkJoinTask, param1: java.util.concurrent.ForkJoinTask): void;
				public static invokeAll(param0: native.Array<java.util.concurrent.ForkJoinTask>): void;
				public static invokeAll(param0: java.util.Collection): java.util.Collection;
				public cancel(param0: boolean): boolean;
				public isDone(): boolean;
				public isCancelled(): boolean;
				public isCompletedAbnormally(): boolean;
				public isCompletedNormally(): boolean;
				public getException(): java.lang.Throwable;
				public completeExceptionally(param0: java.lang.Throwable): void;
				public complete(param0: java.lang.Object): void;
				public get(): java.lang.Object;
				public get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public quietlyJoin(): void;
				public quietlyInvoke(): void;
				public static helpQuiesce(): void;
				public reinitialize(): void;
				public static getPool(): java.util.concurrent.ForkJoinPool;
				public static inForkJoinPool(): boolean;
				public tryUnfork(): boolean;
				public static getQueuedTaskCount(): number;
				public static getSurplusQueuedTaskCount(): number;
				public getRawResult(): java.lang.Object;
				public setRawResult(param0: java.lang.Object): void;
				public exec(): boolean;
				public static peekNextLocalTask(): java.util.concurrent.ForkJoinTask;
				public static pollNextLocalTask(): java.util.concurrent.ForkJoinTask;
				public static pollTask(): java.util.concurrent.ForkJoinTask;
				public static adapt(param0: java.lang.Runnable): java.util.concurrent.ForkJoinTask;
				public static adapt(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.ForkJoinTask;
				public static adapt(param0: java.util.concurrent.Callable): java.util.concurrent.ForkJoinTask;
			}
		}
	}
}
