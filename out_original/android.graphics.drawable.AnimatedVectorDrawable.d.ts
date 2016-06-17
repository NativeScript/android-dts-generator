/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class AnimatedVectorDrawable {
				public constructor();
				public mutate(): android.graphics.drawable.Drawable;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public getChangingConfigurations(): number;
				public draw(param0: android.graphics.Canvas): void;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public onStateChange(param0: native.Array<number>): boolean;
				public onLevelChange(param0: number): boolean;
				public onLayoutDirectionChanged(param0: number): boolean;
				public getAlpha(): number;
				public setAlpha(param0: number): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setHotspot(param0: number, param1: number): void;
				public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setVisible(param0: boolean, param1: boolean): boolean;
				public isStateful(): boolean;
				public getOpacity(): number;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getOutline(param0: android.graphics.Outline): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public isRunning(): boolean;
				public reset(): void;
				public start(): void;
				public stop(): void;
				public registerAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): void;
				public unregisterAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): boolean;
				public clearAnimationCallbacks(): void;
			}
		}
	}
}
