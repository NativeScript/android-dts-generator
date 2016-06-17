/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.concurrent.Delayed.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class DelayQueue {
				public constructor();
				public constructor(param0: java.util.Collection);
				public add(param0: java.lang.Object): boolean;
				public add(param0: java.util.concurrent.Delayed): boolean;
				public offer(param0: java.util.concurrent.Delayed): boolean;
				public put(param0: java.util.concurrent.Delayed): void;
				public offer(param0: java.util.concurrent.Delayed, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public poll(): java.util.concurrent.Delayed;
				public take(): java.util.concurrent.Delayed;
				public poll(param0: number, param1: java.util.concurrent.TimeUnit): java.util.concurrent.Delayed;
				public peek(): java.util.concurrent.Delayed;
				public size(): number;
				public drainTo(param0: java.util.Collection): number;
				public drainTo(param0: java.util.Collection, param1: number): number;
				public clear(): void;
				public remainingCapacity(): number;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public toArray(): native.Array<java.lang.Object>;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public remove(): java.lang.Object;
				public remove(param0: java.lang.Object): boolean;
				public iterator(): java.util.Iterator;
			}
		}
	}
}
