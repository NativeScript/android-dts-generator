/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityNodeProviderCompatJellyBean {
						public static newAccessibilityNodeProviderBridge(param0: android.support.v4.view.accessibility.AccessibilityNodeProviderCompatJellyBean.AccessibilityNodeInfoBridge): java.lang.Object;
					}
					export module AccessibilityNodeProviderCompatJellyBean {
						export class AccessibilityNodeInfoBridge {
							public createAccessibilityNodeInfo(param0: number): java.lang.Object;
							public performAction(param0: number, param1: number, param2: android.os.Bundle): boolean;
							public findAccessibilityNodeInfosByText(param0: string, param1: number): java.util.List;
						}
					}
				}
			}
		}
	}
}
