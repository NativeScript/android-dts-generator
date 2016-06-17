/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityManager {
				public isEnabled(): boolean;
				public isTouchExplorationEnabled(): boolean;
				public sendAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
				public interrupt(): void;
				public getAccessibilityServiceList(): java.util.List;
				public getInstalledAccessibilityServiceList(): java.util.List;
				public getEnabledAccessibilityServiceList(param0: number): java.util.List;
				public addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener): boolean;
				public removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener): boolean;
				public addTouchExplorationStateChangeListener(param0: android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener): boolean;
				public removeTouchExplorationStateChangeListener(param0: android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener): boolean;
			}
			export module AccessibilityManager {
				export class AccessibilityStateChangeListener {
					public onAccessibilityStateChanged(param0: boolean): void;
				}
				export class TouchExplorationStateChangeListener {
					public onTouchExplorationStateChanged(param0: boolean): void;
				}
			}
		}
	}
}
