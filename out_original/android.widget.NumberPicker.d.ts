/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeProvider.d.ts" />

declare module android {
	export module widget {
		export class NumberPicker {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onMeasure(param0: number, param1: number): void;
			public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;
			public computeScroll(): void;
			public setEnabled(param0: boolean): void;
			public scrollBy(param0: number, param1: number): void;
			public computeVerticalScrollOffset(): number;
			public computeVerticalScrollRange(): number;
			public computeVerticalScrollExtent(): number;
			public getSolidColor(): number;
			public setOnValueChangedListener(param0: android.widget.NumberPicker.OnValueChangeListener): void;
			public setOnScrollListener(param0: android.widget.NumberPicker.OnScrollListener): void;
			public setFormatter(param0: android.widget.NumberPicker.Formatter): void;
			public setValue(param0: number): void;
			public performClick(): boolean;
			public performLongClick(): boolean;
			public getWrapSelectorWheel(): boolean;
			public setWrapSelectorWheel(param0: boolean): void;
			public setOnLongPressUpdateInterval(param0: number): void;
			public getValue(): number;
			public getMinValue(): number;
			public setMinValue(param0: number): void;
			public getMaxValue(): number;
			public setMaxValue(param0: number): void;
			public getDisplayedValues(): native.Array<string>;
			public setDisplayedValues(param0: native.Array<string>): void;
			public getTopFadingEdgeStrength(): number;
			public getBottomFadingEdgeStrength(): number;
			public onDetachedFromWindow(): void;
			public drawableStateChanged(): void;
			public jumpDrawablesToCurrentState(): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public getAccessibilityNodeProvider(): android.view.accessibility.AccessibilityNodeProvider;
		}
		export module NumberPicker {
			export class Formatter {
				public format(param0: number): string;
			}
			export class OnScrollListener {
				public onScrollStateChange(param0: android.widget.NumberPicker, param1: number): void;
				public static SCROLL_STATE_FLING: number;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_TOUCH_SCROLL: number;
			}
			export class OnValueChangeListener {
				public onValueChange(param0: android.widget.NumberPicker, param1: number, param2: number): void;
			}
		}
	}
}
