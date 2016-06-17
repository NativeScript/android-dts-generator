/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicReferenceArray {
					public constructor();
					public constructor(param0: number);
					public constructor(param0: native.Array<java.lang.Object>);
					public length(): number;
					public get(param0: number): java.lang.Object;
					public set(param0: number, param1: java.lang.Object): void;
					public lazySet(param0: number, param1: java.lang.Object): void;
					public getAndSet(param0: number, param1: java.lang.Object): java.lang.Object;
					public compareAndSet(param0: number, param1: java.lang.Object, param2: java.lang.Object): boolean;
					public weakCompareAndSet(param0: number, param1: java.lang.Object, param2: java.lang.Object): boolean;
					public toString(): string;
				}
			}
		}
	}
}
