/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class CompletionService {
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
				public take(): java.util.concurrent.Future;
				public poll(): java.util.concurrent.Future;
				public poll(param0: number, param1: java.util.concurrent.TimeUnit): java.util.concurrent.Future;
			}
		}
	}
}
