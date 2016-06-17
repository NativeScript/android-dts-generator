/// <reference path="./_helpers.d.ts" />

declare module android {
	export module animation {
		export class IntArrayEvaluator {
			public constructor();
			public constructor(param0: native.Array<number>);
			public evaluate(param0: number, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
		}
	}
}
