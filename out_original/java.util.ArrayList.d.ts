/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export class ArrayList {
			public constructor();
			public constructor(param0: number);
			public constructor();
			public constructor(param0: java.util.Collection);
			public add(param0: number, param1: java.lang.Object): void;
			public add(param0: java.lang.Object): boolean;
			public add(param0: number, param1: java.lang.Object): void;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public clear(): void;
			public clone(): java.lang.Object;
			public ensureCapacity(param0: number): void;
			public get(param0: number): java.lang.Object;
			public size(): number;
			public isEmpty(): boolean;
			public contains(param0: java.lang.Object): boolean;
			public indexOf(param0: java.lang.Object): number;
			public lastIndexOf(param0: java.lang.Object): number;
			public remove(param0: java.lang.Object): boolean;
			public remove(param0: number): java.lang.Object;
			public remove(param0: java.lang.Object): boolean;
			public removeRange(param0: number, param1: number): void;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public toArray(): native.Array<java.lang.Object>;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public trimToSize(): void;
			public iterator(): java.util.Iterator;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
		}
	}
}
