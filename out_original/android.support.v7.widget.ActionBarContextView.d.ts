/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarContextView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDetachedFromWindow(): void;
					public setContentHeight(param0: number): void;
					public setCustomView(param0: android.view.View): void;
					public setTitle(param0: string): void;
					public setSubtitle(param0: string): void;
					public getTitle(): string;
					public getSubtitle(): string;
					public initForMode(param0: android.support.v7.view.ActionMode): void;
					public closeMode(): void;
					public killMode(): void;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public shouldDelayChildPressedState(): boolean;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public setTitleOptional(param0: boolean): void;
					public isTitleOptional(): boolean;
				}
			}
		}
	}
}
