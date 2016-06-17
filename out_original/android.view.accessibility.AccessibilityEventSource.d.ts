/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityEventSource {
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}
