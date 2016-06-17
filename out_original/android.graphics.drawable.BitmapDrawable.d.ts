/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class BitmapDrawable {
				public constructor();
				public constructor(param0: android.content.res.Resources);
				public constructor(param0: android.graphics.Bitmap);
				public constructor(param0: android.content.res.Resources, param1: android.graphics.Bitmap);
				public constructor(param0: string);
				public constructor(param0: android.content.res.Resources, param1: string);
				public constructor(param0: java.io.InputStream);
				public constructor(param0: android.content.res.Resources, param1: java.io.InputStream);
				public getPaint(): android.graphics.Paint;
				public getBitmap(): android.graphics.Bitmap;
				public setTargetDensity(param0: android.graphics.Canvas): void;
				public setTargetDensity(param0: android.util.DisplayMetrics): void;
				public setTargetDensity(param0: number): void;
				public getGravity(): number;
				public setGravity(param0: number): void;
				public setMipMap(param0: boolean): void;
				public hasMipMap(): boolean;
				public setAntiAlias(param0: boolean): void;
				public hasAntiAlias(): boolean;
				public setFilterBitmap(param0: boolean): void;
				public isFilterBitmap(): boolean;
				public setDither(param0: boolean): void;
				public getTileModeX(): android.graphics.Shader.TileMode;
				public getTileModeY(): android.graphics.Shader.TileMode;
				public setTileModeX(param0: android.graphics.Shader.TileMode): void;
				public setTileModeY(param0: android.graphics.Shader.TileMode): void;
				public setTileModeXY(param0: android.graphics.Shader.TileMode, param1: android.graphics.Shader.TileMode): void;
				public setAutoMirrored(param0: boolean): void;
				public isAutoMirrored(): boolean;
				public getChangingConfigurations(): number;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public draw(param0: android.graphics.Canvas): void;
				public getOutline(param0: android.graphics.Outline): void;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public getColorFilter(): android.graphics.ColorFilter;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public mutate(): android.graphics.drawable.Drawable;
				public onStateChange(param0: native.Array<number>): boolean;
				public isStateful(): boolean;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getOpacity(): number;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
			}
		}
	}
}
