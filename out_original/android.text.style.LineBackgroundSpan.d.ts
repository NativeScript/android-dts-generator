/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module style {
			export class LineBackgroundSpan {
				public drawBackground(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: number): void;
			}
		}
	}
}
