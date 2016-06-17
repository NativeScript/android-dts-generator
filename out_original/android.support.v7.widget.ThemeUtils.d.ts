/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ThemeUtils {
					public static createDisabledStateList(param0: number, param1: number): android.content.res.ColorStateList;
					public static getThemeAttrColor(param0: android.content.Context, param1: number): number;
					public static getThemeAttrColorStateList(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					public static getDisabledThemeAttrColor(param0: android.content.Context, param1: number): number;
				}
			}
		}
	}
}
