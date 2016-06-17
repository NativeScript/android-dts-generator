/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicLongArray {
					public constructor();
					public constructor(param0: number);
					public constructor(param0: native.Array<number>);
					public length(): number;
					public get(param0: number): number;
					public set(param0: number, param1: number): void;
					public lazySet(param0: number, param1: number): void;
					public getAndSet(param0: number, param1: number): number;
					public compareAndSet(param0: number, param1: number, param2: number): boolean;
					public weakCompareAndSet(param0: number, param1: number, param2: number): boolean;
					public getAndIncrement(param0: number): number;
					public getAndDecrement(param0: number): number;
					public getAndAdd(param0: number, param1: number): number;
					public incrementAndGet(param0: number): number;
					public decrementAndGet(param0: number): number;
					public addAndGet(param0: number, param1: number): number;
					public toString(): string;
				}
			}
		}
	}
}
