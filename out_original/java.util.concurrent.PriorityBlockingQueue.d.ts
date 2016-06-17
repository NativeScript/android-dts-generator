/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class PriorityBlockingQueue {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: java.util.Comparator);
				public constructor(param0: java.util.Collection);
				public add(param0: java.lang.Object): boolean;
				public offer(param0: java.lang.Object): boolean;
				public put(param0: java.lang.Object): void;
				public offer(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public poll(): java.lang.Object;
				public take(): java.lang.Object;
				public poll(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public peek(): java.lang.Object;
				public comparator(): java.util.Comparator;
				public size(): number;
				public remainingCapacity(): number;
				public remove(): java.lang.Object;
				public remove(param0: java.lang.Object): boolean;
				public contains(param0: java.lang.Object): boolean;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public toArray(): native.Array<java.lang.Object>;
				public toString(): string;
				public drainTo(param0: java.util.Collection): number;
				public drainTo(param0: java.util.Collection, param1: number): number;
				public clear(): void;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public iterator(): java.util.Iterator;
			}
		}
	}
}
