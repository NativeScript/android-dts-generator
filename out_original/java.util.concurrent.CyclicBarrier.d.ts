/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class CyclicBarrier {
				public constructor();
				public constructor(param0: number, param1: java.lang.Runnable);
				public constructor(param0: number);
				public getParties(): number;
				public await(): number;
				public await(param0: number, param1: java.util.concurrent.TimeUnit): number;
				public isBroken(): boolean;
				public reset(): void;
				public getNumberWaiting(): number;
			}
		}
	}
}
