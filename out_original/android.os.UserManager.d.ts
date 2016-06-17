/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module os {
		export class UserManager {
			public getUserName(): string;
			public isUserAGoat(): boolean;
			public isSystemUser(): boolean;
			public isUserRunning(param0: android.os.UserHandle): boolean;
			public isUserRunningOrStopping(param0: android.os.UserHandle): boolean;
			public getUserRestrictions(): android.os.Bundle;
			public getUserRestrictions(param0: android.os.UserHandle): android.os.Bundle;
			public setUserRestrictions(param0: android.os.Bundle): void;
			public setUserRestrictions(param0: android.os.Bundle, param1: android.os.UserHandle): void;
			public setUserRestriction(param0: string, param1: boolean): void;
			public hasUserRestriction(param0: string): boolean;
			public getSerialNumberForUser(param0: android.os.UserHandle): number;
			public getUserForSerialNumber(param0: number): android.os.UserHandle;
			public getUserCount(): number;
			public getUserProfiles(): java.util.List;
			public getApplicationRestrictions(param0: string): android.os.Bundle;
			public setRestrictionsChallenge(param0: string): boolean;
			public getUserCreationTime(param0: android.os.UserHandle): number;
			public static ALLOW_PARENT_PROFILE_APP_LINKING: string;
			public static DISALLOW_ADD_USER: string;
			public static DISALLOW_ADJUST_VOLUME: string;
			public static DISALLOW_APPS_CONTROL: string;
			public static DISALLOW_CONFIG_BLUETOOTH: string;
			public static DISALLOW_CONFIG_CELL_BROADCASTS: string;
			public static DISALLOW_CONFIG_CREDENTIALS: string;
			public static DISALLOW_CONFIG_MOBILE_NETWORKS: string;
			public static DISALLOW_CONFIG_TETHERING: string;
			public static DISALLOW_CONFIG_VPN: string;
			public static DISALLOW_CONFIG_WIFI: string;
			public static DISALLOW_CREATE_WINDOWS: string;
			public static DISALLOW_CROSS_PROFILE_COPY_PASTE: string;
			public static DISALLOW_DEBUGGING_FEATURES: string;
			public static DISALLOW_FACTORY_RESET: string;
			public static DISALLOW_FUN: string;
			public static DISALLOW_INSTALL_APPS: string;
			public static DISALLOW_INSTALL_UNKNOWN_SOURCES: string;
			public static DISALLOW_MODIFY_ACCOUNTS: string;
			public static DISALLOW_MOUNT_PHYSICAL_MEDIA: string;
			public static DISALLOW_NETWORK_RESET: string;
			public static DISALLOW_OUTGOING_BEAM: string;
			public static DISALLOW_OUTGOING_CALLS: string;
			public static DISALLOW_REMOVE_USER: string;
			public static DISALLOW_SAFE_BOOT: string;
			public static DISALLOW_SHARE_LOCATION: string;
			public static DISALLOW_SMS: string;
			public static DISALLOW_UNINSTALL_APPS: string;
			public static DISALLOW_UNMUTE_MICROPHONE: string;
			public static DISALLOW_USB_FILE_TRANSFER: string;
			public static ENSURE_VERIFY_APPS: string;
			public static KEY_RESTRICTIONS_PENDING: string;
		}
	}
}
