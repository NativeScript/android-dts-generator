/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class MapCollections {
					public static containsAllHelper(param0: java.util.Map, param1: java.util.Collection): boolean;
					public static removeAllHelper(param0: java.util.Map, param1: java.util.Collection): boolean;
					public static retainAllHelper(param0: java.util.Map, param1: java.util.Collection): boolean;
					public toArrayHelper(param0: number): native.Array<java.lang.Object>;
					public toArrayHelper(param0: native.Array<java.lang.Object>, param1: number): native.Array<java.lang.Object>;
					public static equalsSetHelper(param0: java.util.Set, param1: java.lang.Object): boolean;
					public getEntrySet(): java.util.Set;
					public getKeySet(): java.util.Set;
					public getValues(): java.util.Collection;
					public colGetSize(): number;
					public colGetEntry(param0: number, param1: number): java.lang.Object;
					public colIndexOfKey(param0: java.lang.Object): number;
					public colIndexOfValue(param0: java.lang.Object): number;
					public colGetMap(): java.util.Map;
					public colPut(param0: java.lang.Object, param1: java.lang.Object): void;
					public colSetValue(param0: number, param1: java.lang.Object): java.lang.Object;
					public colRemoveAt(param0: number): void;
					public colClear(): void;
				}
				export module MapCollections {
					export class ArrayIterator {
						public hasNext(): boolean;
						public next(): java.lang.Object;
						public remove(): void;
					}
					export class EntrySet {
						public add(param0: java.util.Map.Entry): boolean;
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
						public equals(param0: java.lang.Object): boolean;
						public hashCode(): number;
					}
					export class KeySet {
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
						public equals(param0: java.lang.Object): boolean;
						public hashCode(): number;
					}
					export class MapIterator {
						public hasNext(): boolean;
						public next(): java.util.Map.Entry;
						public remove(): void;
						public getKey(): java.lang.Object;
						public getValue(): java.lang.Object;
						public setValue(param0: java.lang.Object): java.lang.Object;
						public equals(param0: java.lang.Object): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export class ValuesCollection {
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
					}
				}
			}
		}
	}
}
