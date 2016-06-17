/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ExploreByTouchHelper {
					public constructor();
					public constructor(param0: android.view.View);
					public getAccessibilityNodeProvider(param0: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
					public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;
					public sendEventForVirtualView(param0: number, param1: number): boolean;
					public invalidateRoot(): void;
					public invalidateVirtualView(param0: number): void;
					public getFocusedVirtualView(): number;
					public getVirtualViewAt(param0: number, param1: number): number;
					public getVisibleVirtualViews(param0: java.util.List): void;
					public onPopulateEventForVirtualView(param0: number, param1: android.view.accessibility.AccessibilityEvent): void;
					public onPopulateNodeForVirtualView(param0: number, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onPopulateNodeForHost(param0: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onPerformActionForVirtualView(param0: number, param1: number, param2: android.os.Bundle): boolean;
					public static INVALID_ID: number;
					public static HOST_ID: number;
				}
				export module ExploreByTouchHelper {
					export class ExploreByTouchNodeProvider {
						public createAccessibilityNodeInfo(param0: number): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
						public performAction(param0: number, param1: number, param2: android.os.Bundle): boolean;
					}
				}
			}
		}
	}
}
