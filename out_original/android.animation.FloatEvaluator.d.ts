/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />

declare module android {
	export module animation {
		export class FloatEvaluator {
			public constructor();
			public evaluate(param0: number, param1: java.lang.Number, param2: java.lang.Number): java.lang.Float;
		}
	}
}
