/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class GestureDetectorCompat {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener);
					public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler);
					public isLongpressEnabled(): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public setIsLongpressEnabled(param0: boolean): void;
					public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
				}
				export module GestureDetectorCompat {
					export class GestureDetectorCompatImpl {
						public isLongpressEnabled(): boolean;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public setIsLongpressEnabled(param0: boolean): void;
						public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
					}
					export class GestureDetectorCompatImplBase {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler);
						public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
						public setIsLongpressEnabled(param0: boolean): void;
						public isLongpressEnabled(): boolean;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
					}
					export module GestureDetectorCompatImplBase {
						export class GestureHandler {
							public handleMessage(param0: android.os.Message): void;
						}
					}
					export class GestureDetectorCompatImplJellybeanMr2 {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler);
						public isLongpressEnabled(): boolean;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public setIsLongpressEnabled(param0: boolean): void;
						public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
					}
				}
			}
		}
	}
}
