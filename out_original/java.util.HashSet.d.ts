/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export class HashSet {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Collection);
			public add(param0: java.lang.Object): boolean;
			public clear(): void;
			public clone(): java.lang.Object;
			public contains(param0: java.lang.Object): boolean;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator;
			public remove(param0: java.lang.Object): boolean;
			public size(): number;
		}
	}
}
