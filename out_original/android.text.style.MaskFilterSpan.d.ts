/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.MaskFilter.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />

declare module android {
	export module text {
		export module style {
			export class MaskFilterSpan {
				public constructor();
				public constructor(param0: android.graphics.MaskFilter);
				public getMaskFilter(): android.graphics.MaskFilter;
				public updateDrawState(param0: android.text.TextPaint): void;
			}
		}
	}
}
