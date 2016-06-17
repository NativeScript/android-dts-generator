/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityManager.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityManagerCompatIcs {
						public static newAccessibilityStateChangeListener(param0: android.support.v4.view.accessibility.AccessibilityManagerCompatIcs.AccessibilityStateChangeListenerBridge): java.lang.Object;
						public static addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: java.lang.Object): boolean;
						public static removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: java.lang.Object): boolean;
						public static getEnabledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager, param1: number): java.util.List;
						public static getInstalledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager): java.util.List;
						public static isTouchExplorationEnabled(param0: android.view.accessibility.AccessibilityManager): boolean;
					}
					export module AccessibilityManagerCompatIcs {
						export class AccessibilityStateChangeListenerBridge {
							public onAccessibilityStateChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}
