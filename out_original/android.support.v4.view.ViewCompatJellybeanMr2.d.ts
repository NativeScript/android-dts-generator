/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatJellybeanMr2 {
					public static getClipBounds(param0: android.view.View): android.graphics.Rect;
					public static setClipBounds(param0: android.view.View, param1: android.graphics.Rect): void;
				}
			}
		}
	}
}
