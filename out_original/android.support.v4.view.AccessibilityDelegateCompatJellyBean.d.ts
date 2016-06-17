/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class AccessibilityDelegateCompatJellyBean {
					public static newAccessibilityDelegateBridge(param0: android.support.v4.view.AccessibilityDelegateCompatJellyBean.AccessibilityDelegateBridgeJellyBean): java.lang.Object;
					public static getAccessibilityNodeProvider(param0: java.lang.Object, param1: android.view.View): java.lang.Object;
					public static performAccessibilityAction(param0: java.lang.Object, param1: android.view.View, param2: number, param3: android.os.Bundle): boolean;
				}
				export module AccessibilityDelegateCompatJellyBean {
					export class AccessibilityDelegateBridgeJellyBean {
						public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: java.lang.Object): void;
						public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public sendAccessibilityEvent(param0: android.view.View, param1: number): void;
						public sendAccessibilityEventUnchecked(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public getAccessibilityNodeProvider(param0: android.view.View): java.lang.Object;
						public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					}
				}
			}
		}
	}
}
