/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />

declare module java {
	export module util {
		export class LinkedList {
			public constructor();
			public constructor(param0: java.util.Collection);
			public add(param0: java.lang.Object): boolean;
			public add(param0: number, param1: java.lang.Object): void;
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public addFirst(param0: java.lang.Object): void;
			public addLast(param0: java.lang.Object): void;
			public clear(): void;
			public clone(): java.lang.Object;
			public contains(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public getFirst(): java.lang.Object;
			public getLast(): java.lang.Object;
			public indexOf(param0: java.lang.Object): number;
			public lastIndexOf(param0: java.lang.Object): number;
			public listIterator(): java.util.ListIterator;
			public listIterator(param0: number): java.util.ListIterator;
			public remove(param0: java.lang.Object): boolean;
			public remove(param0: number): java.lang.Object;
			public remove(param0: java.lang.Object): boolean;
			public removeFirst(): java.lang.Object;
			public removeLast(): java.lang.Object;
			public descendingIterator(): java.util.Iterator;
			public offerFirst(param0: java.lang.Object): boolean;
			public offerLast(param0: java.lang.Object): boolean;
			public peekFirst(): java.lang.Object;
			public peekLast(): java.lang.Object;
			public pollFirst(): java.lang.Object;
			public pollLast(): java.lang.Object;
			public pop(): java.lang.Object;
			public push(param0: java.lang.Object): void;
			public removeFirstOccurrence(param0: java.lang.Object): boolean;
			public removeLastOccurrence(param0: java.lang.Object): boolean;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public size(): number;
			public offer(param0: java.lang.Object): boolean;
			public poll(): java.lang.Object;
			public remove(): java.lang.Object;
			public peek(): java.lang.Object;
			public element(): java.lang.Object;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public toArray(): native.Array<java.lang.Object>;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
		}
	}
}
