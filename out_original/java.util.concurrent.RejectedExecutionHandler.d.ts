/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.ThreadPoolExecutor.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class RejectedExecutionHandler {
				public rejectedExecution(param0: java.lang.Runnable, param1: java.util.concurrent.ThreadPoolExecutor): void;
			}
		}
	}
}
