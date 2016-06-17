/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module style {
			export class ReplacementSpan {
				public constructor();
				public getSize(param0: android.graphics.Paint, param1: string, param2: number, param3: number, param4: android.graphics.Paint.FontMetricsInt): number;
				public draw(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: android.graphics.Paint): void;
				public updateMeasureState(param0: android.text.TextPaint): void;
				public updateDrawState(param0: android.text.TextPaint): void;
			}
		}
	}
}
