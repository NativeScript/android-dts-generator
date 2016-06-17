/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export module res {
					export class ResourcesCompatApi21 {
						public static getDrawable(param0: android.content.res.Resources, param1: number, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						public static getDrawableForDensity(param0: android.content.res.Resources, param1: number, param2: number, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}
