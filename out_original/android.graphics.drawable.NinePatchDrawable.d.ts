/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.NinePatch.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class NinePatchDrawable {
				public constructor();
				public constructor(param0: android.graphics.Bitmap, param1: native.Array<number>, param2: android.graphics.Rect, param3: string);
				public constructor(param0: android.content.res.Resources, param1: android.graphics.Bitmap, param2: native.Array<number>, param3: android.graphics.Rect, param4: string);
				public constructor(param0: android.graphics.NinePatch);
				public constructor(param0: android.content.res.Resources, param1: android.graphics.NinePatch);
				public setTargetDensity(param0: android.graphics.Canvas): void;
				public setTargetDensity(param0: android.util.DisplayMetrics): void;
				public setTargetDensity(param0: number): void;
				public draw(param0: android.graphics.Canvas): void;
				public getChangingConfigurations(): number;
				public getPadding(param0: android.graphics.Rect): boolean;
				public getOutline(param0: android.graphics.Outline): void;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setDither(param0: boolean): void;
				public setAutoMirrored(param0: boolean): void;
				public isAutoMirrored(): boolean;
				public setFilterBitmap(param0: boolean): void;
				public isFilterBitmap(): boolean;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public getPaint(): android.graphics.Paint;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getMinimumWidth(): number;
				public getMinimumHeight(): number;
				public getOpacity(): number;
				public getTransparentRegion(): android.graphics.Region;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public mutate(): android.graphics.drawable.Drawable;
				public onStateChange(param0: native.Array<number>): boolean;
				public isStateful(): boolean;
			}
		}
	}
}
