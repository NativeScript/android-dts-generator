/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityEventCompatKitKat {
						public static setContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent, param1: number): void;
						public static getContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent): number;
					}
				}
			}
		}
	}
}
