/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.security.PrivilegedAction.d.ts" />
/// <reference path="./java.security.PrivilegedExceptionAction.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Executors {
				public static newFixedThreadPool(param0: number): java.util.concurrent.ExecutorService;
				public static newFixedThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
				public static newSingleThreadExecutor(): java.util.concurrent.ExecutorService;
				public static newSingleThreadExecutor(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
				public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
				public static newCachedThreadPool(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
				public static newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
				public static newSingleThreadScheduledExecutor(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ScheduledExecutorService;
				public static newScheduledThreadPool(param0: number): java.util.concurrent.ScheduledExecutorService;
				public static newScheduledThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory): java.util.concurrent.ScheduledExecutorService;
				public static unconfigurableExecutorService(param0: java.util.concurrent.ExecutorService): java.util.concurrent.ExecutorService;
				public static unconfigurableScheduledExecutorService(param0: java.util.concurrent.ScheduledExecutorService): java.util.concurrent.ScheduledExecutorService;
				public static defaultThreadFactory(): java.util.concurrent.ThreadFactory;
				public static privilegedThreadFactory(): java.util.concurrent.ThreadFactory;
				public static callable(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Callable;
				public static callable(param0: java.lang.Runnable): java.util.concurrent.Callable;
				public static callable(param0: java.security.PrivilegedAction): java.util.concurrent.Callable;
				public static callable(param0: java.security.PrivilegedExceptionAction): java.util.concurrent.Callable;
				public static privilegedCallable(param0: java.util.concurrent.Callable): java.util.concurrent.Callable;
				public static privilegedCallableUsingCurrentClassLoader(param0: java.util.concurrent.Callable): java.util.concurrent.Callable;
			}
		}
	}
}
