/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class AccessibilityDelegateCompatIcs {
					public static newAccessibilityDelegateDefaultImpl(): java.lang.Object;
					public static newAccessibilityDelegateBridge(param0: android.support.v4.view.AccessibilityDelegateCompatIcs.AccessibilityDelegateBridge): java.lang.Object;
					public static dispatchPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					public static onInitializeAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
					public static onInitializeAccessibilityNodeInfo(param0: java.lang.Object, param1: android.view.View, param2: java.lang.Object): void;
					public static onPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
					public static onRequestSendAccessibilityEvent(param0: java.lang.Object, param1: android.view.ViewGroup, param2: android.view.View, param3: android.view.accessibility.AccessibilityEvent): boolean;
					public static sendAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: number): void;
					public static sendAccessibilityEventUnchecked(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
				}
				export module AccessibilityDelegateCompatIcs {
					export class AccessibilityDelegateBridge {
						public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: java.lang.Object): void;
						public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public sendAccessibilityEvent(param0: android.view.View, param1: number): void;
						public sendAccessibilityEventUnchecked(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					}
				}
			}
		}
	}
}
