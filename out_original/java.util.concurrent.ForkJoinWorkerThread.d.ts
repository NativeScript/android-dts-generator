/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.ThreadGroup.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.ForkJoinPool.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ForkJoinWorkerThread {
				public constructor();
				public constructor(param0: java.lang.Runnable);
				public constructor(param0: java.lang.Runnable, param1: string);
				public constructor(param0: string);
				public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
				public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
				public constructor(param0: java.lang.ThreadGroup, param1: string);
				public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
				public constructor(param0: java.util.concurrent.ForkJoinPool);
				public getPool(): java.util.concurrent.ForkJoinPool;
				public getPoolIndex(): number;
				public onStart(): void;
				public onTermination(param0: java.lang.Throwable): void;
				public run(): void;
			}
		}
	}
}
