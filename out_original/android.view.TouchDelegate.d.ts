/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class TouchDelegate {
			public constructor();
			public constructor(param0: android.graphics.Rect, param1: android.view.View);
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public static ABOVE: number;
			public static BELOW: number;
			public static TO_LEFT: number;
			public static TO_RIGHT: number;
		}
	}
}
