/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accessibilityservice.AccessibilityServiceInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module accessibilityservice {
		export class AccessibilityService {
			public constructor(param0: android.content.Context);
			public constructor();
			public onAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
			public onInterrupt(): void;
			public onServiceConnected(): void;
			public onGesture(param0: number): boolean;
			public onKeyEvent(param0: android.view.KeyEvent): boolean;
			public getWindows(): java.util.List;
			public getRootInActiveWindow(): android.view.accessibility.AccessibilityNodeInfo;
			public performGlobalAction(param0: number): boolean;
			public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;
			public getServiceInfo(): android.accessibilityservice.AccessibilityServiceInfo;
			public setServiceInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): void;
			public getSystemService(param0: java.lang.Class): java.lang.Object;
			public getSystemService(param0: string): java.lang.Object;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public static GESTURE_SWIPE_DOWN: number;
			public static GESTURE_SWIPE_DOWN_AND_LEFT: number;
			public static GESTURE_SWIPE_DOWN_AND_RIGHT: number;
			public static GESTURE_SWIPE_DOWN_AND_UP: number;
			public static GESTURE_SWIPE_LEFT: number;
			public static GESTURE_SWIPE_LEFT_AND_DOWN: number;
			public static GESTURE_SWIPE_LEFT_AND_RIGHT: number;
			public static GESTURE_SWIPE_LEFT_AND_UP: number;
			public static GESTURE_SWIPE_RIGHT: number;
			public static GESTURE_SWIPE_RIGHT_AND_DOWN: number;
			public static GESTURE_SWIPE_RIGHT_AND_LEFT: number;
			public static GESTURE_SWIPE_RIGHT_AND_UP: number;
			public static GESTURE_SWIPE_UP: number;
			public static GESTURE_SWIPE_UP_AND_DOWN: number;
			public static GESTURE_SWIPE_UP_AND_LEFT: number;
			public static GESTURE_SWIPE_UP_AND_RIGHT: number;
			public static GLOBAL_ACTION_BACK: number;
			public static GLOBAL_ACTION_HOME: number;
			public static GLOBAL_ACTION_NOTIFICATIONS: number;
			public static GLOBAL_ACTION_POWER_DIALOG: number;
			public static GLOBAL_ACTION_QUICK_SETTINGS: number;
			public static GLOBAL_ACTION_RECENTS: number;
			public static SERVICE_INTERFACE: string;
			public static SERVICE_META_DATA: string;
		}
	}
}
