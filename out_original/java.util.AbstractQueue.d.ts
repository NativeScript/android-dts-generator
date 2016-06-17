/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module util {
		export class AbstractQueue {
			public constructor();
			public add(param0: java.lang.Object): boolean;
			public remove(param0: java.lang.Object): boolean;
			public remove(): java.lang.Object;
			public element(): java.lang.Object;
			public clear(): void;
			public addAll(param0: java.util.Collection): boolean;
		}
	}
}
