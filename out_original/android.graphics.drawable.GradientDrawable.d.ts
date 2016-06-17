/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class GradientDrawable {
				public constructor();
				public constructor(param0: android.graphics.drawable.GradientDrawable.Orientation, param1: native.Array<number>);
				public getPadding(param0: android.graphics.Rect): boolean;
				public setCornerRadii(param0: native.Array<number>): void;
				public setCornerRadius(param0: number): void;
				public setStroke(param0: number, param1: number): void;
				public setStroke(param0: number, param1: android.content.res.ColorStateList): void;
				public setStroke(param0: number, param1: number, param2: number, param3: number): void;
				public setStroke(param0: number, param1: android.content.res.ColorStateList, param2: number, param3: number): void;
				public setSize(param0: number, param1: number): void;
				public setShape(param0: number): void;
				public setGradientType(param0: number): void;
				public setGradientCenter(param0: number, param1: number): void;
				public setGradientRadius(param0: number): void;
				public getGradientRadius(): number;
				public setUseLevel(param0: boolean): void;
				public getOrientation(): android.graphics.drawable.GradientDrawable.Orientation;
				public setOrientation(param0: android.graphics.drawable.GradientDrawable.Orientation): void;
				public setColors(param0: native.Array<number>): void;
				public draw(param0: android.graphics.Canvas): void;
				public setColor(param0: number): void;
				public setColor(param0: android.content.res.ColorStateList): void;
				public onStateChange(param0: native.Array<number>): boolean;
				public isStateful(): boolean;
				public getChangingConfigurations(): number;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setDither(param0: boolean): void;
				public getColorFilter(): android.graphics.ColorFilter;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getOpacity(): number;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public onLevelChange(param0: number): boolean;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public getOutline(param0: android.graphics.Outline): void;
				public mutate(): android.graphics.drawable.Drawable;
				public static LINE: number;
				public static LINEAR_GRADIENT: number;
				public static OVAL: number;
				public static RADIAL_GRADIENT: number;
				public static RECTANGLE: number;
				public static RING: number;
				public static SWEEP_GRADIENT: number;
			}
			export module GradientDrawable {
				export class Orientation {
					public static values(): native.Array<android.graphics.drawable.GradientDrawable.Orientation>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static valueOf(param0: string): android.graphics.drawable.GradientDrawable.Orientation;
					public static BL_TR: android.graphics.drawable.GradientDrawable.Orientation;
					public static BOTTOM_TOP: android.graphics.drawable.GradientDrawable.Orientation;
					public static BR_TL: android.graphics.drawable.GradientDrawable.Orientation;
					public static LEFT_RIGHT: android.graphics.drawable.GradientDrawable.Orientation;
					public static RIGHT_LEFT: android.graphics.drawable.GradientDrawable.Orientation;
					public static TL_BR: android.graphics.drawable.GradientDrawable.Orientation;
					public static TOP_BOTTOM: android.graphics.drawable.GradientDrawable.Orientation;
					public static TR_BL: android.graphics.drawable.GradientDrawable.Orientation;
				}
			}
		}
	}
}
