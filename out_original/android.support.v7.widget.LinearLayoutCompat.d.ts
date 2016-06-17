/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class LinearLayoutCompat {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setShowDividers(param0: number): void;
					public shouldDelayChildPressedState(): boolean;
					public getShowDividers(): number;
					public getDividerDrawable(): android.graphics.drawable.Drawable;
					public setDividerDrawable(param0: android.graphics.drawable.Drawable): void;
					public setDividerPadding(param0: number): void;
					public getDividerPadding(): number;
					public getDividerWidth(): number;
					public onDraw(param0: android.graphics.Canvas): void;
					public isBaselineAligned(): boolean;
					public setBaselineAligned(param0: boolean): void;
					public isMeasureWithLargestChildEnabled(): boolean;
					public setMeasureWithLargestChildEnabled(param0: boolean): void;
					public getBaseline(): number;
					public getBaselineAlignedChildIndex(): number;
					public setBaselineAlignedChildIndex(param0: number): void;
					public getWeightSum(): number;
					public setWeightSum(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public hasDividerBeforeChildAt(param0: number): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setOrientation(param0: number): void;
					public getOrientation(): number;
					public setGravity(param0: number): void;
					public setHorizontalGravity(param0: number): void;
					public setVerticalGravity(param0: number): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateDefaultLayoutParams(): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static SHOW_DIVIDER_NONE: number;
					public static SHOW_DIVIDER_BEGINNING: number;
					public static SHOW_DIVIDER_MIDDLE: number;
					public static SHOW_DIVIDER_END: number;
				}
				export module LinearLayoutCompat {
					export class DividerMode {
					}
					export class LayoutParams {
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.support.v7.widget.LinearLayoutCompat.LayoutParams);
						public weight: number;
						public gravity: number;
					}
					export class OrientationMode {
					}
				}
			}
		}
	}
}
