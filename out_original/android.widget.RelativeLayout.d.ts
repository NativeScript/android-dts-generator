/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class RelativeLayout {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public shouldDelayChildPressedState(): boolean;
			public setIgnoreGravity(param0: number): void;
			public getGravity(): number;
			public setGravity(param0: number): void;
			public setHorizontalGravity(param0: number): void;
			public setVerticalGravity(param0: number): void;
			public getBaseline(): number;
			public requestLayout(): void;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.RelativeLayout.LayoutParams;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public getAccessibilityClassName(): string;
			public static ABOVE: number;
			public static ALIGN_BASELINE: number;
			public static ALIGN_BOTTOM: number;
			public static ALIGN_END: number;
			public static ALIGN_LEFT: number;
			public static ALIGN_PARENT_BOTTOM: number;
			public static ALIGN_PARENT_END: number;
			public static ALIGN_PARENT_LEFT: number;
			public static ALIGN_PARENT_RIGHT: number;
			public static ALIGN_PARENT_START: number;
			public static ALIGN_PARENT_TOP: number;
			public static ALIGN_RIGHT: number;
			public static ALIGN_START: number;
			public static ALIGN_TOP: number;
			public static BELOW: number;
			public static CENTER_HORIZONTAL: number;
			public static CENTER_IN_PARENT: number;
			public static CENTER_VERTICAL: number;
			public static END_OF: number;
			public static LEFT_OF: number;
			public static RIGHT_OF: number;
			public static START_OF: number;
			public static TRUE: number;
		}
		export module RelativeLayout {
			export class LayoutParams {
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.widget.RelativeLayout.LayoutParams);
				public debug(param0: string): string;
				public addRule(param0: number): void;
				public addRule(param0: number, param1: number): void;
				public removeRule(param0: number): void;
				public getRule(param0: number): number;
				public getRules(): native.Array<number>;
				public resolveLayoutDirection(param0: number): void;
				public alignWithParent: boolean;
			}
		}
	}
}
