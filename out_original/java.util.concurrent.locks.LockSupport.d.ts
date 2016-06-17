/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class LockSupport {
					public static unpark(param0: java.lang.Thread): void;
					public static park(param0: java.lang.Object): void;
					public static parkNanos(param0: java.lang.Object, param1: number): void;
					public static parkUntil(param0: java.lang.Object, param1: number): void;
					public static getBlocker(param0: java.lang.Thread): java.lang.Object;
					public static park(): void;
					public static parkNanos(param0: number): void;
					public static parkUntil(param0: number): void;
				}
			}
		}
	}
}
