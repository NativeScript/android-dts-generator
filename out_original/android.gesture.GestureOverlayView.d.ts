/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module gesture {
		export class GestureOverlayView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getCurrentStroke(): java.util.ArrayList;
			public getOrientation(): number;
			public setOrientation(param0: number): void;
			public setGestureColor(param0: number): void;
			public setUncertainGestureColor(param0: number): void;
			public getUncertainGestureColor(): number;
			public getGestureColor(): number;
			public getGestureStrokeWidth(): number;
			public setGestureStrokeWidth(param0: number): void;
			public getGestureStrokeType(): number;
			public setGestureStrokeType(param0: number): void;
			public getGestureStrokeLengthThreshold(): number;
			public setGestureStrokeLengthThreshold(param0: number): void;
			public getGestureStrokeSquarenessTreshold(): number;
			public setGestureStrokeSquarenessTreshold(param0: number): void;
			public getGestureStrokeAngleThreshold(): number;
			public setGestureStrokeAngleThreshold(param0: number): void;
			public isEventsInterceptionEnabled(): boolean;
			public setEventsInterceptionEnabled(param0: boolean): void;
			public isFadeEnabled(): boolean;
			public setFadeEnabled(param0: boolean): void;
			public getGesture(): android.gesture.Gesture;
			public setGesture(param0: android.gesture.Gesture): void;
			public getGesturePath(): android.graphics.Path;
			public getGesturePath(param0: android.graphics.Path): android.graphics.Path;
			public isGestureVisible(): boolean;
			public setGestureVisible(param0: boolean): void;
			public getFadeOffset(): number;
			public setFadeOffset(param0: number): void;
			public addOnGestureListener(param0: android.gesture.GestureOverlayView.OnGestureListener): void;
			public removeOnGestureListener(param0: android.gesture.GestureOverlayView.OnGestureListener): void;
			public removeAllOnGestureListeners(): void;
			public addOnGesturePerformedListener(param0: android.gesture.GestureOverlayView.OnGesturePerformedListener): void;
			public removeOnGesturePerformedListener(param0: android.gesture.GestureOverlayView.OnGesturePerformedListener): void;
			public removeAllOnGesturePerformedListeners(): void;
			public addOnGesturingListener(param0: android.gesture.GestureOverlayView.OnGesturingListener): void;
			public removeOnGesturingListener(param0: android.gesture.GestureOverlayView.OnGesturingListener): void;
			public removeAllOnGesturingListeners(): void;
			public isGesturing(): boolean;
			public draw(param0: android.graphics.Canvas): void;
			public clear(param0: boolean): void;
			public cancelClearAnimation(): void;
			public cancelGesture(): void;
			public onDetachedFromWindow(): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public static GESTURE_STROKE_TYPE_MULTIPLE: number;
			public static GESTURE_STROKE_TYPE_SINGLE: number;
			public static ORIENTATION_HORIZONTAL: number;
			public static ORIENTATION_VERTICAL: number;
		}
		export module GestureOverlayView {
			export class OnGestureListener {
				public onGestureStarted(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
				public onGesture(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
				public onGestureEnded(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
				public onGestureCancelled(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
			}
			export class OnGesturePerformedListener {
				public onGesturePerformed(param0: android.gesture.GestureOverlayView, param1: android.gesture.Gesture): void;
			}
			export class OnGesturingListener {
				public onGesturingStarted(param0: android.gesture.GestureOverlayView): void;
				public onGesturingEnded(param0: android.gesture.GestureOverlayView): void;
			}
		}
	}
}
