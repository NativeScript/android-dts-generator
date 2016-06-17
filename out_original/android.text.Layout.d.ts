/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export class Layout {
			public constructor();
			public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);
			public static getDesiredWidth(param0: string, param1: android.text.TextPaint): number;
			public static getDesiredWidth(param0: string, param1: number, param2: number, param3: android.text.TextPaint): number;
			public draw(param0: android.graphics.Canvas): void;
			public draw(param0: android.graphics.Canvas, param1: android.graphics.Path, param2: android.graphics.Paint, param3: number): void;
			public getText(): string;
			public getPaint(): android.text.TextPaint;
			public getWidth(): number;
			public getEllipsizedWidth(): number;
			public increaseWidthTo(param0: number): void;
			public getHeight(): number;
			public getAlignment(): android.text.Layout.Alignment;
			public getSpacingMultiplier(): number;
			public getSpacingAdd(): number;
			public getLineCount(): number;
			public getLineBounds(param0: number, param1: android.graphics.Rect): number;
			public getLineTop(param0: number): number;
			public getLineDescent(param0: number): number;
			public getLineStart(param0: number): number;
			public getParagraphDirection(param0: number): number;
			public getLineContainsTab(param0: number): boolean;
			public getLineDirections(param0: number): android.text.Layout.Directions;
			public getTopPadding(): number;
			public getBottomPadding(): number;
			public isRtlCharAt(param0: number): boolean;
			public getPrimaryHorizontal(param0: number): number;
			public getSecondaryHorizontal(param0: number): number;
			public getLineLeft(param0: number): number;
			public getLineRight(param0: number): number;
			public getLineMax(param0: number): number;
			public getLineWidth(param0: number): number;
			public getLineForVertical(param0: number): number;
			public getLineForOffset(param0: number): number;
			public getOffsetForHorizontal(param0: number, param1: number): number;
			public getLineEnd(param0: number): number;
			public getLineVisibleEnd(param0: number): number;
			public getLineBottom(param0: number): number;
			public getLineBaseline(param0: number): number;
			public getLineAscent(param0: number): number;
			public getOffsetToLeftOf(param0: number): number;
			public getOffsetToRightOf(param0: number): number;
			public getCursorPath(param0: number, param1: android.graphics.Path, param2: string): void;
			public getSelectionPath(param0: number, param1: number, param2: android.graphics.Path): void;
			public getParagraphAlignment(param0: number): android.text.Layout.Alignment;
			public getParagraphLeft(param0: number): number;
			public getParagraphRight(param0: number): number;
			public isSpanned(): boolean;
			public getEllipsisStart(param0: number): number;
			public getEllipsisCount(param0: number): number;
			public static BREAK_STRATEGY_BALANCED: number;
			public static BREAK_STRATEGY_HIGH_QUALITY: number;
			public static BREAK_STRATEGY_SIMPLE: number;
			public static DIR_LEFT_TO_RIGHT: number;
			public static DIR_RIGHT_TO_LEFT: number;
			public static HYPHENATION_FREQUENCY_FULL: number;
			public static HYPHENATION_FREQUENCY_NONE: number;
			public static HYPHENATION_FREQUENCY_NORMAL: number;
		}
		export module Layout {
			export class Alignment {
				public static values(): native.Array<android.text.Layout.Alignment>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.text.Layout.Alignment;
				public static ALIGN_CENTER: android.text.Layout.Alignment;
				public static ALIGN_NORMAL: android.text.Layout.Alignment;
				public static ALIGN_OPPOSITE: android.text.Layout.Alignment;
			}
			export class Directions {
			}
		}
	}
}
