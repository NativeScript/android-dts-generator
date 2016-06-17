/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicReference {
					public constructor();
					public constructor(param0: java.lang.Object);
					public constructor();
					public get(): java.lang.Object;
					public set(param0: java.lang.Object): void;
					public lazySet(param0: java.lang.Object): void;
					public compareAndSet(param0: java.lang.Object, param1: java.lang.Object): boolean;
					public weakCompareAndSet(param0: java.lang.Object, param1: java.lang.Object): boolean;
					public getAndSet(param0: java.lang.Object): java.lang.Object;
					public toString(): string;
				}
			}
		}
	}
}
