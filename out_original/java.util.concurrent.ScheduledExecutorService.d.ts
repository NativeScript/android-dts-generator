/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledFuture.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ScheduledExecutorService {
				public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public schedule(param0: java.util.concurrent.Callable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
				public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture;
			}
		}
	}
}
