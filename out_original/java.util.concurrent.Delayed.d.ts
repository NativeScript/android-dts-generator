/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class Delayed {
				public getDelay(param0: java.util.concurrent.TimeUnit): number;
			}
		}
	}
}
