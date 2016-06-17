/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ExecutorService {
				public shutdown(): void;
				public shutdownNow(): java.util.List;
				public isShutdown(): boolean;
				public isTerminated(): boolean;
				public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future;
				public invokeAll(param0: java.util.Collection): java.util.List;
				public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
				public invokeAny(param0: java.util.Collection): java.lang.Object;
				public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.lang.Object;
			}
		}
	}
}
