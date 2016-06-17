/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityEventCompatIcs {
						public static getRecordCount(param0: android.view.accessibility.AccessibilityEvent): number;
						public static appendRecord(param0: android.view.accessibility.AccessibilityEvent, param1: java.lang.Object): void;
						public static getRecord(param0: android.view.accessibility.AccessibilityEvent, param1: number): java.lang.Object;
						public static setScrollable(param0: android.view.accessibility.AccessibilityEvent, param1: boolean): void;
					}
				}
			}
		}
	}
}
