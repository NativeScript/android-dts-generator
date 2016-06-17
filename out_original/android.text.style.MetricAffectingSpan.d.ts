/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.text.style.CharacterStyle.d.ts" />

declare module android {
	export module text {
		export module style {
			export class MetricAffectingSpan {
				public constructor();
				public updateMeasureState(param0: android.text.TextPaint): void;
				public getUnderlying(): android.text.style.CharacterStyle;
				public getUnderlying(): android.text.style.MetricAffectingSpan;
			}
		}
	}
}
