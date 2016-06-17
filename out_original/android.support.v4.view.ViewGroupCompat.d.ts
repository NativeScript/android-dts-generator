/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewGroupCompat {
					public static onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					public static setMotionEventSplittingEnabled(param0: android.view.ViewGroup, param1: boolean): void;
					public static getLayoutMode(param0: android.view.ViewGroup): number;
					public static setLayoutMode(param0: android.view.ViewGroup, param1: number): void;
					public static setTransitionGroup(param0: android.view.ViewGroup, param1: boolean): void;
					public static isTransitionGroup(param0: android.view.ViewGroup): boolean;
					public static getNestedScrollAxes(param0: android.view.ViewGroup): number;
					public static LAYOUT_MODE_CLIP_BOUNDS: number;
					public static LAYOUT_MODE_OPTICAL_BOUNDS: number;
				}
				export module ViewGroupCompat {
					export class ViewGroupCompatHCImpl {
						public setMotionEventSplittingEnabled(param0: android.view.ViewGroup, param1: boolean): void;
					}
					export class ViewGroupCompatIcsImpl {
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
					}
					export class ViewGroupCompatImpl {
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public setMotionEventSplittingEnabled(param0: android.view.ViewGroup, param1: boolean): void;
						public getLayoutMode(param0: android.view.ViewGroup): number;
						public setLayoutMode(param0: android.view.ViewGroup, param1: number): void;
						public setTransitionGroup(param0: android.view.ViewGroup, param1: boolean): void;
						public isTransitionGroup(param0: android.view.ViewGroup): boolean;
						public getNestedScrollAxes(param0: android.view.ViewGroup): number;
					}
					export class ViewGroupCompatJellybeanMR2Impl {
						public getLayoutMode(param0: android.view.ViewGroup): number;
						public setLayoutMode(param0: android.view.ViewGroup, param1: number): void;
					}
					export class ViewGroupCompatLollipopImpl {
						public setTransitionGroup(param0: android.view.ViewGroup, param1: boolean): void;
						public isTransitionGroup(param0: android.view.ViewGroup): boolean;
						public getNestedScrollAxes(param0: android.view.ViewGroup): number;
					}
					export class ViewGroupCompatStubImpl {
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public setMotionEventSplittingEnabled(param0: android.view.ViewGroup, param1: boolean): void;
						public getLayoutMode(param0: android.view.ViewGroup): number;
						public setLayoutMode(param0: android.view.ViewGroup, param1: number): void;
						public setTransitionGroup(param0: android.view.ViewGroup, param1: boolean): void;
						public isTransitionGroup(param0: android.view.ViewGroup): boolean;
						public getNestedScrollAxes(param0: android.view.ViewGroup): number;
					}
				}
			}
		}
	}
}
