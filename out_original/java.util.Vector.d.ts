/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module util {
		export class Vector {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Collection);
			public add(param0: java.lang.Object): boolean;
			public add(param0: number, param1: java.lang.Object): void;
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public addElement(param0: java.lang.Object): void;
			public capacity(): number;
			public clear(): void;
			public clone(): java.lang.Object;
			public contains(param0: java.lang.Object): boolean;
			public containsAll(param0: java.util.Collection): boolean;
			public copyInto(param0: native.Array<java.lang.Object>): void;
			public elementAt(param0: number): java.lang.Object;
			public elements(): java.util.Enumeration;
			public ensureCapacity(param0: number): void;
			public equals(param0: java.lang.Object): boolean;
			public firstElement(): java.lang.Object;
			public get(param0: number): java.lang.Object;
			public hashCode(): number;
			public indexOf(param0: java.lang.Object): number;
			public indexOf(param0: java.lang.Object, param1: number): number;
			public insertElementAt(param0: java.lang.Object, param1: number): void;
			public isEmpty(): boolean;
			public lastElement(): java.lang.Object;
			public lastIndexOf(param0: java.lang.Object): number;
			public lastIndexOf(param0: java.lang.Object, param1: number): number;
			public remove(param0: java.lang.Object): boolean;
			public remove(param0: number): java.lang.Object;
			public remove(param0: java.lang.Object): boolean;
			public removeAll(param0: java.util.Collection): boolean;
			public removeAllElements(): void;
			public removeElement(param0: java.lang.Object): boolean;
			public removeElementAt(param0: number): void;
			public removeRange(param0: number, param1: number): void;
			public retainAll(param0: java.util.Collection): boolean;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public setElementAt(param0: java.lang.Object, param1: number): void;
			public setSize(param0: number): void;
			public size(): number;
			public subList(param0: number, param1: number): java.util.List;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public toArray(): native.Array<java.lang.Object>;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public toString(): string;
			public trimToSize(): void;
			public capacityIncrement: number;
			public elementCount: number;
			public elementData: native.Array<java.lang.Object>;
		}
	}
}
