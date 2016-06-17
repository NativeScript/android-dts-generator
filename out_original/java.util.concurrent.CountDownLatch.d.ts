/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class CountDownLatch {
				public constructor();
				public constructor(param0: number);
				public await(): void;
				public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public countDown(): void;
				public getCount(): number;
				public toString(): string;
			}
		}
	}
}
