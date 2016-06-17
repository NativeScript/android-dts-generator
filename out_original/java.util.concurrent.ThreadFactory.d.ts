/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ThreadFactory {
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}
