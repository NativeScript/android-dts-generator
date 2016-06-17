/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module text {
		export module style {
			export class ClickableSpan {
				public constructor();
				public onClick(param0: android.view.View): void;
				public updateDrawState(param0: android.text.TextPaint): void;
			}
		}
	}
}
