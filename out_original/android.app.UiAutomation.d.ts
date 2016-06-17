/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accessibilityservice.AccessibilityServiceInfo.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.WindowAnimationFrameStats.d.ts" />
/// <reference path="./android.view.WindowContentFrameStats.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export class UiAutomation {
			public setOnAccessibilityEventListener(param0: android.app.UiAutomation.OnAccessibilityEventListener): void;
			public performGlobalAction(param0: number): boolean;
			public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;
			public getServiceInfo(): android.accessibilityservice.AccessibilityServiceInfo;
			public setServiceInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): void;
			public getWindows(): java.util.List;
			public getRootInActiveWindow(): android.view.accessibility.AccessibilityNodeInfo;
			public injectInputEvent(param0: android.view.InputEvent, param1: boolean): boolean;
			public setRotation(param0: number): boolean;
			public executeAndWaitForEvent(param0: java.lang.Runnable, param1: android.app.UiAutomation.AccessibilityEventFilter, param2: number): android.view.accessibility.AccessibilityEvent;
			public waitForIdle(param0: number, param1: number): void;
			public takeScreenshot(): android.graphics.Bitmap;
			public setRunAsMonkey(param0: boolean): void;
			public clearWindowContentFrameStats(param0: number): boolean;
			public getWindowContentFrameStats(param0: number): android.view.WindowContentFrameStats;
			public clearWindowAnimationFrameStats(): void;
			public getWindowAnimationFrameStats(): android.view.WindowAnimationFrameStats;
			public executeShellCommand(param0: string): android.os.ParcelFileDescriptor;
			public static ROTATION_FREEZE_0: number;
			public static ROTATION_FREEZE_180: number;
			public static ROTATION_FREEZE_270: number;
			public static ROTATION_FREEZE_90: number;
			public static ROTATION_FREEZE_CURRENT: number;
			public static ROTATION_UNFREEZE: number;
		}
		export module UiAutomation {
			export class AccessibilityEventFilter {
				public accept(param0: android.view.accessibility.AccessibilityEvent): boolean;
			}
			export class OnAccessibilityEventListener {
				public onAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}
