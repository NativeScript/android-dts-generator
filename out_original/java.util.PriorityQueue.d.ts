/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.SortedSet.d.ts" />

declare module java {
	export module util {
		export class PriorityQueue {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: java.util.Comparator);
			public constructor(param0: java.util.Collection);
			public constructor(param0: java.util.PriorityQueue);
			public constructor(param0: java.util.SortedSet);
			public iterator(): java.util.Iterator;
			public size(): number;
			public clear(): void;
			public offer(param0: java.lang.Object): boolean;
			public poll(): java.lang.Object;
			public peek(): java.lang.Object;
			public comparator(): java.util.Comparator;
			public remove(): java.lang.Object;
			public remove(param0: java.lang.Object): boolean;
			public add(param0: java.lang.Object): boolean;
		}
	}
}
