/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeProviderCompat {
						public constructor();
						public constructor(param0: java.lang.Object);
						public getProvider(): java.lang.Object;
						public createAccessibilityNodeInfo(param0: number): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
						public performAction(param0: number, param1: number, param2: android.os.Bundle): boolean;
						public findAccessibilityNodeInfosByText(param0: string, param1: number): java.util.List;
						public findFocus(param0: number): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
					}
					export module AccessibilityNodeProviderCompat {
						export class AccessibilityNodeProviderImpl {
							public newAccessibilityNodeProviderBridge(param0: android.support.v4.view.accessibility.AccessibilityNodeProviderCompat): java.lang.Object;
						}
						export class AccessibilityNodeProviderJellyBeanImpl {
							public newAccessibilityNodeProviderBridge(param0: android.support.v4.view.accessibility.AccessibilityNodeProviderCompat): java.lang.Object;
						}
						export class AccessibilityNodeProviderKitKatImpl {
							public newAccessibilityNodeProviderBridge(param0: android.support.v4.view.accessibility.AccessibilityNodeProviderCompat): java.lang.Object;
						}
						export class AccessibilityNodeProviderStubImpl {
							public newAccessibilityNodeProviderBridge(param0: android.support.v4.view.accessibility.AccessibilityNodeProviderCompat): java.lang.Object;
						}
					}
				}
			}
		}
	}
}
