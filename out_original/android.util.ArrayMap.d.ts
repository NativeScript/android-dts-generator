/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module util {
		export class ArrayMap {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.util.ArrayMap);
			public clear(): void;
			public ensureCapacity(param0: number): void;
			public containsKey(param0: java.lang.Object): boolean;
			public indexOfKey(param0: java.lang.Object): number;
			public containsValue(param0: java.lang.Object): boolean;
			public get(param0: java.lang.Object): java.lang.Object;
			public keyAt(param0: number): java.lang.Object;
			public valueAt(param0: number): java.lang.Object;
			public setValueAt(param0: number, param1: java.lang.Object): java.lang.Object;
			public isEmpty(): boolean;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public putAll(param0: android.util.ArrayMap): void;
			public remove(param0: java.lang.Object): java.lang.Object;
			public removeAt(param0: number): java.lang.Object;
			public size(): number;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public containsAll(param0: java.util.Collection): boolean;
			public putAll(param0: java.util.Map): void;
			public removeAll(param0: java.util.Collection): boolean;
			public retainAll(param0: java.util.Collection): boolean;
			public entrySet(): java.util.Set;
			public keySet(): java.util.Set;
			public values(): java.util.Collection;
		}
	}
}
