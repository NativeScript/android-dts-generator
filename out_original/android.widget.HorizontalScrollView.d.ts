/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class HorizontalScrollView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getLeftFadingEdgeStrength(): number;
			public getRightFadingEdgeStrength(): number;
			public getMaxScrollAmount(): number;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: number, param2: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public isFillViewport(): boolean;
			public setFillViewport(param0: boolean): void;
			public isSmoothScrollingEnabled(): boolean;
			public setSmoothScrollingEnabled(param0: boolean): void;
			public onMeasure(param0: number, param1: number): void;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public executeKeyEvent(param0: android.view.KeyEvent): boolean;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public shouldDelayChildPressedState(): boolean;
			public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
			public getAccessibilityClassName(): string;
			public pageScroll(param0: number): boolean;
			public fullScroll(param0: number): boolean;
			public arrowScroll(param0: number): boolean;
			public smoothScrollBy(param0: number, param1: number): void;
			public smoothScrollTo(param0: number, param1: number): void;
			public computeHorizontalScrollRange(): number;
			public computeHorizontalScrollOffset(): number;
			public measureChild(param0: android.view.View, param1: number, param2: number): void;
			public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public computeScroll(): void;
			public computeScrollDeltaToGetChildRectOnScreen(param0: android.graphics.Rect): number;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public requestLayout(): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public fling(param0: number): void;
			public scrollTo(param0: number, param1: number): void;
			public setOverScrollMode(param0: number): void;
			public draw(param0: android.graphics.Canvas): void;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public onSaveInstanceState(): android.os.Parcelable;
		}
	}
}
