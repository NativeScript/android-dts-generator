/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableCompat {
						public static jumpToCurrentState(param0: android.graphics.drawable.Drawable): void;
						public static setAutoMirrored(param0: android.graphics.drawable.Drawable, param1: boolean): void;
						public static isAutoMirrored(param0: android.graphics.drawable.Drawable): boolean;
						public static setHotspot(param0: android.graphics.drawable.Drawable, param1: number, param2: number): void;
						public static setHotspotBounds(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number): void;
						public static setTint(param0: android.graphics.drawable.Drawable, param1: number): void;
						public static setTintList(param0: android.graphics.drawable.Drawable, param1: android.content.res.ColorStateList): void;
						public static setTintMode(param0: android.graphics.drawable.Drawable, param1: android.graphics.PorterDuff.Mode): void;
						public static getAlpha(param0: android.graphics.drawable.Drawable): number;
						public static applyTheme(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources.Theme): void;
						public static canApplyTheme(param0: android.graphics.drawable.Drawable): boolean;
						public static getColorFilter(param0: android.graphics.drawable.Drawable): android.graphics.ColorFilter;
						public static inflate(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
						public static wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						public static unwrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						public static setLayoutDirection(param0: android.graphics.drawable.Drawable, param1: number): void;
						public static getLayoutDirection(param0: android.graphics.drawable.Drawable): number;
					}
					export module DrawableCompat {
						export class BaseDrawableImpl {
							public jumpToCurrentState(param0: android.graphics.drawable.Drawable): void;
							public setAutoMirrored(param0: android.graphics.drawable.Drawable, param1: boolean): void;
							public isAutoMirrored(param0: android.graphics.drawable.Drawable): boolean;
							public setHotspot(param0: android.graphics.drawable.Drawable, param1: number, param2: number): void;
							public setHotspotBounds(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number): void;
							public setTint(param0: android.graphics.drawable.Drawable, param1: number): void;
							public setTintList(param0: android.graphics.drawable.Drawable, param1: android.content.res.ColorStateList): void;
							public setTintMode(param0: android.graphics.drawable.Drawable, param1: android.graphics.PorterDuff.Mode): void;
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
							public setLayoutDirection(param0: android.graphics.drawable.Drawable, param1: number): void;
							public getLayoutDirection(param0: android.graphics.drawable.Drawable): number;
							public getAlpha(param0: android.graphics.drawable.Drawable): number;
							public applyTheme(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources.Theme): void;
							public canApplyTheme(param0: android.graphics.drawable.Drawable): boolean;
							public getColorFilter(param0: android.graphics.drawable.Drawable): android.graphics.ColorFilter;
							public inflate(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
						}
						export class DrawableImpl {
							public jumpToCurrentState(param0: android.graphics.drawable.Drawable): void;
							public setAutoMirrored(param0: android.graphics.drawable.Drawable, param1: boolean): void;
							public isAutoMirrored(param0: android.graphics.drawable.Drawable): boolean;
							public setHotspot(param0: android.graphics.drawable.Drawable, param1: number, param2: number): void;
							public setHotspotBounds(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number): void;
							public setTint(param0: android.graphics.drawable.Drawable, param1: number): void;
							public setTintList(param0: android.graphics.drawable.Drawable, param1: android.content.res.ColorStateList): void;
							public setTintMode(param0: android.graphics.drawable.Drawable, param1: android.graphics.PorterDuff.Mode): void;
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
							public setLayoutDirection(param0: android.graphics.drawable.Drawable, param1: number): void;
							public getLayoutDirection(param0: android.graphics.drawable.Drawable): number;
							public getAlpha(param0: android.graphics.drawable.Drawable): number;
							public applyTheme(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources.Theme): void;
							public canApplyTheme(param0: android.graphics.drawable.Drawable): boolean;
							public getColorFilter(param0: android.graphics.drawable.Drawable): android.graphics.ColorFilter;
							public inflate(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
						}
						export class EclairDrawableImpl {
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						}
						export class HoneycombDrawableImpl {
							public jumpToCurrentState(param0: android.graphics.drawable.Drawable): void;
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						}
						export class JellybeanMr1DrawableImpl {
							public setLayoutDirection(param0: android.graphics.drawable.Drawable, param1: number): void;
							public getLayoutDirection(param0: android.graphics.drawable.Drawable): number;
						}
						export class KitKatDrawableImpl {
							public setAutoMirrored(param0: android.graphics.drawable.Drawable, param1: boolean): void;
							public isAutoMirrored(param0: android.graphics.drawable.Drawable): boolean;
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
							public getAlpha(param0: android.graphics.drawable.Drawable): number;
						}
						export class LollipopDrawableImpl {
							public setHotspot(param0: android.graphics.drawable.Drawable, param1: number, param2: number): void;
							public setHotspotBounds(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number): void;
							public setTint(param0: android.graphics.drawable.Drawable, param1: number): void;
							public setTintList(param0: android.graphics.drawable.Drawable, param1: android.content.res.ColorStateList): void;
							public setTintMode(param0: android.graphics.drawable.Drawable, param1: android.graphics.PorterDuff.Mode): void;
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
							public applyTheme(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources.Theme): void;
							public canApplyTheme(param0: android.graphics.drawable.Drawable): boolean;
							public getColorFilter(param0: android.graphics.drawable.Drawable): android.graphics.ColorFilter;
							public inflate(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
						}
						export class MDrawableImpl {
							public setLayoutDirection(param0: android.graphics.drawable.Drawable, param1: number): void;
							public getLayoutDirection(param0: android.graphics.drawable.Drawable): number;
							public wrap(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}
