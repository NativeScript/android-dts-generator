/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class NestedScrollView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setNestedScrollingEnabled(param0: boolean): void;
					public isNestedScrollingEnabled(): boolean;
					public startNestedScroll(param0: number): boolean;
					public stopNestedScroll(): void;
					public hasNestedScrollingParent(): boolean;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public getNestedScrollAxes(): number;
					public shouldDelayChildPressedState(): boolean;
					public getTopFadingEdgeStrength(): number;
					public getBottomFadingEdgeStrength(): number;
					public getMaxScrollAmount(): number;
					public addView(param0: android.view.View, param1: number): void;
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public addView(param0: android.view.View): void;
					public addView(param0: android.view.View, param1: number): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public setOnScrollChangeListener(param0: android.view.View.OnScrollChangeListener): void;
					public setOnScrollChangeListener(param0: android.support.v4.widget.NestedScrollView.OnScrollChangeListener): void;
					public isFillViewport(): boolean;
					public setFillViewport(param0: boolean): void;
					public isSmoothScrollingEnabled(): boolean;
					public setSmoothScrollingEnabled(param0: boolean): void;
					public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
					public onMeasure(param0: number, param1: number): void;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public executeKeyEvent(param0: android.view.KeyEvent): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
					public pageScroll(param0: number): boolean;
					public fullScroll(param0: number): boolean;
					public arrowScroll(param0: number): boolean;
					public smoothScrollBy(param0: number, param1: number): void;
					public smoothScrollTo(param0: number, param1: number): void;
					public computeVerticalScrollRange(): number;
					public computeVerticalScrollOffset(): number;
					public computeVerticalScrollExtent(): number;
					public computeHorizontalScrollRange(): number;
					public computeHorizontalScrollOffset(): number;
					public computeHorizontalScrollExtent(): number;
					public measureChild(param0: android.view.View, param1: number, param2: number): void;
					public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public computeScroll(): void;
					public computeScrollDeltaToGetChildRectOnScreen(param0: android.graphics.Rect): number;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public requestLayout(): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onAttachedToWindow(): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public fling(param0: number): void;
					public scrollTo(param0: number, param1: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module NestedScrollView {
					export class AccessibilityDelegate {
						public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					}
					export class OnScrollChangeListener {
						public onScrollChange(param0: android.support.v4.widget.NestedScrollView, param1: number, param2: number, param3: number, param4: number): void;
					}
					export class SavedState {
						public constructor(param0: android.os.Parcelable);
						public constructor();
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
						public scrollPosition: number;
						public static CREATOR: android.os.Parcelable.Creator;
					}
				}
			}
		}
	}
}
