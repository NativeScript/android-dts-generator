/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ActionBarDrawerToggleHoneycomb {
					public static setActionBarUpIndicator(param0: android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: android.app.Activity, param2: android.graphics.drawable.Drawable, param3: number): android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
					public static setActionBarDescription(param0: android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: android.app.Activity, param2: number): android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
					public static getThemeUpIndicator(param0: android.app.Activity): android.graphics.drawable.Drawable;
				}
				export module ActionBarDrawerToggleHoneycomb {
					export class SetIndicatorInfo {
						public setHomeAsUpIndicator: java.lang.reflect.Method;
						public setHomeActionContentDescription: java.lang.reflect.Method;
						public upIndicatorView: android.widget.ImageView;
					}
				}
			}
		}
	}
}
