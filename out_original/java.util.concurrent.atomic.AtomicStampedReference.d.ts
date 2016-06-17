/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicStampedReference {
					public constructor();
					public constructor(param0: java.lang.Object, param1: number);
					public getReference(): java.lang.Object;
					public getStamp(): number;
					public get(param0: native.Array<number>): java.lang.Object;
					public weakCompareAndSet(param0: java.lang.Object, param1: java.lang.Object, param2: number, param3: number): boolean;
					public compareAndSet(param0: java.lang.Object, param1: java.lang.Object, param2: number, param3: number): boolean;
					public set(param0: java.lang.Object, param1: number): void;
					public attemptStamp(param0: java.lang.Object, param1: number): boolean;
				}
			}
		}
	}
}
