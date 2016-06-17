/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Callable.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class FutureTask {
				public constructor();
				public constructor(param0: java.util.concurrent.Callable);
				public constructor(param0: java.lang.Runnable, param1: java.lang.Object);
				public isCancelled(): boolean;
				public isDone(): boolean;
				public cancel(param0: boolean): boolean;
				public get(): java.lang.Object;
				public get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public done(): void;
				public set(param0: java.lang.Object): void;
				public setException(param0: java.lang.Throwable): void;
				public run(): void;
				public runAndReset(): boolean;
			}
		}
	}
}
