/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityRecordCompat.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityEventCompat {
						public static getRecordCount(param0: android.view.accessibility.AccessibilityEvent): number;
						public static appendRecord(param0: android.view.accessibility.AccessibilityEvent, param1: android.support.v4.view.accessibility.AccessibilityRecordCompat): void;
						public static getRecord(param0: android.view.accessibility.AccessibilityEvent, param1: number): android.support.v4.view.accessibility.AccessibilityRecordCompat;
						public static asRecord(param0: android.view.accessibility.AccessibilityEvent): android.support.v4.view.accessibility.AccessibilityRecordCompat;
						public static setContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent, param1: number): void;
						public static getContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent): number;
						public static TYPE_VIEW_HOVER_ENTER: number;
						public static TYPE_VIEW_HOVER_EXIT: number;
						public static TYPE_TOUCH_EXPLORATION_GESTURE_START: number;
						public static TYPE_TOUCH_EXPLORATION_GESTURE_END: number;
						public static TYPE_WINDOW_CONTENT_CHANGED: number;
						public static TYPE_VIEW_SCROLLED: number;
						public static TYPE_VIEW_TEXT_SELECTION_CHANGED: number;
						public static TYPE_ANNOUNCEMENT: number;
						public static TYPE_VIEW_ACCESSIBILITY_FOCUSED: number;
						public static TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED: number;
						public static TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY: number;
						public static TYPE_GESTURE_DETECTION_START: number;
						public static TYPE_GESTURE_DETECTION_END: number;
						public static TYPE_TOUCH_INTERACTION_START: number;
						public static TYPE_TOUCH_INTERACTION_END: number;
						public static CONTENT_CHANGE_TYPE_UNDEFINED: number;
						public static CONTENT_CHANGE_TYPE_SUBTREE: number;
						public static CONTENT_CHANGE_TYPE_TEXT: number;
						public static CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION: number;
						public static TYPES_ALL_MASK: number;
					}
					export module AccessibilityEventCompat {
						export class AccessibilityEventIcsImpl {
							public appendRecord(param0: android.view.accessibility.AccessibilityEvent, param1: java.lang.Object): void;
							public getRecord(param0: android.view.accessibility.AccessibilityEvent, param1: number): java.lang.Object;
							public getRecordCount(param0: android.view.accessibility.AccessibilityEvent): number;
						}
						export class AccessibilityEventKitKatImpl {
							public setContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent, param1: number): void;
							public getContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent): number;
						}
						export class AccessibilityEventStubImpl {
							public appendRecord(param0: android.view.accessibility.AccessibilityEvent, param1: java.lang.Object): void;
							public getRecord(param0: android.view.accessibility.AccessibilityEvent, param1: number): java.lang.Object;
							public setContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent, param1: number): void;
							public getRecordCount(param0: android.view.accessibility.AccessibilityEvent): number;
							public getContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent): number;
						}
						export class AccessibilityEventVersionImpl {
							public getRecordCount(param0: android.view.accessibility.AccessibilityEvent): number;
							public appendRecord(param0: android.view.accessibility.AccessibilityEvent, param1: java.lang.Object): void;
							public getRecord(param0: android.view.accessibility.AccessibilityEvent, param1: number): java.lang.Object;
							public setContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent, param1: number): void;
							public getContentChangeTypes(param0: android.view.accessibility.AccessibilityEvent): number;
						}
					}
				}
			}
		}
	}
}
