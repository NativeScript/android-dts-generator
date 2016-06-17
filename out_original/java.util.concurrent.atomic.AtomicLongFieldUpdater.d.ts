/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicLongFieldUpdater {
					public constructor();
					public static newUpdater(param0: java.lang.Class, param1: string): java.util.concurrent.atomic.AtomicLongFieldUpdater;
					public compareAndSet(param0: java.lang.Object, param1: number, param2: number): boolean;
					public weakCompareAndSet(param0: java.lang.Object, param1: number, param2: number): boolean;
					public set(param0: java.lang.Object, param1: number): void;
					public lazySet(param0: java.lang.Object, param1: number): void;
					public get(param0: java.lang.Object): number;
					public getAndSet(param0: java.lang.Object, param1: number): number;
					public getAndIncrement(param0: java.lang.Object): number;
					public getAndDecrement(param0: java.lang.Object): number;
					public getAndAdd(param0: java.lang.Object, param1: number): number;
					public incrementAndGet(param0: java.lang.Object): number;
					public decrementAndGet(param0: java.lang.Object): number;
					public addAndGet(param0: java.lang.Object, param1: number): number;
				}
			}
		}
	}
}
