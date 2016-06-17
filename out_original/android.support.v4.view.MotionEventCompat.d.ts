/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MotionEventCompat {
					public static getActionMasked(param0: android.view.MotionEvent): number;
					public static getActionIndex(param0: android.view.MotionEvent): number;
					public static findPointerIndex(param0: android.view.MotionEvent, param1: number): number;
					public static getPointerId(param0: android.view.MotionEvent, param1: number): number;
					public static getX(param0: android.view.MotionEvent, param1: number): number;
					public static getY(param0: android.view.MotionEvent, param1: number): number;
					public static getPointerCount(param0: android.view.MotionEvent): number;
					public static getSource(param0: android.view.MotionEvent): number;
					public static getAxisValue(param0: android.view.MotionEvent, param1: number): number;
					public static getAxisValue(param0: android.view.MotionEvent, param1: number, param2: number): number;
					public static ACTION_MASK: number;
					public static ACTION_POINTER_DOWN: number;
					public static ACTION_POINTER_UP: number;
					public static ACTION_HOVER_MOVE: number;
					public static ACTION_SCROLL: number;
					public static ACTION_POINTER_INDEX_MASK: number;
					public static ACTION_POINTER_INDEX_SHIFT: number;
					public static ACTION_HOVER_ENTER: number;
					public static ACTION_HOVER_EXIT: number;
					public static AXIS_X: number;
					public static AXIS_Y: number;
					public static AXIS_PRESSURE: number;
					public static AXIS_SIZE: number;
					public static AXIS_TOUCH_MAJOR: number;
					public static AXIS_TOUCH_MINOR: number;
					public static AXIS_TOOL_MAJOR: number;
					public static AXIS_TOOL_MINOR: number;
					public static AXIS_ORIENTATION: number;
					public static AXIS_VSCROLL: number;
					public static AXIS_HSCROLL: number;
					public static AXIS_Z: number;
					public static AXIS_RX: number;
					public static AXIS_RY: number;
					public static AXIS_RZ: number;
					public static AXIS_HAT_X: number;
					public static AXIS_HAT_Y: number;
					public static AXIS_LTRIGGER: number;
					public static AXIS_RTRIGGER: number;
					public static AXIS_THROTTLE: number;
					public static AXIS_RUDDER: number;
					public static AXIS_WHEEL: number;
					public static AXIS_GAS: number;
					public static AXIS_BRAKE: number;
					public static AXIS_DISTANCE: number;
					public static AXIS_TILT: number;
					public static AXIS_GENERIC_1: number;
					public static AXIS_GENERIC_2: number;
					public static AXIS_GENERIC_3: number;
					public static AXIS_GENERIC_4: number;
					public static AXIS_GENERIC_5: number;
					public static AXIS_GENERIC_6: number;
					public static AXIS_GENERIC_7: number;
					public static AXIS_GENERIC_8: number;
					public static AXIS_GENERIC_9: number;
					public static AXIS_GENERIC_10: number;
					public static AXIS_GENERIC_11: number;
					public static AXIS_GENERIC_12: number;
					public static AXIS_GENERIC_13: number;
					public static AXIS_GENERIC_14: number;
					public static AXIS_GENERIC_15: number;
					public static AXIS_GENERIC_16: number;
				}
				export module MotionEventCompat {
					export class BaseMotionEventVersionImpl {
						public findPointerIndex(param0: android.view.MotionEvent, param1: number): number;
						public getPointerId(param0: android.view.MotionEvent, param1: number): number;
						public getX(param0: android.view.MotionEvent, param1: number): number;
						public getY(param0: android.view.MotionEvent, param1: number): number;
						public getPointerCount(param0: android.view.MotionEvent): number;
						public getSource(param0: android.view.MotionEvent): number;
						public getAxisValue(param0: android.view.MotionEvent, param1: number): number;
						public getAxisValue(param0: android.view.MotionEvent, param1: number, param2: number): number;
					}
					export class EclairMotionEventVersionImpl {
						public findPointerIndex(param0: android.view.MotionEvent, param1: number): number;
						public getPointerId(param0: android.view.MotionEvent, param1: number): number;
						public getX(param0: android.view.MotionEvent, param1: number): number;
						public getY(param0: android.view.MotionEvent, param1: number): number;
						public getPointerCount(param0: android.view.MotionEvent): number;
					}
					export class GingerbreadMotionEventVersionImpl {
						public getSource(param0: android.view.MotionEvent): number;
					}
					export class HoneycombMr1MotionEventVersionImpl {
						public getAxisValue(param0: android.view.MotionEvent, param1: number, param2: number): number;
						public getAxisValue(param0: android.view.MotionEvent, param1: number): number;
						public getAxisValue(param0: android.view.MotionEvent, param1: number, param2: number): number;
					}
					export class MotionEventVersionImpl {
						public findPointerIndex(param0: android.view.MotionEvent, param1: number): number;
						public getPointerId(param0: android.view.MotionEvent, param1: number): number;
						public getX(param0: android.view.MotionEvent, param1: number): number;
						public getY(param0: android.view.MotionEvent, param1: number): number;
						public getPointerCount(param0: android.view.MotionEvent): number;
						public getSource(param0: android.view.MotionEvent): number;
						public getAxisValue(param0: android.view.MotionEvent, param1: number): number;
						public getAxisValue(param0: android.view.MotionEvent, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}
