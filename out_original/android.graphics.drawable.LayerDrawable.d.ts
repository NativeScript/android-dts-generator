/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class LayerDrawable {
				public constructor();
				public constructor(param0: native.Array<android.graphics.drawable.Drawable>);
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public addLayer(param0: android.graphics.drawable.Drawable): number;
				public findDrawableByLayerId(param0: number): android.graphics.drawable.Drawable;
				public setId(param0: number, param1: number): void;
				public getId(param0: number): number;
				public getNumberOfLayers(): number;
				public setDrawableByLayerId(param0: number, param1: android.graphics.drawable.Drawable): boolean;
				public findIndexByLayerId(param0: number): number;
				public setDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;
				public getDrawable(param0: number): android.graphics.drawable.Drawable;
				public setLayerSize(param0: number, param1: number, param2: number): void;
				public setLayerWidth(param0: number, param1: number): void;
				public getLayerWidth(param0: number): number;
				public setLayerHeight(param0: number, param1: number): void;
				public getLayerHeight(param0: number): number;
				public setLayerGravity(param0: number, param1: number): void;
				public getLayerGravity(param0: number): number;
				public setLayerInset(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public setLayerInsetRelative(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public setLayerInsetLeft(param0: number, param1: number): void;
				public getLayerInsetLeft(param0: number): number;
				public setLayerInsetRight(param0: number, param1: number): void;
				public getLayerInsetRight(param0: number): number;
				public setLayerInsetTop(param0: number, param1: number): void;
				public getLayerInsetTop(param0: number): number;
				public setLayerInsetBottom(param0: number, param1: number): void;
				public getLayerInsetBottom(param0: number): number;
				public setLayerInsetStart(param0: number, param1: number): void;
				public getLayerInsetStart(param0: number): number;
				public setLayerInsetEnd(param0: number, param1: number): void;
				public getLayerInsetEnd(param0: number): number;
				public setPaddingMode(param0: number): void;
				public getPaddingMode(): number;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public draw(param0: android.graphics.Canvas): void;
				public getChangingConfigurations(): number;
				public getPadding(param0: android.graphics.Rect): boolean;
				public setPadding(param0: number, param1: number, param2: number, param3: number): void;
				public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
				public getLeftPadding(): number;
				public getRightPadding(): number;
				public getStartPadding(): number;
				public getEndPadding(): number;
				public getTopPadding(): number;
				public getBottomPadding(): number;
				public getOutline(param0: android.graphics.Outline): void;
				public setHotspot(param0: number, param1: number): void;
				public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				public getHotspotBounds(param0: android.graphics.Rect): void;
				public setVisible(param0: boolean, param1: boolean): boolean;
				public setDither(param0: boolean): void;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setOpacity(param0: number): void;
				public getOpacity(): number;
				public setAutoMirrored(param0: boolean): void;
				public isAutoMirrored(): boolean;
				public isStateful(): boolean;
				public onStateChange(param0: native.Array<number>): boolean;
				public onLevelChange(param0: number): boolean;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public mutate(): android.graphics.drawable.Drawable;
				public onLayoutDirectionChanged(param0: number): boolean;
				public static PADDING_MODE_NEST: number;
				public static PADDING_MODE_STACK: number;
			}
		}
	}
}
