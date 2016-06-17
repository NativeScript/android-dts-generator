/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class BlockingQueue {
				public add(param0: java.lang.Object): boolean;
				public offer(param0: java.lang.Object): boolean;
				public put(param0: java.lang.Object): void;
				public offer(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public take(): java.lang.Object;
				public poll(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public remainingCapacity(): number;
				public remove(param0: java.lang.Object): boolean;
				public contains(param0: java.lang.Object): boolean;
				public drainTo(param0: java.util.Collection): number;
				public drainTo(param0: java.util.Collection, param1: number): number;
			}
		}
	}
}
