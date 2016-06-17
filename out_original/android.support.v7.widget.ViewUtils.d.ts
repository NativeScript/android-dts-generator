/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ViewUtils {
					public static isLayoutRtl(param0: android.view.View): boolean;
					public static combineMeasuredStates(param0: number, param1: number): number;
					public static computeFitSystemWindows(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Rect): void;
					public static makeOptionalFitsSystemWindows(param0: android.view.View): void;
				}
			}
		}
	}
}
