/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export class AbstractCollection {
			public constructor();
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public clear(): void;
			public contains(param0: java.lang.Object): boolean;
			public containsAll(param0: java.util.Collection): boolean;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator;
			public remove(param0: java.lang.Object): boolean;
			public removeAll(param0: java.util.Collection): boolean;
			public retainAll(param0: java.util.Collection): boolean;
			public size(): number;
			public toArray(): native.Array<java.lang.Object>;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public toString(): string;
		}
	}
}
