/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accessibilityservice.AccessibilityServiceInfo.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module accessibilityservice {
				export class AccessibilityServiceInfoCompat {
					public static getId(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
					public static getResolveInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): android.content.pm.ResolveInfo;
					public static getSettingsActivityName(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
					public static getCanRetrieveWindowContent(param0: android.accessibilityservice.AccessibilityServiceInfo): boolean;
					public static getDescription(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
					public static feedbackTypeToString(param0: number): string;
					public static flagToString(param0: number): string;
					public static getCapabilities(param0: android.accessibilityservice.AccessibilityServiceInfo): number;
					public static capabilityToString(param0: number): string;
					public static CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT: number;
					public static CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION: number;
					public static CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
					public static CAPABILITY_CAN_FILTER_KEY_EVENTS: number;
					public static FEEDBACK_BRAILLE: number;
					public static FEEDBACK_ALL_MASK: number;
					public static DEFAULT: number;
					public static FLAG_INCLUDE_NOT_IMPORTANT_VIEWS: number;
					public static FLAG_REQUEST_TOUCH_EXPLORATION_MODE: number;
					public static FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
					public static FLAG_REPORT_VIEW_IDS: number;
					public static FLAG_REQUEST_FILTER_KEY_EVENTS: number;
				}
				export module AccessibilityServiceInfoCompat {
					export class AccessibilityServiceInfoIcsImpl {
						public getCanRetrieveWindowContent(param0: android.accessibilityservice.AccessibilityServiceInfo): boolean;
						public getDescription(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getId(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getResolveInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): android.content.pm.ResolveInfo;
						public getSettingsActivityName(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getCapabilities(param0: android.accessibilityservice.AccessibilityServiceInfo): number;
					}
					export class AccessibilityServiceInfoJellyBeanMr2 {
						public getCapabilities(param0: android.accessibilityservice.AccessibilityServiceInfo): number;
					}
					export class AccessibilityServiceInfoStubImpl {
						public getCanRetrieveWindowContent(param0: android.accessibilityservice.AccessibilityServiceInfo): boolean;
						public getDescription(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getId(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getResolveInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): android.content.pm.ResolveInfo;
						public getSettingsActivityName(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getCapabilities(param0: android.accessibilityservice.AccessibilityServiceInfo): number;
					}
					export class AccessibilityServiceInfoVersionImpl {
						public getId(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getResolveInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): android.content.pm.ResolveInfo;
						public getCanRetrieveWindowContent(param0: android.accessibilityservice.AccessibilityServiceInfo): boolean;
						public getDescription(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getSettingsActivityName(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
						public getCapabilities(param0: android.accessibilityservice.AccessibilityServiceInfo): number;
					}
				}
			}
		}
	}
}
