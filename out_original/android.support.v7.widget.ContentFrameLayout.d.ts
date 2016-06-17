/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ContentFrameLayout {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public dispatchFitSystemWindows(param0: android.graphics.Rect): void;
					public setAttachListener(param0: android.support.v7.widget.ContentFrameLayout.OnAttachListener): void;
					public setDecorPadding(param0: number, param1: number, param2: number, param3: number): void;
					public onMeasure(param0: number, param1: number): void;
					public getMinWidthMajor(): android.util.TypedValue;
					public getMinWidthMinor(): android.util.TypedValue;
					public getFixedWidthMajor(): android.util.TypedValue;
					public getFixedWidthMinor(): android.util.TypedValue;
					public getFixedHeightMajor(): android.util.TypedValue;
					public getFixedHeightMinor(): android.util.TypedValue;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
				}
				export module ContentFrameLayout {
					export class OnAttachListener {
						public onDetachedFromWindow(): void;
						public onAttachedFromWindow(): void;
					}
				}
			}
		}
	}
}
