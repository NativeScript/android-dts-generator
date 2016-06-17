/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.ForkJoinTask.d.ts" />
/// <reference path="./java.util.concurrent.ForkJoinWorkerThread.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.RunnableFuture.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ForkJoinPool {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory, param2: java.lang.Thread.UncaughtExceptionHandler, param3: boolean);
				public invoke(param0: java.util.concurrent.ForkJoinTask): java.lang.Object;
				public execute(param0: java.util.concurrent.ForkJoinTask): void;
				public execute(param0: java.lang.Runnable): void;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public submit(param0: java.util.concurrent.ForkJoinTask): java.util.concurrent.ForkJoinTask;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.ForkJoinTask;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.ForkJoinTask;
				public submit(param0: java.lang.Runnable): java.util.concurrent.ForkJoinTask;
				public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
				public invokeAll(param0: java.util.Collection): java.util.List;
				public getFactory(): java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory;
				public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
				public getParallelism(): number;
				public getPoolSize(): number;
				public getAsyncMode(): boolean;
				public getRunningThreadCount(): number;
				public getActiveThreadCount(): number;
				public isQuiescent(): boolean;
				public getStealCount(): number;
				public getQueuedTaskCount(): number;
				public getQueuedSubmissionCount(): number;
				public hasQueuedSubmissions(): boolean;
				public pollSubmission(): java.util.concurrent.ForkJoinTask;
				public drainTasksTo(param0: java.util.Collection): number;
				public toString(): string;
				public shutdown(): void;
				public shutdownNow(): java.util.List;
				public isTerminated(): boolean;
				public isTerminating(): boolean;
				public isShutdown(): boolean;
				public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public awaitQuiescence(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public static managedBlock(param0: java.util.concurrent.ForkJoinPool.ManagedBlocker): void;
				public newTaskFor(param0: java.util.concurrent.Callable): java.util.concurrent.RunnableFuture;
				public newTaskFor(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.RunnableFuture;
				public newTaskFor(param0: java.util.concurrent.Callable): java.util.concurrent.RunnableFuture;
				public static defaultForkJoinWorkerThreadFactory: java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory;
			}
			export module ForkJoinPool {
				export class ForkJoinWorkerThreadFactory {
					public newThread(param0: java.util.concurrent.ForkJoinPool): java.util.concurrent.ForkJoinWorkerThread;
				}
				export class ManagedBlocker {
					public block(): boolean;
					public isReleasable(): boolean;
				}
			}
		}
	}
}
