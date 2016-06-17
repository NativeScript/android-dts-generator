/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class TableLayout {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;
			public requestLayout(): void;
			public isShrinkAllColumns(): boolean;
			public setShrinkAllColumns(param0: boolean): void;
			public isStretchAllColumns(): boolean;
			public setStretchAllColumns(param0: boolean): void;
			public setColumnCollapsed(param0: number, param1: boolean): void;
			public isColumnCollapsed(param0: number): boolean;
			public setColumnStretchable(param0: number, param1: boolean): void;
			public isColumnStretchable(param0: number): boolean;
			public setColumnShrinkable(param0: number, param1: boolean): void;
			public isColumnShrinkable(param0: number): boolean;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: number, param2: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.TableLayout.LayoutParams;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;
			public getAccessibilityClassName(): string;
		}
		export module TableLayout {
			export class LayoutParams {
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.widget.LinearLayout.LayoutParams);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public constructor();
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;
			}
		}
	}
}
