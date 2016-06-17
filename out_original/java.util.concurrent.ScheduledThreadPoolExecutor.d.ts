/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.BlockingQueue.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.RejectedExecutionHandler.d.ts" />
/// <reference path="./java.util.concurrent.RunnableScheduledFuture.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledFuture.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ScheduledThreadPoolExecutor {
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.ThreadFactory);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.RejectedExecutionHandler);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.ThreadFactory, param6: java.util.concurrent.RejectedExecutionHandler);
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: java.util.concurrent.ThreadFactory);
				public constructor(param0: number, param1: java.util.concurrent.RejectedExecutionHandler);
				public constructor(param0: number, param1: java.util.concurrent.ThreadFactory, param2: java.util.concurrent.RejectedExecutionHandler);
				public decorateTask(param0: java.lang.Runnable, param1: java.util.concurrent.RunnableScheduledFuture): java.util.concurrent.RunnableScheduledFuture;
				public decorateTask(param0: java.util.concurrent.Callable, param1: java.util.concurrent.RunnableScheduledFuture): java.util.concurrent.RunnableScheduledFuture;
				public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public schedule(param0: java.util.concurrent.Callable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public execute(param0: java.lang.Runnable): void;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public setContinueExistingPeriodicTasksAfterShutdownPolicy(param0: boolean): void;
				public getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean;
				public setExecuteExistingDelayedTasksAfterShutdownPolicy(param0: boolean): void;
				public getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean;
				public setRemoveOnCancelPolicy(param0: boolean): void;
				public getRemoveOnCancelPolicy(): boolean;
				public shutdown(): void;
				public shutdownNow(): java.util.List;
				public getQueue(): java.util.concurrent.BlockingQueue;
			}
		}
	}
}
