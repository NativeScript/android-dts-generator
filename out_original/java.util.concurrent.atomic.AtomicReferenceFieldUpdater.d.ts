/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicReferenceFieldUpdater {
					public constructor();
					public static newUpdater(param0: java.lang.Class, param1: java.lang.Class, param2: string): java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
					public compareAndSet(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object): boolean;
					public weakCompareAndSet(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object): boolean;
					public set(param0: java.lang.Object, param1: java.lang.Object): void;
					public lazySet(param0: java.lang.Object, param1: java.lang.Object): void;
					public get(param0: java.lang.Object): java.lang.Object;
					public getAndSet(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				}
			}
		}
	}
}
