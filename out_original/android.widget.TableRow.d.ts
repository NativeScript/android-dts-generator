/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class TableRow {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public getVirtualChildAt(param0: number): android.view.View;
			public getVirtualChildCount(): number;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.TableRow.LayoutParams;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;
			public getAccessibilityClassName(): string;
		}
		export module TableRow {
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
				public constructor(param0: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;
				public column: number;
				public span: number;
			}
		}
	}
}
