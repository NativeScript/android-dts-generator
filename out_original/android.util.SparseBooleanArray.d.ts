/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module util {
		export class SparseBooleanArray {
			public constructor();
			public constructor(param0: number);
			public clone(): java.lang.Object;
			public clone(): android.util.SparseBooleanArray;
			public get(param0: number): boolean;
			public get(param0: number, param1: boolean): boolean;
			public delete(param0: number): void;
			public put(param0: number, param1: boolean): void;
			public size(): number;
			public keyAt(param0: number): number;
			public valueAt(param0: number): boolean;
			public indexOfKey(param0: number): number;
			public indexOfValue(param0: boolean): number;
			public clear(): void;
			public append(param0: number, param1: boolean): void;
			public toString(): string;
		}
	}
}
