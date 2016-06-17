/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module animation {
		export class RectEvaluator {
			public constructor();
			public constructor(param0: android.graphics.Rect);
			public evaluate(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect): android.graphics.Rect;
		}
	}
}
