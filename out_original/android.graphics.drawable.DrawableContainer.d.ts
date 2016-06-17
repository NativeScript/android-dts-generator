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
			export class DrawableContainer {
				public constructor();
				public draw(param0: android.graphics.Canvas): void;
				public getChangingConfigurations(): number;
				public getPadding(param0: android.graphics.Rect): boolean;
				public getOutline(param0: android.graphics.Outline): void;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setDither(param0: boolean): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setEnterFadeDuration(param0: number): void;
				public setExitFadeDuration(param0: number): void;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public isStateful(): boolean;
				public setAutoMirrored(param0: boolean): void;
				public isAutoMirrored(): boolean;
				public jumpToCurrentState(): void;
				public setHotspot(param0: number, param1: number): void;
				public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				public getHotspotBounds(param0: android.graphics.Rect): void;
				public onStateChange(param0: native.Array<number>): boolean;
				public onLevelChange(param0: number): boolean;
				public onLayoutDirectionChanged(param0: number): boolean;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getMinimumWidth(): number;
				public getMinimumHeight(): number;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setVisible(param0: boolean, param1: boolean): boolean;
				public getOpacity(): number;
				public selectDrawable(param0: number): boolean;
				public getCurrent(): android.graphics.drawable.Drawable;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public mutate(): android.graphics.drawable.Drawable;
				public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;
			}
			export module DrawableContainer {
				export class DrawableContainerState {
					public getChangingConfigurations(): number;
					public addChild(param0: android.graphics.drawable.Drawable): number;
					public getChildCount(): number;
					public getChildren(): native.Array<android.graphics.drawable.Drawable>;
					public getChild(param0: number): android.graphics.drawable.Drawable;
					public canApplyTheme(): boolean;
					public setVariablePadding(param0: boolean): void;
					public getConstantPadding(): android.graphics.Rect;
					public setConstantSize(param0: boolean): void;
					public isConstantSize(): boolean;
					public getConstantWidth(): number;
					public getConstantHeight(): number;
					public getConstantMinimumWidth(): number;
					public getConstantMinimumHeight(): number;
					public computeConstantSize(): void;
					public setEnterFadeDuration(param0: number): void;
					public getEnterFadeDuration(): number;
					public setExitFadeDuration(param0: number): void;
					public getExitFadeDuration(): number;
					public getOpacity(): number;
					public isStateful(): boolean;
					public growArray(param0: number, param1: number): void;
					public canConstantState(): boolean;
				}
			}
		}
	}
}
