/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />

declare module java {
	export module util {
		export class List {
			public add(param0: number, param1: java.lang.Object): void;
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public clear(): void;
			public contains(param0: java.lang.Object): boolean;
			public containsAll(param0: java.util.Collection): boolean;
			public equals(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public hashCode(): number;
			public indexOf(param0: java.lang.Object): number;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator;
			public lastIndexOf(param0: java.lang.Object): number;
			public listIterator(): java.util.ListIterator;
			public listIterator(param0: number): java.util.ListIterator;
			public remove(param0: number): java.lang.Object;
			public remove(param0: java.lang.Object): boolean;
			public removeAll(param0: java.util.Collection): boolean;
			public retainAll(param0: java.util.Collection): boolean;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public size(): number;
			public subList(param0: number, param1: number): java.util.List;
			public toArray(): native.Array<java.lang.Object>;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
		}
	}
}
