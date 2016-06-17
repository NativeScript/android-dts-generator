/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export class EventObject {
			public constructor();
			public constructor(param0: java.lang.Object);
			public getSource(): java.lang.Object;
			public toString(): string;
			public source: java.lang.Object;
		}
	}
}
