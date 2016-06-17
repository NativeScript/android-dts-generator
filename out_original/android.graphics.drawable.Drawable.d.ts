/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class Drawable {
				public constructor();
				public draw(param0: android.graphics.Canvas): void;
				public setBounds(param0: number, param1: number, param2: number, param3: number): void;
				public setBounds(param0: android.graphics.Rect): void;
				public copyBounds(param0: android.graphics.Rect): void;
				public copyBounds(): android.graphics.Rect;
				public getBounds(): android.graphics.Rect;
				public getDirtyBounds(): android.graphics.Rect;
				public setChangingConfigurations(param0: number): void;
				public getChangingConfigurations(): number;
				public setDither(param0: boolean): void;
				public setFilterBitmap(param0: boolean): void;
				public isFilterBitmap(): boolean;
				public setCallback(param0: android.graphics.drawable.Drawable.Callback): void;
				public getCallback(): android.graphics.drawable.Drawable.Callback;
				public invalidateSelf(): void;
				public scheduleSelf(param0: java.lang.Runnable, param1: number): void;
				public unscheduleSelf(param0: java.lang.Runnable): void;
				public getLayoutDirection(): number;
				public setLayoutDirection(param0: number): boolean;
				public onLayoutDirectionChanged(param0: number): boolean;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setTint(param0: number): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getColorFilter(): android.graphics.ColorFilter;
				public clearColorFilter(): void;
				public setHotspot(param0: number, param1: number): void;
				public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				public getHotspotBounds(param0: android.graphics.Rect): void;
				public isStateful(): boolean;
				public setState(param0: native.Array<number>): boolean;
				public getState(): native.Array<number>;
				public jumpToCurrentState(): void;
				public getCurrent(): android.graphics.drawable.Drawable;
				public setLevel(param0: number): boolean;
				public getLevel(): number;
				public setVisible(param0: boolean, param1: boolean): boolean;
				public isVisible(): boolean;
				public setAutoMirrored(param0: boolean): void;
				public isAutoMirrored(): boolean;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public getOpacity(): number;
				public static resolveOpacity(param0: number, param1: number): number;
				public getTransparentRegion(): android.graphics.Region;
				public onStateChange(param0: native.Array<number>): boolean;
				public onLevelChange(param0: number): boolean;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getMinimumWidth(): number;
				public getMinimumHeight(): number;
				public getPadding(param0: android.graphics.Rect): boolean;
				public getOutline(param0: android.graphics.Outline): void;
				public mutate(): android.graphics.drawable.Drawable;
				public static createFromStream(param0: java.io.InputStream, param1: string): android.graphics.drawable.Drawable;
				public static createFromResourceStream(param0: android.content.res.Resources, param1: android.util.TypedValue, param2: java.io.InputStream, param3: string): android.graphics.drawable.Drawable;
				public static createFromResourceStream(param0: android.content.res.Resources, param1: android.util.TypedValue, param2: java.io.InputStream, param3: string, param4: android.graphics.BitmapFactory.Options): android.graphics.drawable.Drawable;
				public static createFromXml(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser): android.graphics.drawable.Drawable;
				public static createFromXml(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				public static createFromXmlInner(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): android.graphics.drawable.Drawable;
				public static createFromXmlInner(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				public static createFromPath(param0: string): android.graphics.drawable.Drawable;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
			}
			export module Drawable {
				export class Callback {
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				}
				export class ConstantState {
					public constructor();
					public newDrawable(): android.graphics.drawable.Drawable;
					public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
					public newDrawable(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getChangingConfigurations(): number;
					public canApplyTheme(): boolean;
				}
			}
		}
	}
}
