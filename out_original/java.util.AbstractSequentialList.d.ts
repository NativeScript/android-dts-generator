/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />

declare module java {
	export module util {
		export class AbstractSequentialList {
			public constructor();
			public add(param0: java.lang.Object): boolean;
			public add(param0: number, param1: java.lang.Object): void;
			public addAll(param0: java.util.Collection): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public get(param0: number): java.lang.Object;
			public iterator(): java.util.Iterator;
			public listIterator(): java.util.ListIterator;
			public listIterator(param0: number): java.util.ListIterator;
			public remove(param0: java.lang.Object): boolean;
			public remove(param0: number): java.lang.Object;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
		}
	}
}
