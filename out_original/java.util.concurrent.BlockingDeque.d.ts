/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class BlockingDeque {
				public addFirst(param0: java.lang.Object): void;
				public addLast(param0: java.lang.Object): void;
				public offerFirst(param0: java.lang.Object): boolean;
				public offerLast(param0: java.lang.Object): boolean;
				public putFirst(param0: java.lang.Object): void;
				public putLast(param0: java.lang.Object): void;
				public offerFirst(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public offerLast(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public takeFirst(): java.lang.Object;
				public takeLast(): java.lang.Object;
				public pollFirst(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public pollLast(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public removeFirstOccurrence(param0: java.lang.Object): boolean;
				public removeLastOccurrence(param0: java.lang.Object): boolean;
				public add(param0: java.lang.Object): boolean;
				public offer(param0: java.lang.Object): boolean;
				public put(param0: java.lang.Object): void;
				public offer(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public remove(): java.lang.Object;
				public poll(): java.lang.Object;
				public take(): java.lang.Object;
				public poll(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public element(): java.lang.Object;
				public peek(): java.lang.Object;
				public remove(param0: java.lang.Object): boolean;
				public contains(param0: java.lang.Object): boolean;
				public size(): number;
				public iterator(): java.util.Iterator;
				public push(param0: java.lang.Object): void;
			}
		}
	}
}
