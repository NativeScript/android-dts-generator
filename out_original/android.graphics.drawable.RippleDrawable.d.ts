/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class RippleDrawable {
				public constructor(param0: native.Array<android.graphics.drawable.Drawable>);
				public constructor();
				public constructor(param0: android.content.res.ColorStateList, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable);
				public jumpToCurrentState(): void;
				public getOpacity(): number;
				public onStateChange(param0: native.Array<number>): boolean;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public setVisible(param0: boolean, param1: boolean): boolean;
				public isStateful(): boolean;
				public setColor(param0: android.content.res.ColorStateList): void;
				public setRadius(param0: number): void;
				public getRadius(): number;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public setDrawableByLayerId(param0: number, param1: android.graphics.drawable.Drawable): boolean;
				public setPaddingMode(param0: number): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public setHotspot(param0: number, param1: number): void;
				public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				public getHotspotBounds(param0: android.graphics.Rect): void;
				public getOutline(param0: android.graphics.Outline): void;
				public draw(param0: android.graphics.Canvas): void;
				public invalidateSelf(): void;
				public getDirtyBounds(): android.graphics.Rect;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public mutate(): android.graphics.drawable.Drawable;
				public static RADIUS_AUTO: number;
			}
		}
	}
}
