/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class GridLayout {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getOrientation(): number;
			public setOrientation(param0: number): void;
			public getRowCount(): number;
			public setRowCount(param0: number): void;
			public getColumnCount(): number;
			public setColumnCount(param0: number): void;
			public getUseDefaultMargins(): boolean;
			public setUseDefaultMargins(param0: boolean): void;
			public getAlignmentMode(): number;
			public setAlignmentMode(param0: number): void;
			public isRowOrderPreserved(): boolean;
			public setRowOrderPreserved(param0: boolean): void;
			public isColumnOrderPreserved(): boolean;
			public setColumnOrderPreserved(param0: boolean): void;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.widget.GridLayout.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.GridLayout.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.GridLayout.LayoutParams;
			public onViewAdded(param0: android.view.View): void;
			public onViewRemoved(param0: android.view.View): void;
			public onMeasure(param0: number, param1: number): void;
			public requestLayout(): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public getAccessibilityClassName(): string;
			public static spec(param0: number, param1: number, param2: android.widget.GridLayout.Alignment, param3: number): android.widget.GridLayout.Spec;
			public static spec(param0: number, param1: android.widget.GridLayout.Alignment, param2: number): android.widget.GridLayout.Spec;
			public static spec(param0: number, param1: number, param2: number): android.widget.GridLayout.Spec;
			public static spec(param0: number, param1: number): android.widget.GridLayout.Spec;
			public static spec(param0: number, param1: number, param2: android.widget.GridLayout.Alignment): android.widget.GridLayout.Spec;
			public static spec(param0: number, param1: android.widget.GridLayout.Alignment): android.widget.GridLayout.Spec;
			public static spec(param0: number, param1: number): android.widget.GridLayout.Spec;
			public static spec(param0: number): android.widget.GridLayout.Spec;
			public static ALIGN_BOUNDS: number;
			public static ALIGN_MARGINS: number;
			public static BASELINE: android.widget.GridLayout.Alignment;
			public static BOTTOM: android.widget.GridLayout.Alignment;
			public static CENTER: android.widget.GridLayout.Alignment;
			public static END: android.widget.GridLayout.Alignment;
			public static FILL: android.widget.GridLayout.Alignment;
			public static HORIZONTAL: number;
			public static LEFT: android.widget.GridLayout.Alignment;
			public static RIGHT: android.widget.GridLayout.Alignment;
			public static START: android.widget.GridLayout.Alignment;
			public static TOP: android.widget.GridLayout.Alignment;
			public static UNDEFINED: number;
			public static VERTICAL: number;
		}
		export module GridLayout {
			export class Alignment {
			}
			export class LayoutParams {
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor();
				public constructor(param0: android.widget.GridLayout.Spec, param1: android.widget.GridLayout.Spec);
				public constructor();
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.widget.GridLayout.LayoutParams);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public setGravity(param0: number): void;
				public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public columnSpec: android.widget.GridLayout.Spec;
				public rowSpec: android.widget.GridLayout.Spec;
			}
			export class Spec {
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
			}
		}
	}
}
