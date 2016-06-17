/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module gesture {
		export class GesturePoint {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public clone(): java.lang.Object;
			public timestamp: number;
			public x: number;
			public y: number;
		}
	}
}
