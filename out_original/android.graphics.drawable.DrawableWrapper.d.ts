/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class DrawableWrapper {
				public constructor();
				public constructor(param0: android.graphics.drawable.Drawable);
				public setDrawable(param0: android.graphics.drawable.Drawable): void;
				public getDrawable(): android.graphics.drawable.Drawable;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public draw(param0: android.graphics.Canvas): void;
				public getChangingConfigurations(): number;
				public getPadding(param0: android.graphics.Rect): boolean;
				public setHotspot(param0: number, param1: number): void;
				public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				public getHotspotBounds(param0: android.graphics.Rect): void;
				public setVisible(param0: boolean, param1: boolean): boolean;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public onLayoutDirectionChanged(param0: number): boolean;
				public getOpacity(): number;
				public isStateful(): boolean;
				public onStateChange(param0: native.Array<number>): boolean;
				public onLevelChange(param0: number): boolean;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getOutline(param0: android.graphics.Outline): void;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public mutate(): android.graphics.drawable.Drawable;
			}
		}
	}
}
