/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module view {
		export class GestureDetector {
			public constructor();
			public constructor(param0: android.view.GestureDetector.OnGestureListener, param1: android.os.Handler);
			public constructor(param0: android.view.GestureDetector.OnGestureListener);
			public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener);
			public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler);
			public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler, param3: boolean);
			public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
			public setContextClickListener(param0: android.view.GestureDetector.OnContextClickListener): void;
			public setIsLongpressEnabled(param0: boolean): void;
			public isLongpressEnabled(): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
		}
		export module GestureDetector {
			export class OnContextClickListener {
				public onContextClick(param0: android.view.MotionEvent): boolean;
			}
			export class OnDoubleTapListener {
				public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
				public onDoubleTap(param0: android.view.MotionEvent): boolean;
				public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
			}
			export class OnGestureListener {
				public onDown(param0: android.view.MotionEvent): boolean;
				public onShowPress(param0: android.view.MotionEvent): void;
				public onSingleTapUp(param0: android.view.MotionEvent): boolean;
				public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public onLongPress(param0: android.view.MotionEvent): void;
				public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
			}
			export class SimpleOnGestureListener {
				public constructor();
				public onSingleTapUp(param0: android.view.MotionEvent): boolean;
				public onLongPress(param0: android.view.MotionEvent): void;
				public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public onShowPress(param0: android.view.MotionEvent): void;
				public onDown(param0: android.view.MotionEvent): boolean;
				public onDoubleTap(param0: android.view.MotionEvent): boolean;
				public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
				public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
				public onContextClick(param0: android.view.MotionEvent): boolean;
			}
		}
	}
}
