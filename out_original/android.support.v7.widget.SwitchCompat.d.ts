/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class SwitchCompat {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setSwitchTextAppearance(param0: android.content.Context, param1: number): void;
					public setSwitchTypeface(param0: android.graphics.Typeface, param1: number): void;
					public setSwitchTypeface(param0: android.graphics.Typeface): void;
					public setSwitchPadding(param0: number): void;
					public getSwitchPadding(): number;
					public setSwitchMinWidth(param0: number): void;
					public getSwitchMinWidth(): number;
					public setThumbTextPadding(param0: number): void;
					public getThumbTextPadding(): number;
					public setTrackDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTrackResource(param0: number): void;
					public getTrackDrawable(): android.graphics.drawable.Drawable;
					public setThumbDrawable(param0: android.graphics.drawable.Drawable): void;
					public setThumbResource(param0: number): void;
					public getThumbDrawable(): android.graphics.drawable.Drawable;
					public setSplitTrack(param0: boolean): void;
					public getSplitTrack(): boolean;
					public getTextOn(): string;
					public setTextOn(param0: string): void;
					public getTextOff(): string;
					public setTextOff(param0: string): void;
					public setShowText(param0: boolean): void;
					public getShowText(): boolean;
					public onMeasure(param0: number, param1: number): void;
					public onPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public toggle(): void;
					public setChecked(param0: boolean): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public getCompoundPaddingLeft(): number;
					public getCompoundPaddingRight(): number;
					public onCreateDrawableState(param0: number): native.Array<number>;
					public drawableStateChanged(): void;
					public drawableHotspotChanged(param0: number, param1: number): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public jumpDrawablesToCurrentState(): void;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
				}
				export module SwitchCompat {
					export class ThumbAnimation {
						public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;
					}
				}
			}
		}
	}
}
