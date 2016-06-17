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
					export class DrawableCompatLollipop {
						public static setHotspot(param0: android.graphics.drawable.Drawable, param1: number, param2: number): void;
						public static setHotspotBounds(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number): void;
						public static setTint(param0: android.graphics.drawable.Drawable, param1: number): void;
						public static setTintList(param0: android.graphics.drawable.Drawable, param1: android.content.res.ColorStateList): void;
						public static setTintMode(param0: android.graphics.drawable.Drawable, param1: android.graphics.PorterDuff.Mode): void;
						public static wrapForTinting(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						public static applyTheme(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources.Theme): void;
						public static canApplyTheme(param0: android.graphics.drawable.Drawable): boolean;
						public static getColorFilter(param0: android.graphics.drawable.Drawable): android.graphics.ColorFilter;
						public static inflate(param0: android.graphics.drawable.Drawable, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
					}
				}
			}
		}
	}
}
