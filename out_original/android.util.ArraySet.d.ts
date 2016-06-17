/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module util {
		export class ArraySet {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.util.ArraySet);
			public clear(): void;
			public ensureCapacity(param0: number): void;
			public contains(param0: java.lang.Object): boolean;
			public indexOf(param0: java.lang.Object): number;
			public valueAt(param0: number): java.lang.Object;
			public isEmpty(): boolean;
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: android.util.ArraySet): void;
			public remove(param0: java.lang.Object): boolean;
			public removeAt(param0: number): java.lang.Object;
			public removeAll(param0: android.util.ArraySet): boolean;
			public size(): number;
			public toArray(): native.Array<java.lang.Object>;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public iterator(): java.util.Iterator;
			public containsAll(param0: java.util.Collection): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public removeAll(param0: java.util.Collection): boolean;
			public retainAll(param0: java.util.Collection): boolean;
		}
	}
}
