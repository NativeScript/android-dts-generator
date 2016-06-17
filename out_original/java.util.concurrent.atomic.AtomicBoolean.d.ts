/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicBoolean {
					public constructor();
					public constructor(param0: boolean);
					public constructor();
					public get(): boolean;
					public compareAndSet(param0: boolean, param1: boolean): boolean;
					public weakCompareAndSet(param0: boolean, param1: boolean): boolean;
					public set(param0: boolean): void;
					public lazySet(param0: boolean): void;
					public getAndSet(param0: boolean): boolean;
					public toString(): string;
				}
			}
		}
	}
}
