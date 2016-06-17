/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />

declare module android {
	export module animation {
		export class PointFEvaluator {
			public constructor();
			public constructor(param0: android.graphics.PointF);
			public evaluate(param0: number, param1: android.graphics.PointF, param2: android.graphics.PointF): android.graphics.PointF;
		}
	}
}
