/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ConcurrentLinkedQueue {
				public constructor();
				public constructor(param0: java.util.Collection);
				public add(param0: java.lang.Object): boolean;
				public offer(param0: java.lang.Object): boolean;
				public poll(): java.lang.Object;
				public peek(): java.lang.Object;
				public isEmpty(): boolean;
				public size(): number;
				public contains(param0: java.lang.Object): boolean;
				public remove(): java.lang.Object;
				public remove(param0: java.lang.Object): boolean;
				public addAll(param0: java.util.Collection): boolean;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public toArray(): native.Array<java.lang.Object>;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public iterator(): java.util.Iterator;
			}
		}
	}
}
