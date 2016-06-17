/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class VectorEnabledTintResources {
					public static shouldBeUsed(): boolean;
					public constructor(param0: android.content.res.AssetManager, param1: android.util.DisplayMetrics, param2: android.content.res.Configuration);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.content.res.Resources);
					public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getDrawable(param0: number): android.graphics.drawable.Drawable;
					public static MAX_SDK_WHERE_REQUIRED: number;
				}
			}
		}
	}
}
