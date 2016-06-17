/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.BlockingQueue.d.ts" />
/// <reference path="./java.util.concurrent.RejectedExecutionHandler.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ThreadPoolExecutor {
				public constructor();
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.ThreadFactory);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.RejectedExecutionHandler);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.ThreadFactory, param6: java.util.concurrent.RejectedExecutionHandler);
				public execute(param0: java.lang.Runnable): void;
				public shutdown(): void;
				public shutdownNow(): java.util.List;
				public isShutdown(): boolean;
				public isTerminating(): boolean;
				public isTerminated(): boolean;
				public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public finalize(): void;
				public setThreadFactory(param0: java.util.concurrent.ThreadFactory): void;
				public getThreadFactory(): java.util.concurrent.ThreadFactory;
				public setRejectedExecutionHandler(param0: java.util.concurrent.RejectedExecutionHandler): void;
				public getRejectedExecutionHandler(): java.util.concurrent.RejectedExecutionHandler;
				public setCorePoolSize(param0: number): void;
				public getCorePoolSize(): number;
				public prestartCoreThread(): boolean;
				public prestartAllCoreThreads(): number;
				public allowsCoreThreadTimeOut(): boolean;
				public allowCoreThreadTimeOut(param0: boolean): void;
				public setMaximumPoolSize(param0: number): void;
				public getMaximumPoolSize(): number;
				public setKeepAliveTime(param0: number, param1: java.util.concurrent.TimeUnit): void;
				public getKeepAliveTime(param0: java.util.concurrent.TimeUnit): number;
				public getQueue(): java.util.concurrent.BlockingQueue;
				public remove(param0: java.lang.Runnable): boolean;
				public purge(): void;
				public getPoolSize(): number;
				public getActiveCount(): number;
				public getLargestPoolSize(): number;
				public getTaskCount(): number;
				public getCompletedTaskCount(): number;
				public toString(): string;
				public beforeExecute(param0: java.lang.Thread, param1: java.lang.Runnable): void;
				public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
				public terminated(): void;
			}
			export module ThreadPoolExecutor {
				export class AbortPolicy {
					public constructor();
					public rejectedExecution(param0: java.lang.Runnable, param1: java.util.concurrent.ThreadPoolExecutor): void;
				}
				export class CallerRunsPolicy {
					public constructor();
					public rejectedExecution(param0: java.lang.Runnable, param1: java.util.concurrent.ThreadPoolExecutor): void;
				}
				export class DiscardOldestPolicy {
					public constructor();
					public rejectedExecution(param0: java.lang.Runnable, param1: java.util.concurrent.ThreadPoolExecutor): void;
				}
				export class DiscardPolicy {
					public constructor();
					public rejectedExecution(param0: java.lang.Runnable, param1: java.util.concurrent.ThreadPoolExecutor): void;
				}
			}
		}
	}
}
