/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class LinkedTransferQueue {
				public constructor();
				public constructor(param0: java.util.Collection);
				public put(param0: java.lang.Object): void;
				public offer(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public offer(param0: java.lang.Object): boolean;
				public add(param0: java.lang.Object): boolean;
				public tryTransfer(param0: java.lang.Object): boolean;
				public transfer(param0: java.lang.Object): void;
				public tryTransfer(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public take(): java.lang.Object;
				public poll(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
				public poll(): java.lang.Object;
				public drainTo(param0: java.util.Collection): number;
				public drainTo(param0: java.util.Collection, param1: number): number;
				public iterator(): java.util.Iterator;
				public peek(): java.lang.Object;
				public isEmpty(): boolean;
				public hasWaitingConsumer(): boolean;
				public size(): number;
				public getWaitingConsumerCount(): number;
				public remove(): java.lang.Object;
				public remove(param0: java.lang.Object): boolean;
				public contains(param0: java.lang.Object): boolean;
				public remainingCapacity(): number;
			}
		}
	}
}
