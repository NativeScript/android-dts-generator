/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatMarshmallow {
					public static setScrollIndicators(param0: android.view.View, param1: number): void;
					public static setScrollIndicators(param0: android.view.View, param1: number, param2: number): void;
					public static getScrollIndicators(param0: android.view.View): number;
				}
			}
		}
	}
}
