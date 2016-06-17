/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module accessibilityservice {
		export class AccessibilityServiceInfo {
			public constructor();
			public getId(): string;
			public getResolveInfo(): android.content.pm.ResolveInfo;
			public getSettingsActivityName(): string;
			public getCanRetrieveWindowContent(): boolean;
			public getCapabilities(): number;
			public getDescription(): string;
			public loadDescription(param0: android.content.pm.PackageManager): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static feedbackTypeToString(param0: number): string;
			public static flagToString(param0: number): string;
			public static capabilityToString(param0: number): string;
			public static CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
			public static CAPABILITY_CAN_REQUEST_FILTER_KEY_EVENTS: number;
			public static CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION: number;
			public static CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static DEFAULT: number;
			public static FEEDBACK_ALL_MASK: number;
			public static FEEDBACK_AUDIBLE: number;
			public static FEEDBACK_BRAILLE: number;
			public static FEEDBACK_GENERIC: number;
			public static FEEDBACK_HAPTIC: number;
			public static FEEDBACK_SPOKEN: number;
			public static FEEDBACK_VISUAL: number;
			public static FLAG_INCLUDE_NOT_IMPORTANT_VIEWS: number;
			public static FLAG_REPORT_VIEW_IDS: number;
			public static FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
			public static FLAG_REQUEST_FILTER_KEY_EVENTS: number;
			public static FLAG_REQUEST_TOUCH_EXPLORATION_MODE: number;
			public static FLAG_RETRIEVE_INTERACTIVE_WINDOWS: number;
			public eventTypes: number;
			public feedbackType: number;
			public flags: number;
			public notificationTimeout: number;
			public packageNames: native.Array<string>;
		}
	}
}
