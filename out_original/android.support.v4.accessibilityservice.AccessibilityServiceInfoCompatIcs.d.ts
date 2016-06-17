/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accessibilityservice.AccessibilityServiceInfo.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module accessibilityservice {
				export class AccessibilityServiceInfoCompatIcs {
					public static getCanRetrieveWindowContent(param0: android.accessibilityservice.AccessibilityServiceInfo): boolean;
					public static getDescription(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
					public static getId(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
					public static getResolveInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): android.content.pm.ResolveInfo;
					public static getSettingsActivityName(param0: android.accessibilityservice.AccessibilityServiceInfo): string;
				}
			}
		}
	}
}
