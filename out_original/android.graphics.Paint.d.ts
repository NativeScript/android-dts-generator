/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.MaskFilter.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.PathEffect.d.ts" />
/// <reference path="./android.graphics.Rasterizer.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.graphics.Xfermode.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module graphics {
		export class Paint {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.graphics.Paint);
			public reset(): void;
			public set(param0: android.graphics.Paint): void;
			public getFlags(): number;
			public setFlags(param0: number): void;
			public getHinting(): number;
			public setHinting(param0: number): void;
			public isAntiAlias(): boolean;
			public setAntiAlias(param0: boolean): void;
			public isDither(): boolean;
			public setDither(param0: boolean): void;
			public isLinearText(): boolean;
			public setLinearText(param0: boolean): void;
			public isSubpixelText(): boolean;
			public setSubpixelText(param0: boolean): void;
			public isUnderlineText(): boolean;
			public setUnderlineText(param0: boolean): void;
			public isStrikeThruText(): boolean;
			public setStrikeThruText(param0: boolean): void;
			public isFakeBoldText(): boolean;
			public setFakeBoldText(param0: boolean): void;
			public isFilterBitmap(): boolean;
			public setFilterBitmap(param0: boolean): void;
			public getStyle(): android.graphics.Paint.Style;
			public setStyle(param0: android.graphics.Paint.Style): void;
			public getColor(): number;
			public setColor(param0: number): void;
			public getAlpha(): number;
			public setAlpha(param0: number): void;
			public setARGB(param0: number, param1: number, param2: number, param3: number): void;
			public getStrokeWidth(): number;
			public setStrokeWidth(param0: number): void;
			public getStrokeMiter(): number;
			public setStrokeMiter(param0: number): void;
			public getStrokeCap(): android.graphics.Paint.Cap;
			public setStrokeCap(param0: android.graphics.Paint.Cap): void;
			public getStrokeJoin(): android.graphics.Paint.Join;
			public setStrokeJoin(param0: android.graphics.Paint.Join): void;
			public getFillPath(param0: android.graphics.Path, param1: android.graphics.Path): boolean;
			public getShader(): android.graphics.Shader;
			public setShader(param0: android.graphics.Shader): android.graphics.Shader;
			public getColorFilter(): android.graphics.ColorFilter;
			public setColorFilter(param0: android.graphics.ColorFilter): android.graphics.ColorFilter;
			public getXfermode(): android.graphics.Xfermode;
			public setXfermode(param0: android.graphics.Xfermode): android.graphics.Xfermode;
			public getPathEffect(): android.graphics.PathEffect;
			public setPathEffect(param0: android.graphics.PathEffect): android.graphics.PathEffect;
			public getMaskFilter(): android.graphics.MaskFilter;
			public setMaskFilter(param0: android.graphics.MaskFilter): android.graphics.MaskFilter;
			public getTypeface(): android.graphics.Typeface;
			public setTypeface(param0: android.graphics.Typeface): android.graphics.Typeface;
			public getRasterizer(): android.graphics.Rasterizer;
			public setRasterizer(param0: android.graphics.Rasterizer): android.graphics.Rasterizer;
			public setShadowLayer(param0: number, param1: number, param2: number, param3: number): void;
			public clearShadowLayer(): void;
			public getTextAlign(): android.graphics.Paint.Align;
			public setTextAlign(param0: android.graphics.Paint.Align): void;
			public getTextLocale(): java.util.Locale;
			public setTextLocale(param0: java.util.Locale): void;
			public isElegantTextHeight(): boolean;
			public setElegantTextHeight(param0: boolean): void;
			public getTextSize(): number;
			public setTextSize(param0: number): void;
			public getTextScaleX(): number;
			public setTextScaleX(param0: number): void;
			public getTextSkewX(): number;
			public setTextSkewX(param0: number): void;
			public getLetterSpacing(): number;
			public setLetterSpacing(param0: number): void;
			public getFontFeatureSettings(): string;
			public setFontFeatureSettings(param0: string): void;
			public ascent(): number;
			public descent(): number;
			public getFontMetrics(param0: android.graphics.Paint.FontMetrics): number;
			public getFontMetrics(): android.graphics.Paint.FontMetrics;
			public getFontMetricsInt(param0: android.graphics.Paint.FontMetricsInt): number;
			public getFontMetricsInt(): android.graphics.Paint.FontMetricsInt;
			public getFontSpacing(): number;
			public measureText(param0: native.Array<string>, param1: number, param2: number): number;
			public measureText(param0: string, param1: number, param2: number): number;
			public measureText(param0: string): number;
			public measureText(param0: string, param1: number, param2: number): number;
			public breakText(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: native.Array<number>): number;
			public breakText(param0: string, param1: number, param2: number, param3: boolean, param4: number, param5: native.Array<number>): number;
			public breakText(param0: string, param1: boolean, param2: number, param3: native.Array<number>): number;
			public getTextWidths(param0: native.Array<string>, param1: number, param2: number, param3: native.Array<number>): number;
			public getTextWidths(param0: string, param1: number, param2: number, param3: native.Array<number>): number;
			public getTextWidths(param0: string, param1: number, param2: number, param3: native.Array<number>): number;
			public getTextWidths(param0: string, param1: native.Array<number>): number;
			public getTextPath(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Path): void;
			public getTextPath(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Path): void;
			public getTextBounds(param0: string, param1: number, param2: number, param3: android.graphics.Rect): void;
			public getTextBounds(param0: native.Array<string>, param1: number, param2: number, param3: android.graphics.Rect): void;
			public hasGlyph(param0: string): boolean;
			public getRunAdvance(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;
			public getRunAdvance(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;
			public getOffsetForAdvance(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;
			public getOffsetForAdvance(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;
			public finalize(): void;
			public static ANTI_ALIAS_FLAG: number;
			public static DEV_KERN_TEXT_FLAG: number;
			public static DITHER_FLAG: number;
			public static EMBEDDED_BITMAP_TEXT_FLAG: number;
			public static FAKE_BOLD_TEXT_FLAG: number;
			public static FILTER_BITMAP_FLAG: number;
			public static HINTING_OFF: number;
			public static HINTING_ON: number;
			public static LINEAR_TEXT_FLAG: number;
			public static STRIKE_THRU_TEXT_FLAG: number;
			public static SUBPIXEL_TEXT_FLAG: number;
			public static UNDERLINE_TEXT_FLAG: number;
		}
		export module Paint {
			export class Align {
				public static values(): native.Array<android.graphics.Paint.Align>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Paint.Align;
				public static CENTER: android.graphics.Paint.Align;
				public static LEFT: android.graphics.Paint.Align;
				public static RIGHT: android.graphics.Paint.Align;
			}
			export class Cap {
				public static values(): native.Array<android.graphics.Paint.Cap>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Paint.Cap;
				public static BUTT: android.graphics.Paint.Cap;
				public static ROUND: android.graphics.Paint.Cap;
				public static SQUARE: android.graphics.Paint.Cap;
			}
			export class FontMetrics {
				public constructor();
				public ascent: number;
				public bottom: number;
				public descent: number;
				public leading: number;
				public top: number;
			}
			export class FontMetricsInt {
				public constructor();
				public toString(): string;
				public ascent: number;
				public bottom: number;
				public descent: number;
				public leading: number;
				public top: number;
			}
			export class Join {
				public static values(): native.Array<android.graphics.Paint.Join>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Paint.Join;
				public static BEVEL: android.graphics.Paint.Join;
				public static MITER: android.graphics.Paint.Join;
				public static ROUND: android.graphics.Paint.Join;
			}
			export class Style {
				public static values(): native.Array<android.graphics.Paint.Style>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Paint.Style;
				public static FILL: android.graphics.Paint.Style;
				public static FILL_AND_STROKE: android.graphics.Paint.Style;
				public static STROKE: android.graphics.Paint.Style;
			}
		}
	}
}
