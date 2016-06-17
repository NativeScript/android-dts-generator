/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class DrawableWrapper {
						public constructor();
						public constructor(param0: android.graphics.drawable.Drawable);
						public draw(param0: android.graphics.Canvas): void;
						public onBoundsChange(param0: android.graphics.Rect): void;
						public setChangingConfigurations(param0: number): void;
						public getChangingConfigurations(): number;
						public setDither(param0: boolean): void;
						public setFilterBitmap(param0: boolean): void;
						public setAlpha(param0: number): void;
						public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public isStateful(): boolean;
						public setState(param0: native.Array<number>): boolean;
						public getState(): native.Array<number>;
						public jumpToCurrentState(): void;
						public getCurrent(): android.graphics.drawable.Drawable;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public getOpacity(): number;
						public getTransparentRegion(): android.graphics.Region;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public getMinimumWidth(): number;
						public getMinimumHeight(): number;
						public getPadding(param0: android.graphics.Rect): boolean;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public onLevelChange(param0: number): boolean;
						public setAutoMirrored(param0: boolean): void;
						public isAutoMirrored(): boolean;
						public setTint(param0: number): void;
						public setTintList(param0: android.content.res.ColorStateList): void;
						public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
						public setHotspot(param0: number, param1: number): void;
						public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getWrappedDrawable(): android.graphics.drawable.Drawable;
						public setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}
