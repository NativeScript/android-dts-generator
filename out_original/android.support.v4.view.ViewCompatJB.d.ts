/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatJB {
					public static hasTransientState(param0: android.view.View): boolean;
					public static setHasTransientState(param0: android.view.View, param1: boolean): void;
					public static postInvalidateOnAnimation(param0: android.view.View): void;
					public static postInvalidateOnAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public static postOnAnimation(param0: android.view.View, param1: java.lang.Runnable): void;
					public static postOnAnimationDelayed(param0: android.view.View, param1: java.lang.Runnable, param2: number): void;
					public static getImportantForAccessibility(param0: android.view.View): number;
					public static setImportantForAccessibility(param0: android.view.View, param1: number): void;
					public static performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public static getAccessibilityNodeProvider(param0: android.view.View): java.lang.Object;
					public static getParentForAccessibility(param0: android.view.View): android.view.ViewParent;
					public static getMinimumWidth(param0: android.view.View): number;
					public static getMinimumHeight(param0: android.view.View): number;
					public static requestApplyInsets(param0: android.view.View): void;
					public static getFitsSystemWindows(param0: android.view.View): boolean;
					public static hasOverlappingRendering(param0: android.view.View): boolean;
				}
			}
		}
	}
}
