/// <reference path="./_helpers.d.ts" />

declare module android {
	export module renderscript {
		export class Float3 {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public x: number;
			public y: number;
			public z: number;
		}
	}
}
