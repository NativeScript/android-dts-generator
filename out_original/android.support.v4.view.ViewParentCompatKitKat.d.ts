/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewParentCompatKitKat {
					public static notifySubtreeAccessibilityStateChanged(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
				}
			}
		}
	}
}
