/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module util {
		export class SparseIntArray {
			public constructor();
			public constructor(param0: number);
			public clone(): java.lang.Object;
			public clone(): android.util.SparseIntArray;
			public get(param0: number): number;
			public get(param0: number, param1: number): number;
			public delete(param0: number): void;
			public removeAt(param0: number): void;
			public put(param0: number, param1: number): void;
			public size(): number;
			public keyAt(param0: number): number;
			public valueAt(param0: number): number;
			public indexOfKey(param0: number): number;
			public indexOfValue(param0: number): number;
			public clear(): void;
			public append(param0: number, param1: number): void;
			public toString(): string;
		}
	}
}
