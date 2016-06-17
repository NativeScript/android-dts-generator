/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class DrawerLayoutCompatApi21 {
					public static configureApplyInsets(param0: android.view.View): void;
					public static dispatchChildInsets(param0: android.view.View, param1: java.lang.Object, param2: number): void;
					public static applyMarginInsets(param0: android.view.ViewGroup.MarginLayoutParams, param1: java.lang.Object, param2: number): void;
					public static getTopInset(param0: java.lang.Object): number;
					public static getDefaultStatusBarBackground(param0: android.content.Context): android.graphics.drawable.Drawable;
				}
				export module DrawerLayoutCompatApi21 {
					export class InsetsListener {
						public onApplyWindowInsets(param0: android.view.View, param1: android.view.WindowInsets): android.view.WindowInsets;
					}
				}
			}
		}
	}
}
