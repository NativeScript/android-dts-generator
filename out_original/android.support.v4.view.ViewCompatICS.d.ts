/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatICS {
					public static canScrollHorizontally(param0: android.view.View, param1: number): boolean;
					public static canScrollVertically(param0: android.view.View, param1: number): boolean;
					public static setAccessibilityDelegate(param0: android.view.View, param1: java.lang.Object): void;
					public static onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public static onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public static onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: java.lang.Object): void;
					public static setFitsSystemWindows(param0: android.view.View, param1: boolean): void;
				}
			}
		}
	}
}
