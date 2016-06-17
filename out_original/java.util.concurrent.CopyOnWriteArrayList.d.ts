/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class CopyOnWriteArrayList {
				public constructor();
				public constructor(param0: java.util.Collection);
				public constructor(param0: native.Array<java.lang.Object>);
				public clone(): java.lang.Object;
				public size(): number;
				public get(param0: number): java.lang.Object;
				public contains(param0: java.lang.Object): boolean;
				public containsAll(param0: java.util.Collection): boolean;
				public indexOf(param0: java.lang.Object, param1: number): number;
				public indexOf(param0: java.lang.Object): number;
				public lastIndexOf(param0: java.lang.Object, param1: number): number;
				public lastIndexOf(param0: java.lang.Object): number;
				public isEmpty(): boolean;
				public iterator(): java.util.Iterator;
				public listIterator(param0: number): java.util.ListIterator;
				public listIterator(): java.util.ListIterator;
				public subList(param0: number, param1: number): java.util.List;
				public toArray(): native.Array<java.lang.Object>;
				public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public add(param0: java.lang.Object): boolean;
				public add(param0: number, param1: java.lang.Object): void;
				public addAll(param0: java.util.Collection): boolean;
				public addAll(param0: number, param1: java.util.Collection): boolean;
				public addAllAbsent(param0: java.util.Collection): number;
				public addIfAbsent(param0: java.lang.Object): boolean;
				public clear(): void;
				public remove(param0: number): java.lang.Object;
				public remove(param0: java.lang.Object): boolean;
				public removeAll(param0: java.util.Collection): boolean;
				public retainAll(param0: java.util.Collection): boolean;
				public set(param0: number, param1: java.lang.Object): java.lang.Object;
			}
		}
	}
}
