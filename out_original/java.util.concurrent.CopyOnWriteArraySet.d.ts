/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class CopyOnWriteArraySet {
				public constructor();
				public constructor(param0: java.util.Collection);
				public size(): number;
				public isEmpty(): boolean;
				public contains(param0: java.lang.Object): boolean;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public toArray(): native.Array<java.lang.Object>;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public clear(): void;
				public remove(param0: java.lang.Object): boolean;
				public add(param0: java.lang.Object): boolean;
				public containsAll(param0: java.util.Collection): boolean;
				public addAll(param0: java.util.Collection): boolean;
				public removeAll(param0: java.util.Collection): boolean;
				public retainAll(param0: java.util.Collection): boolean;
				public iterator(): java.util.Iterator;
				public equals(param0: java.lang.Object): boolean;
			}
		}
	}
}
