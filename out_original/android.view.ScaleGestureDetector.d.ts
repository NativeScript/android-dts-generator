/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module view {
		export class ScaleGestureDetector {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.view.ScaleGestureDetector.OnScaleGestureListener);
			public constructor(param0: android.content.Context, param1: android.view.ScaleGestureDetector.OnScaleGestureListener, param2: android.os.Handler);
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public setQuickScaleEnabled(param0: boolean): void;
			public isQuickScaleEnabled(): boolean;
			public setStylusScaleEnabled(param0: boolean): void;
			public isStylusScaleEnabled(): boolean;
			public isInProgress(): boolean;
			public getFocusX(): number;
			public getFocusY(): number;
			public getCurrentSpan(): number;
			public getCurrentSpanX(): number;
			public getCurrentSpanY(): number;
			public getPreviousSpan(): number;
			public getPreviousSpanX(): number;
			public getPreviousSpanY(): number;
			public getScaleFactor(): number;
			public getTimeDelta(): number;
			public getEventTime(): number;
		}
		export module ScaleGestureDetector {
			export class OnScaleGestureListener {
				public onScale(param0: android.view.ScaleGestureDetector): boolean;
				public onScaleBegin(param0: android.view.ScaleGestureDetector): boolean;
				public onScaleEnd(param0: android.view.ScaleGestureDetector): void;
			}
			export class SimpleOnScaleGestureListener {
				public constructor();
				public onScale(param0: android.view.ScaleGestureDetector): boolean;
				public onScaleBegin(param0: android.view.ScaleGestureDetector): boolean;
				public onScaleEnd(param0: android.view.ScaleGestureDetector): void;
			}
		}
	}
}
