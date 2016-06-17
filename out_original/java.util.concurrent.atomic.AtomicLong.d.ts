/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicLong {
					public constructor();
					public constructor(param0: number);
					public constructor();
					public get(): number;
					public set(param0: number): void;
					public lazySet(param0: number): void;
					public getAndSet(param0: number): number;
					public compareAndSet(param0: number, param1: number): boolean;
					public weakCompareAndSet(param0: number, param1: number): boolean;
					public getAndIncrement(): number;
					public getAndDecrement(): number;
					public getAndAdd(param0: number): number;
					public incrementAndGet(): number;
					public decrementAndGet(): number;
					public addAndGet(param0: number): number;
					public toString(): string;
					public intValue(): number;
					public longValue(): number;
					public floatValue(): number;
					public doubleValue(): number;
				}
			}
		}
	}
}
