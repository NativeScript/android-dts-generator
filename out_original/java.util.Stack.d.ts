/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module util {
		export class Stack {
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Collection);
			public constructor();
			public empty(): boolean;
			public peek(): java.lang.Object;
			public pop(): java.lang.Object;
			public push(param0: java.lang.Object): java.lang.Object;
			public search(param0: java.lang.Object): number;
		}
	}
}
