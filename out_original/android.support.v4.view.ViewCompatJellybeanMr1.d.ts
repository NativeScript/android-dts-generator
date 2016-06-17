/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatJellybeanMr1 {
					public static getLabelFor(param0: android.view.View): number;
					public static setLabelFor(param0: android.view.View, param1: number): void;
					public static setLayerPaint(param0: android.view.View, param1: android.graphics.Paint): void;
					public static getLayoutDirection(param0: android.view.View): number;
					public static setLayoutDirection(param0: android.view.View, param1: number): void;
					public static getPaddingStart(param0: android.view.View): number;
					public static getPaddingEnd(param0: android.view.View): number;
					public static setPaddingRelative(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public static getWindowSystemUiVisibility(param0: android.view.View): number;
					public static isPaddingRelative(param0: android.view.View): boolean;
				}
			}
		}
	}
}
