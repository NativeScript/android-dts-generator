/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.RunnableFuture.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class AbstractExecutorService {
				public constructor();
				public newTaskFor(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.RunnableFuture;
				public newTaskFor(param0: java.util.concurrent.Callable): java.util.concurrent.RunnableFuture;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public invokeAny(param0: java.util.Collection): java.lang.Object;
				public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.lang.Object;
				public invokeAll(param0: java.util.Collection): java.util.List;
				public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
			}
		}
	}
}
