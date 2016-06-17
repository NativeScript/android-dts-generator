/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module style {
			export class DrawableMarginSpan {
				public constructor();
				public constructor(param0: android.graphics.drawable.Drawable);
				public constructor(param0: android.graphics.drawable.Drawable, param1: number);
				public getLeadingMargin(param0: boolean): number;
				public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
				public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
			}
		}
	}
}
