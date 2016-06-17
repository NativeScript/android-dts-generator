/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MotionEventCompatEclair {
					public static findPointerIndex(param0: android.view.MotionEvent, param1: number): number;
					public static getPointerId(param0: android.view.MotionEvent, param1: number): number;
					public static getX(param0: android.view.MotionEvent, param1: number): number;
					public static getY(param0: android.view.MotionEvent, param1: number): number;
					public static getPointerCount(param0: android.view.MotionEvent): number;
				}
			}
		}
	}
}
