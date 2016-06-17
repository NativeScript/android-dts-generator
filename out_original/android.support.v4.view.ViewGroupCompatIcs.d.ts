/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewGroupCompatIcs {
					public static onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}
