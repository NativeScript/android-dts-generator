/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityManager.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityManagerCompat {
						public static addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
						public static removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
						public static getInstalledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager): java.util.List;
						public static getEnabledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager, param1: number): java.util.List;
						public static isTouchExplorationEnabled(param0: android.view.accessibility.AccessibilityManager): boolean;
					}
					export module AccessibilityManagerCompat {
						export class AccessibilityManagerIcsImpl {
							public newAccessiblityStateChangeListener(param0: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): java.lang.Object;
							public addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
							public removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
							public getEnabledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager, param1: number): java.util.List;
							public getInstalledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager): java.util.List;
							public isTouchExplorationEnabled(param0: android.view.accessibility.AccessibilityManager): boolean;
						}
						export class AccessibilityManagerStubImpl {
							public newAccessiblityStateChangeListener(param0: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): java.lang.Object;
							public addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
							public removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
							public getEnabledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager, param1: number): java.util.List;
							public getInstalledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager): java.util.List;
							public isTouchExplorationEnabled(param0: android.view.accessibility.AccessibilityManager): boolean;
						}
						export class AccessibilityManagerVersionImpl {
							public newAccessiblityStateChangeListener(param0: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): java.lang.Object;
							public addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
							public removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager, param1: android.support.v4.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat): boolean;
							public getEnabledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager, param1: number): java.util.List;
							public getInstalledAccessibilityServiceList(param0: android.view.accessibility.AccessibilityManager): java.util.List;
							public isTouchExplorationEnabled(param0: android.view.accessibility.AccessibilityManager): boolean;
						}
						export class AccessibilityStateChangeListenerCompat {
							public constructor();
							public onAccessibilityStateChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}
