/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export class Queue {
			public add(param0: java.lang.Object): boolean;
			public offer(param0: java.lang.Object): boolean;
			public remove(): java.lang.Object;
			public poll(): java.lang.Object;
			public element(): java.lang.Object;
			public peek(): java.lang.Object;
		}
	}
}
