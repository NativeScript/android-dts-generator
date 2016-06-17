/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewParentCompatICS {
					public static requestSendAccessibilityEvent(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}
