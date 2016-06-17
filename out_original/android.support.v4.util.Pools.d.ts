/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class Pools {
				}
				export module Pools {
					export class Pool {
						public acquire(): java.lang.Object;
						public release(param0: java.lang.Object): boolean;
					}
					export class SimplePool {
						public constructor();
						public constructor(param0: number);
						public acquire(): java.lang.Object;
						public release(param0: java.lang.Object): boolean;
					}
					export class SynchronizedPool {
						public constructor();
						public constructor(param0: number);
						public acquire(): java.lang.Object;
						public release(param0: java.lang.Object): boolean;
					}
				}
			}
		}
	}
}
