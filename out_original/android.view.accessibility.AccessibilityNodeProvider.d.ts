/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityNodeProvider {
				public constructor();
				public createAccessibilityNodeInfo(param0: number): android.view.accessibility.AccessibilityNodeInfo;
				public performAction(param0: number, param1: number, param2: android.os.Bundle): boolean;
				public findAccessibilityNodeInfosByText(param0: string, param1: number): java.util.List;
				public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;
				public static HOST_VIEW_ID: number;
			}
		}
	}
}
