/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v4.widget.ViewDragHelper.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class DrawerLayout {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setDrawerElevation(param0: number): void;
					public getDrawerElevation(): number;
					public setChildInsets(param0: java.lang.Object, param1: boolean): void;
					public setDrawerShadow(param0: android.graphics.drawable.Drawable, param1: number): void;
					public setDrawerShadow(param0: number, param1: number): void;
					public setScrimColor(param0: number): void;
					public setDrawerListener(param0: android.support.v4.widget.DrawerLayout.DrawerListener): void;
					public addDrawerListener(param0: android.support.v4.widget.DrawerLayout.DrawerListener): void;
					public removeDrawerListener(param0: android.support.v4.widget.DrawerLayout.DrawerListener): void;
					public setDrawerLockMode(param0: number): void;
					public setDrawerLockMode(param0: number, param1: number): void;
					public setDrawerLockMode(param0: number, param1: android.view.View): void;
					public getDrawerLockMode(param0: number): number;
					public getDrawerLockMode(param0: android.view.View): number;
					public setDrawerTitle(param0: number, param1: string): void;
					public getDrawerTitle(param0: number): string;
					public onDetachedFromWindow(): void;
					public onAttachedToWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public requestLayout(): void;
					public computeScroll(): void;
					public setStatusBarBackground(param0: android.graphics.drawable.Drawable): void;
					public getStatusBarBackgroundDrawable(): android.graphics.drawable.Drawable;
					public setStatusBarBackground(param0: number): void;
					public setStatusBarBackgroundColor(param0: number): void;
					public onRtlPropertiesChanged(param0: number): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public closeDrawers(): void;
					public openDrawer(param0: android.view.View): void;
					public openDrawer(param0: number): void;
					public closeDrawer(param0: android.view.View): void;
					public closeDrawer(param0: number): void;
					public isDrawerOpen(param0: android.view.View): boolean;
					public isDrawerOpen(param0: number): boolean;
					public isDrawerVisible(param0: android.view.View): boolean;
					public isDrawerVisible(param0: number): boolean;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public addFocusables(param0: java.util.ArrayList, param1: number): void;
					public addFocusables(param0: java.util.ArrayList, param1: number, param2: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public addView(param0: android.view.View): void;
					public addView(param0: android.view.View, param1: number): void;
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public static STATE_IDLE: number;
					public static STATE_DRAGGING: number;
					public static STATE_SETTLING: number;
					public static LOCK_MODE_UNLOCKED: number;
					public static LOCK_MODE_LOCKED_CLOSED: number;
					public static LOCK_MODE_LOCKED_OPEN: number;
					public static LOCK_MODE_UNDEFINED: number;
				}
				export module DrawerLayout {
					export class AccessibilityDelegate {
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					}
					export class ChildAccessibilityDelegate {
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					}
					export class DrawerLayoutCompatImpl {
						public configureApplyInsets(param0: android.view.View): void;
						public dispatchChildInsets(param0: android.view.View, param1: java.lang.Object, param2: number): void;
						public applyMarginInsets(param0: android.view.ViewGroup.MarginLayoutParams, param1: java.lang.Object, param2: number): void;
						public getTopInset(param0: java.lang.Object): number;
						public getDefaultStatusBarBackground(param0: android.content.Context): android.graphics.drawable.Drawable;
					}
					export class DrawerLayoutCompatImplApi21 {
						public configureApplyInsets(param0: android.view.View): void;
						public dispatchChildInsets(param0: android.view.View, param1: java.lang.Object, param2: number): void;
						public applyMarginInsets(param0: android.view.ViewGroup.MarginLayoutParams, param1: java.lang.Object, param2: number): void;
						public getTopInset(param0: java.lang.Object): number;
						public getDefaultStatusBarBackground(param0: android.content.Context): android.graphics.drawable.Drawable;
					}
					export class DrawerLayoutCompatImplBase {
						public configureApplyInsets(param0: android.view.View): void;
						public dispatchChildInsets(param0: android.view.View, param1: java.lang.Object, param2: number): void;
						public applyMarginInsets(param0: android.view.ViewGroup.MarginLayoutParams, param1: java.lang.Object, param2: number): void;
						public getTopInset(param0: java.lang.Object): number;
						public getDefaultStatusBarBackground(param0: android.content.Context): android.graphics.drawable.Drawable;
					}
					export class DrawerListener {
						public onDrawerSlide(param0: android.view.View, param1: number): void;
						public onDrawerOpened(param0: android.view.View): void;
						public onDrawerClosed(param0: android.view.View): void;
						public onDrawerStateChanged(param0: number): void;
					}
					export class LayoutParams {
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: android.support.v4.widget.DrawerLayout.LayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public gravity: number;
					}
					export class SavedState {
						public constructor(param0: android.os.Parcelable);
						public constructor();
						public constructor(param0: android.os.Parcel);
						public constructor(param0: android.os.Parcelable);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export class SimpleDrawerListener {
						public constructor();
						public onDrawerSlide(param0: android.view.View, param1: number): void;
						public onDrawerOpened(param0: android.view.View): void;
						public onDrawerClosed(param0: android.view.View): void;
						public onDrawerStateChanged(param0: number): void;
					}
					export class ViewDragCallback {
						public constructor();
						public constructor(param0: android.support.v4.widget.DrawerLayout, param1: number);
						public setDragger(param0: android.support.v4.widget.ViewDragHelper): void;
						public removeCallbacks(): void;
						public tryCaptureView(param0: android.view.View, param1: number): boolean;
						public onViewDragStateChanged(param0: number): void;
						public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public onViewCaptured(param0: android.view.View, param1: number): void;
						public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
						public onEdgeTouched(param0: number, param1: number): void;
						public onEdgeLock(param0: number): boolean;
						public onEdgeDragStarted(param0: number, param1: number): void;
						public getViewHorizontalDragRange(param0: android.view.View): number;
						public clampViewPositionHorizontal(param0: android.view.View, param1: number, param2: number): number;
						public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}
