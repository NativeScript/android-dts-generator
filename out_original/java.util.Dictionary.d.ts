/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module util {
		export class Dictionary {
			public constructor();
			public elements(): java.util.Enumeration;
			public get(param0: java.lang.Object): java.lang.Object;
			public isEmpty(): boolean;
			public keys(): java.util.Enumeration;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public remove(param0: java.lang.Object): java.lang.Object;
			public size(): number;
		}
	}
}
