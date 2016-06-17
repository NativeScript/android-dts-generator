/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />

declare module java {
	export module util {
		export class AbstractList {
			public constructor();
			public add(param0: java.lang.Object): boolean;
			public add(param0: number, param1: java.lang.Object): void;
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public clear(): void;
			public equals(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public hashCode(): number;
			public indexOf(param0: java.lang.Object): number;
			public iterator(): java.util.Iterator;
			public lastIndexOf(param0: java.lang.Object): number;
			public listIterator(): java.util.ListIterator;
			public listIterator(param0: number): java.util.ListIterator;
			public remove(param0: java.lang.Object): boolean;
			public remove(param0: number): java.lang.Object;
			public removeRange(param0: number, param1: number): void;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public subList(param0: number, param1: number): java.util.List;
			public modCount: number;
		}
	}
}
