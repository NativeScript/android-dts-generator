/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export class Deque {
			public addFirst(param0: java.lang.Object): void;
			public addLast(param0: java.lang.Object): void;
			public offerFirst(param0: java.lang.Object): boolean;
			public offerLast(param0: java.lang.Object): boolean;
			public removeFirst(): java.lang.Object;
			public removeLast(): java.lang.Object;
			public pollFirst(): java.lang.Object;
			public pollLast(): java.lang.Object;
			public getFirst(): java.lang.Object;
			public getLast(): java.lang.Object;
			public peekFirst(): java.lang.Object;
			public peekLast(): java.lang.Object;
			public removeFirstOccurrence(param0: java.lang.Object): boolean;
			public removeLastOccurrence(param0: java.lang.Object): boolean;
			public add(param0: java.lang.Object): boolean;
			public offer(param0: java.lang.Object): boolean;
			public remove(): java.lang.Object;
			public poll(): java.lang.Object;
			public element(): java.lang.Object;
			public peek(): java.lang.Object;
			public push(param0: java.lang.Object): void;
			public pop(): java.lang.Object;
			public remove(param0: java.lang.Object): boolean;
			public contains(param0: java.lang.Object): boolean;
			public size(): number;
			public iterator(): java.util.Iterator;
			public descendingIterator(): java.util.Iterator;
		}
	}
}
