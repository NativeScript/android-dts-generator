/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module style {
			export class LineHeightSpan {
				public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
			}
			export module LineHeightSpan {
				export class WithDensity {
					public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt, param6: android.text.TextPaint): void;
				}
			}
		}
	}
}
