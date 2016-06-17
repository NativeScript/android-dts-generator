/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.PorterDuffColorFilter.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.widget.TintInfo.d.ts" />
/// <reference path="./android.support.v7.widget.VectorEnabledTintResources.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatDrawableManager {
					public constructor();
					public static get(): android.support.v7.widget.AppCompatDrawableManager;
					public getDrawable(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
					public getDrawable(param0: android.content.Context, param1: number, param2: boolean): android.graphics.drawable.Drawable;
					public onDrawableLoadedFromResources(param0: android.content.Context, param1: android.support.v7.widget.VectorEnabledTintResources, param2: number): android.graphics.drawable.Drawable;
					public getTintList(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					public static tintDrawable(param0: android.graphics.drawable.Drawable, param1: android.support.v7.widget.TintInfo, param2: native.Array<number>): void;
					public static getPorterDuffColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): android.graphics.PorterDuffColorFilter;
				}
				export module AppCompatDrawableManager {
					export class AvdcInflateDelegate {
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
					export class ColorFilterLruCache {
						public constructor();
						public constructor(param0: number);
					}
					export class InflateDelegate {
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
					export class VdcInflateDelegate {
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}
