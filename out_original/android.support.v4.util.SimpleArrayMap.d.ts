/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class SimpleArrayMap {
					public constructor();
					public constructor(param0: number);
					public constructor(param0: android.support.v4.util.SimpleArrayMap);
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
					public putAll(param0: android.support.v4.util.SimpleArrayMap): void;
					public remove(param0: java.lang.Object): java.lang.Object;
					public removeAt(param0: number): java.lang.Object;
					public size(): number;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
