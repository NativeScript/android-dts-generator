/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class BoringLayout {
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);
			public constructor();
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean);
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number);
			public static make(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean): android.text.BoringLayout;
			public static make(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number): android.text.BoringLayout;
			public replaceOrMake(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean): android.text.BoringLayout;
			public replaceOrMake(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number): android.text.BoringLayout;
			public static isBoring(param0: string, param1: android.text.TextPaint): android.text.BoringLayout.Metrics;
			public static isBoring(param0: string, param1: android.text.TextPaint, param2: android.text.BoringLayout.Metrics): android.text.BoringLayout.Metrics;
			public getHeight(): number;
			public getLineCount(): number;
			public getLineTop(param0: number): number;
			public getLineDescent(param0: number): number;
			public getLineStart(param0: number): number;
			public getParagraphDirection(param0: number): number;
			public getLineContainsTab(param0: number): boolean;
			public getLineMax(param0: number): number;
			public getLineDirections(param0: number): android.text.Layout.Directions;
			public getTopPadding(): number;
			public getBottomPadding(): number;
			public getEllipsisCount(param0: number): number;
			public getEllipsisStart(param0: number): number;
			public getEllipsizedWidth(): number;
			public draw(param0: android.graphics.Canvas): void;
			public draw(param0: android.graphics.Canvas, param1: android.graphics.Path, param2: android.graphics.Paint, param3: number): void;
			public ellipsized(param0: number, param1: number): void;
		}
		export module BoringLayout {
			export class Metrics {
				public constructor();
				public toString(): string;
				public width: number;
			}
		}
	}
}
