/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.view.PagerAdapter.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class PagerTitleStrip {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setTextSpacing(param0: number): void;
					public getTextSpacing(): number;
					public setNonPrimaryAlpha(param0: number): void;
					public setTextColor(param0: number): void;
					public setTextSize(param0: number, param1: number): void;
					public setGravity(param0: number): void;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
					public requestLayout(): void;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				}
				export module PagerTitleStrip {
					export class PageListener {
						public onPageScrolled(param0: number, param1: number, param2: number): void;
						public onPageSelected(param0: number): void;
						public onPageScrollStateChanged(param0: number): void;
						public onAdapterChanged(param0: android.support.v4.view.PagerAdapter, param1: android.support.v4.view.PagerAdapter): void;
						public onChanged(): void;
					}
					export class PagerTitleStripImpl {
						public setSingleLineAllCaps(param0: android.widget.TextView): void;
					}
					export class PagerTitleStripImplBase {
						public setSingleLineAllCaps(param0: android.widget.TextView): void;
					}
					export class PagerTitleStripImplIcs {
						public setSingleLineAllCaps(param0: android.widget.TextView): void;
					}
				}
			}
		}
	}
}
