/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.ComponentInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ActivityInfo {
				public constructor(param0: android.content.pm.ComponentInfo);
				public constructor(param0: android.os.Parcel);
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor();
				public constructor(param0: android.content.pm.ActivityInfo);
				public getThemeResource(): number;
				public dump(param0: android.util.Printer, param1: string): void;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CONFIG_DENSITY: number;
				public static CONFIG_FONT_SCALE: number;
				public static CONFIG_KEYBOARD: number;
				public static CONFIG_KEYBOARD_HIDDEN: number;
				public static CONFIG_LAYOUT_DIRECTION: number;
				public static CONFIG_LOCALE: number;
				public static CONFIG_MCC: number;
				public static CONFIG_MNC: number;
				public static CONFIG_NAVIGATION: number;
				public static CONFIG_ORIENTATION: number;
				public static CONFIG_SCREEN_LAYOUT: number;
				public static CONFIG_SCREEN_SIZE: number;
				public static CONFIG_SMALLEST_SCREEN_SIZE: number;
				public static CONFIG_TOUCHSCREEN: number;
				public static CONFIG_UI_MODE: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static DOCUMENT_LAUNCH_ALWAYS: number;
				public static DOCUMENT_LAUNCH_INTO_EXISTING: number;
				public static DOCUMENT_LAUNCH_NEVER: number;
				public static DOCUMENT_LAUNCH_NONE: number;
				public static FLAG_ALLOW_TASK_REPARENTING: number;
				public static FLAG_ALWAYS_RETAIN_TASK_STATE: number;
				public static FLAG_AUTO_REMOVE_FROM_RECENTS: number;
				public static FLAG_CLEAR_TASK_ON_LAUNCH: number;
				public static FLAG_EXCLUDE_FROM_RECENTS: number;
				public static FLAG_FINISH_ON_CLOSE_SYSTEM_DIALOGS: number;
				public static FLAG_FINISH_ON_TASK_LAUNCH: number;
				public static FLAG_HARDWARE_ACCELERATED: number;
				public static FLAG_IMMERSIVE: number;
				public static FLAG_MULTIPROCESS: number;
				public static FLAG_NO_HISTORY: number;
				public static FLAG_RELINQUISH_TASK_IDENTITY: number;
				public static FLAG_RESUME_WHILE_PAUSING: number;
				public static FLAG_SINGLE_USER: number;
				public static FLAG_STATE_NOT_NEEDED: number;
				public static LAUNCH_MULTIPLE: number;
				public static LAUNCH_SINGLE_INSTANCE: number;
				public static LAUNCH_SINGLE_TASK: number;
				public static LAUNCH_SINGLE_TOP: number;
				public static PERSIST_ACROSS_REBOOTS: number;
				public static PERSIST_NEVER: number;
				public static PERSIST_ROOT_ONLY: number;
				public static SCREEN_ORIENTATION_BEHIND: number;
				public static SCREEN_ORIENTATION_FULL_SENSOR: number;
				public static SCREEN_ORIENTATION_FULL_USER: number;
				public static SCREEN_ORIENTATION_LANDSCAPE: number;
				public static SCREEN_ORIENTATION_LOCKED: number;
				public static SCREEN_ORIENTATION_NOSENSOR: number;
				public static SCREEN_ORIENTATION_PORTRAIT: number;
				public static SCREEN_ORIENTATION_REVERSE_LANDSCAPE: number;
				public static SCREEN_ORIENTATION_REVERSE_PORTRAIT: number;
				public static SCREEN_ORIENTATION_SENSOR: number;
				public static SCREEN_ORIENTATION_SENSOR_LANDSCAPE: number;
				public static SCREEN_ORIENTATION_SENSOR_PORTRAIT: number;
				public static SCREEN_ORIENTATION_UNSPECIFIED: number;
				public static SCREEN_ORIENTATION_USER: number;
				public static SCREEN_ORIENTATION_USER_LANDSCAPE: number;
				public static SCREEN_ORIENTATION_USER_PORTRAIT: number;
				public static UIOPTION_SPLIT_ACTION_BAR_WHEN_NARROW: number;
				public configChanges: number;
				public documentLaunchMode: number;
				public flags: number;
				public launchMode: number;
				public maxRecents: number;
				public parentActivityName: string;
				public permission: string;
				public persistableMode: number;
				public screenOrientation: number;
				public softInputMode: number;
				public targetActivity: string;
				public taskAffinity: string;
				public theme: number;
				public uiOptions: number;
			}
		}
	}
}
