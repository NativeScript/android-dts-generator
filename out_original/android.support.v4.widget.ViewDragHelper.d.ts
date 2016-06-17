/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ViewDragHelper {
					public static create(param0: android.view.ViewGroup, param1: android.support.v4.widget.ViewDragHelper.Callback): android.support.v4.widget.ViewDragHelper;
					public static create(param0: android.view.ViewGroup, param1: number, param2: android.support.v4.widget.ViewDragHelper.Callback): android.support.v4.widget.ViewDragHelper;
					public setMinVelocity(param0: number): void;
					public getMinVelocity(): number;
					public getViewDragState(): number;
					public setEdgeTrackingEnabled(param0: number): void;
					public getEdgeSize(): number;
					public captureChildView(param0: android.view.View, param1: number): void;
					public getCapturedView(): android.view.View;
					public getActivePointerId(): number;
					public getTouchSlop(): number;
					public cancel(): void;
					public abort(): void;
					public smoothSlideViewTo(param0: android.view.View, param1: number, param2: number): boolean;
					public settleCapturedViewAt(param0: number, param1: number): boolean;
					public flingCapturedView(param0: number, param1: number, param2: number, param3: number): void;
					public continueSettling(param0: boolean): boolean;
					public isPointerDown(param0: number): boolean;
					public canScroll(param0: android.view.View, param1: boolean, param2: number, param3: number, param4: number, param5: number): boolean;
					public shouldInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public processTouchEvent(param0: android.view.MotionEvent): void;
					public checkTouchSlop(param0: number): boolean;
					public checkTouchSlop(param0: number, param1: number): boolean;
					public isEdgeTouched(param0: number): boolean;
					public isEdgeTouched(param0: number, param1: number): boolean;
					public isCapturedViewUnder(param0: number, param1: number): boolean;
					public isViewUnder(param0: android.view.View, param1: number, param2: number): boolean;
					public findTopChildUnder(param0: number, param1: number): android.view.View;
					public static INVALID_POINTER: number;
					public static STATE_IDLE: number;
					public static STATE_DRAGGING: number;
					public static STATE_SETTLING: number;
					public static EDGE_LEFT: number;
					public static EDGE_RIGHT: number;
					public static EDGE_TOP: number;
					public static EDGE_BOTTOM: number;
					public static EDGE_ALL: number;
					public static DIRECTION_HORIZONTAL: number;
					public static DIRECTION_VERTICAL: number;
					public static DIRECTION_ALL: number;
				}
				export module ViewDragHelper {
					export class Callback {
						public constructor();
						public onViewDragStateChanged(param0: number): void;
						public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public onViewCaptured(param0: android.view.View, param1: number): void;
						public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
						public onEdgeTouched(param0: number, param1: number): void;
						public onEdgeLock(param0: number): boolean;
						public onEdgeDragStarted(param0: number, param1: number): void;
						public getOrderedChildIndex(param0: number): number;
						public getViewHorizontalDragRange(param0: android.view.View): number;
						public getViewVerticalDragRange(param0: android.view.View): number;
						public tryCaptureView(param0: android.view.View, param1: number): boolean;
						public clampViewPositionHorizontal(param0: android.view.View, param1: number, param2: number): number;
						public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}
