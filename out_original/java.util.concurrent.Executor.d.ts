/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Executor {
				public execute(param0: java.lang.Runnable): void;
			}
		}
	}
}
