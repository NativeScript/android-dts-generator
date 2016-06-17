/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.widget.AppCompatDrawableManager.d.ts" />
/// <reference path="./android.support.v7.widget.TintInfo.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatTextHelper {
					public static createTintInfo(param0: android.content.Context, param1: android.support.v7.widget.AppCompatDrawableManager, param2: number): android.support.v7.widget.TintInfo;
				}
			}
		}
	}
}
