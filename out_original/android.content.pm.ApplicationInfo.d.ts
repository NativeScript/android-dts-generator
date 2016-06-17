/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ApplicationInfo {
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor(param0: android.os.Parcel);
				public constructor();
				public constructor(param0: android.content.pm.ApplicationInfo);
				public dump(param0: android.util.Printer, param1: string): void;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public loadDescription(param0: android.content.pm.PackageManager): string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_ALLOW_BACKUP: number;
				public static FLAG_ALLOW_CLEAR_USER_DATA: number;
				public static FLAG_ALLOW_TASK_REPARENTING: number;
				public static FLAG_DEBUGGABLE: number;
				public static FLAG_EXTERNAL_STORAGE: number;
				public static FLAG_EXTRACT_NATIVE_LIBS: number;
				public static FLAG_FACTORY_TEST: number;
				public static FLAG_FULL_BACKUP_ONLY: number;
				public static FLAG_HARDWARE_ACCELERATED: number;
				public static FLAG_HAS_CODE: number;
				public static FLAG_INSTALLED: number;
				public static FLAG_IS_DATA_ONLY: number;
				public static FLAG_IS_GAME: number;
				public static FLAG_KILL_AFTER_RESTORE: number;
				public static FLAG_LARGE_HEAP: number;
				public static FLAG_MULTIARCH: number;
				public static FLAG_PERSISTENT: number;
				public static FLAG_RESIZEABLE_FOR_SCREENS: number;
				public static FLAG_RESTORE_ANY_VERSION: number;
				public static FLAG_STOPPED: number;
				public static FLAG_SUPPORTS_LARGE_SCREENS: number;
				public static FLAG_SUPPORTS_NORMAL_SCREENS: number;
				public static FLAG_SUPPORTS_RTL: number;
				public static FLAG_SUPPORTS_SCREEN_DENSITIES: number;
				public static FLAG_SUPPORTS_SMALL_SCREENS: number;
				public static FLAG_SUPPORTS_XLARGE_SCREENS: number;
				public static FLAG_SYSTEM: number;
				public static FLAG_TEST_ONLY: number;
				public static FLAG_UPDATED_SYSTEM_APP: number;
				public static FLAG_USES_CLEARTEXT_TRAFFIC: number;
				public static FLAG_VM_SAFE_MODE: number;
				public backupAgentName: string;
				public className: string;
				public compatibleWidthLimitDp: number;
				public dataDir: string;
				public descriptionRes: number;
				public enabled: boolean;
				public flags: number;
				public largestWidthLimitDp: number;
				public manageSpaceActivityName: string;
				public nativeLibraryDir: string;
				public permission: string;
				public processName: string;
				public publicSourceDir: string;
				public requiresSmallestWidthDp: number;
				public sharedLibraryFiles: native.Array<string>;
				public sourceDir: string;
				public splitPublicSourceDirs: native.Array<string>;
				public splitSourceDirs: native.Array<string>;
				public targetSdkVersion: number;
				public taskAffinity: string;
				public theme: number;
				public uiOptions: number;
				public uid: number;
			}
			export module ApplicationInfo {
				export class DisplayNameComparator {
					public constructor();
					public constructor(param0: android.content.pm.PackageManager);
					public compare(param0: android.content.pm.ApplicationInfo, param1: android.content.pm.ApplicationInfo): number;
				}
			}
		}
	}
}
