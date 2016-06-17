/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module atomic {
				export class AtomicMarkableReference {
					public constructor();
					public constructor(param0: java.lang.Object, param1: boolean);
					public getReference(): java.lang.Object;
					public isMarked(): boolean;
					public get(param0: native.Array<boolean>): java.lang.Object;
					public weakCompareAndSet(param0: java.lang.Object, param1: java.lang.Object, param2: boolean, param3: boolean): boolean;
					public compareAndSet(param0: java.lang.Object, param1: java.lang.Object, param2: boolean, param3: boolean): boolean;
					public set(param0: java.lang.Object, param1: boolean): void;
					public attemptMark(param0: java.lang.Object, param1: boolean): boolean;
				}
			}
		}
	}
}
