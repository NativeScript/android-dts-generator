/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewParentCompat {
					public static requestSendAccessibilityEvent(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					public static onStartNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): boolean;
					public static onNestedScrollAccepted(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
					public static onStopNestedScroll(param0: android.view.ViewParent, param1: android.view.View): void;
					public static onNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: number, param5: number): void;
					public static onNestedPreScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: native.Array<number>): void;
					public static onNestedFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: boolean): boolean;
					public static onNestedPreFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number): boolean;
					public static notifySubtreeAccessibilityStateChanged(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
				}
				export module ViewParentCompat {
					export class ViewParentCompatICSImpl {
						public requestSendAccessibilityEvent(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					}
					export class ViewParentCompatImpl {
						public requestSendAccessibilityEvent(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): boolean;
						public onNestedScrollAccepted(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
						public onStopNestedScroll(param0: android.view.ViewParent, param1: android.view.View): void;
						public onNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: number, param5: number): void;
						public onNestedPreScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: native.Array<number>): void;
						public onNestedFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: boolean): boolean;
						public onNestedPreFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number): boolean;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
					}
					export class ViewParentCompatKitKatImpl {
						public notifySubtreeAccessibilityStateChanged(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
					}
					export class ViewParentCompatLollipopImpl {
						public onStartNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): boolean;
						public onNestedScrollAccepted(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
						public onStopNestedScroll(param0: android.view.ViewParent, param1: android.view.View): void;
						public onNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: number, param5: number): void;
						public onNestedPreScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: native.Array<number>): void;
						public onNestedFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: boolean): boolean;
						public onNestedPreFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number): boolean;
					}
					export class ViewParentCompatStubImpl {
						public requestSendAccessibilityEvent(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): boolean;
						public onNestedScrollAccepted(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
						public onStopNestedScroll(param0: android.view.ViewParent, param1: android.view.View): void;
						public onNestedScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: number, param5: number): void;
						public onNestedPreScroll(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: native.Array<number>): void;
						public onNestedFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number, param4: boolean): boolean;
						public onNestedPreFling(param0: android.view.ViewParent, param1: android.view.View, param2: number, param3: number): boolean;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.ViewParent, param1: android.view.View, param2: android.view.View, param3: number): void;
					}
				}
			}
		}
	}
}
