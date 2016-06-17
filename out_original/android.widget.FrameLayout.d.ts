/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class FrameLayout {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setForegroundGravity(param0: number): void;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.widget.FrameLayout.LayoutParams;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public setMeasureAllChildren(param0: boolean): void;
			public getConsiderGoneChildrenWhenMeasuring(): boolean;
			public getMeasureAllChildren(): boolean;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.FrameLayout.LayoutParams;
			public shouldDelayChildPressedState(): boolean;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public getAccessibilityClassName(): string;
		}
		export module FrameLayout {
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
				public constructor(param0: android.widget.FrameLayout.LayoutParams);
				public gravity: number;
			}
		}
	}
}
