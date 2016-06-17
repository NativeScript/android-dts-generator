/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class AccessibilityDelegateCompat {
					public constructor();
					public sendAccessibilityEvent(param0: android.view.View, param1: number): void;
					public sendAccessibilityEventUnchecked(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					public getAccessibilityNodeProvider(param0: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
					public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				}
				export module AccessibilityDelegateCompat {
					export class AccessibilityDelegateIcsImpl {
						public newAccessiblityDelegateDefaultImpl(): java.lang.Object;
						public newAccessiblityDelegateBridge(param0: android.support.v4.view.AccessibilityDelegateCompat): java.lang.Object;
						public dispatchPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public onInitializeAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: java.lang.Object, param1: android.view.View, param2: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public onPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public onRequestSendAccessibilityEvent(param0: java.lang.Object, param1: android.view.ViewGroup, param2: android.view.View, param3: android.view.accessibility.AccessibilityEvent): boolean;
						public sendAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public sendAccessibilityEventUnchecked(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
					}
					export class AccessibilityDelegateImpl {
						public newAccessiblityDelegateDefaultImpl(): java.lang.Object;
						public newAccessiblityDelegateBridge(param0: android.support.v4.view.AccessibilityDelegateCompat): java.lang.Object;
						public dispatchPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public onInitializeAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: java.lang.Object, param1: android.view.View, param2: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public onPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public onRequestSendAccessibilityEvent(param0: java.lang.Object, param1: android.view.ViewGroup, param2: android.view.View, param3: android.view.accessibility.AccessibilityEvent): boolean;
						public sendAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public sendAccessibilityEventUnchecked(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public getAccessibilityNodeProvider(param0: java.lang.Object, param1: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
						public performAccessibilityAction(param0: java.lang.Object, param1: android.view.View, param2: number, param3: android.os.Bundle): boolean;
					}
					export class AccessibilityDelegateJellyBeanImpl {
						public newAccessiblityDelegateBridge(param0: android.support.v4.view.AccessibilityDelegateCompat): java.lang.Object;
						public getAccessibilityNodeProvider(param0: java.lang.Object, param1: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
						public performAccessibilityAction(param0: java.lang.Object, param1: android.view.View, param2: number, param3: android.os.Bundle): boolean;
					}
					export class AccessibilityDelegateStubImpl {
						public newAccessiblityDelegateDefaultImpl(): java.lang.Object;
						public newAccessiblityDelegateBridge(param0: android.support.v4.view.AccessibilityDelegateCompat): java.lang.Object;
						public dispatchPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public onInitializeAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: java.lang.Object, param1: android.view.View, param2: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public onPopulateAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public onRequestSendAccessibilityEvent(param0: java.lang.Object, param1: android.view.ViewGroup, param2: android.view.View, param3: android.view.accessibility.AccessibilityEvent): boolean;
						public sendAccessibilityEvent(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						public sendAccessibilityEventUnchecked(param0: java.lang.Object, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): void;
						public getAccessibilityNodeProvider(param0: java.lang.Object, param1: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
						public performAccessibilityAction(param0: java.lang.Object, param1: android.view.View, param2: number, param3: android.os.Bundle): boolean;
					}
				}
			}
		}
	}
}
