/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatKitKat {
					public static getAccessibilityLiveRegion(param0: android.view.View): number;
					public static setAccessibilityLiveRegion(param0: android.view.View, param1: number): void;
					public static isLaidOut(param0: android.view.View): boolean;
					public static isAttachedToWindow(param0: android.view.View): boolean;
				}
			}
		}
	}
}
