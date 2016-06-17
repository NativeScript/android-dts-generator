/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.FeatureInfo.d.ts" />
/// <reference path="./android.content.pm.InstrumentationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageInfo.d.ts" />
/// <reference path="./android.content.pm.PackageInstaller.d.ts" />
/// <reference path="./android.content.pm.PermissionGroupInfo.d.ts" />
/// <reference path="./android.content.pm.PermissionInfo.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PackageManager {
				public constructor();
				public getPackageInfo(param0: string, param1: number): android.content.pm.PackageInfo;
				public currentToCanonicalPackageNames(param0: native.Array<string>): native.Array<string>;
				public canonicalToCurrentPackageNames(param0: native.Array<string>): native.Array<string>;
				public getLaunchIntentForPackage(param0: string): android.content.Intent;
				public getLeanbackLaunchIntentForPackage(param0: string): android.content.Intent;
				public getPackageGids(param0: string): native.Array<number>;
				public getPermissionInfo(param0: string, param1: number): android.content.pm.PermissionInfo;
				public queryPermissionsByGroup(param0: string, param1: number): java.util.List;
				public getPermissionGroupInfo(param0: string, param1: number): android.content.pm.PermissionGroupInfo;
				public getAllPermissionGroups(param0: number): java.util.List;
				public getApplicationInfo(param0: string, param1: number): android.content.pm.ApplicationInfo;
				public getActivityInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ActivityInfo;
				public getReceiverInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ActivityInfo;
				public getServiceInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ServiceInfo;
				public getProviderInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ProviderInfo;
				public getInstalledPackages(param0: number): java.util.List;
				public getPackagesHoldingPermissions(param0: native.Array<string>, param1: number): java.util.List;
				public checkPermission(param0: string, param1: string): number;
				public isPermissionRevokedByPolicy(param0: string, param1: string): boolean;
				public addPermission(param0: android.content.pm.PermissionInfo): boolean;
				public addPermissionAsync(param0: android.content.pm.PermissionInfo): boolean;
				public removePermission(param0: string): void;
				public checkSignatures(param0: string, param1: string): number;
				public checkSignatures(param0: number, param1: number): number;
				public getPackagesForUid(param0: number): native.Array<string>;
				public getNameForUid(param0: number): string;
				public getInstalledApplications(param0: number): java.util.List;
				public getSystemSharedLibraryNames(): native.Array<string>;
				public getSystemAvailableFeatures(): native.Array<android.content.pm.FeatureInfo>;
				public hasSystemFeature(param0: string): boolean;
				public resolveActivity(param0: android.content.Intent, param1: number): android.content.pm.ResolveInfo;
				public queryIntentActivities(param0: android.content.Intent, param1: number): java.util.List;
				public queryIntentActivityOptions(param0: android.content.ComponentName, param1: native.Array<android.content.Intent>, param2: android.content.Intent, param3: number): java.util.List;
				public queryBroadcastReceivers(param0: android.content.Intent, param1: number): java.util.List;
				public resolveService(param0: android.content.Intent, param1: number): android.content.pm.ResolveInfo;
				public queryIntentServices(param0: android.content.Intent, param1: number): java.util.List;
				public queryIntentContentProviders(param0: android.content.Intent, param1: number): java.util.List;
				public resolveContentProvider(param0: string, param1: number): android.content.pm.ProviderInfo;
				public queryContentProviders(param0: string, param1: number, param2: number): java.util.List;
				public getInstrumentationInfo(param0: android.content.ComponentName, param1: number): android.content.pm.InstrumentationInfo;
				public queryInstrumentation(param0: string, param1: number): java.util.List;
				public getDrawable(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getActivityIcon(param0: android.content.ComponentName): android.graphics.drawable.Drawable;
				public getActivityIcon(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getActivityBanner(param0: android.content.ComponentName): android.graphics.drawable.Drawable;
				public getActivityBanner(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getDefaultActivityIcon(): android.graphics.drawable.Drawable;
				public getApplicationIcon(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getApplicationIcon(param0: string): android.graphics.drawable.Drawable;
				public getApplicationBanner(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getApplicationBanner(param0: string): android.graphics.drawable.Drawable;
				public getActivityLogo(param0: android.content.ComponentName): android.graphics.drawable.Drawable;
				public getActivityLogo(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getApplicationLogo(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getApplicationLogo(param0: string): android.graphics.drawable.Drawable;
				public getUserBadgedIcon(param0: android.graphics.drawable.Drawable, param1: android.os.UserHandle): android.graphics.drawable.Drawable;
				public getUserBadgedDrawableForDensity(param0: android.graphics.drawable.Drawable, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: number): android.graphics.drawable.Drawable;
				public getUserBadgedLabel(param0: string, param1: android.os.UserHandle): string;
				public getText(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): string;
				public getXml(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): android.content.res.XmlResourceParser;
				public getApplicationLabel(param0: android.content.pm.ApplicationInfo): string;
				public getResourcesForActivity(param0: android.content.ComponentName): android.content.res.Resources;
				public getResourcesForApplication(param0: android.content.pm.ApplicationInfo): android.content.res.Resources;
				public getResourcesForApplication(param0: string): android.content.res.Resources;
				public getPackageArchiveInfo(param0: string, param1: number): android.content.pm.PackageInfo;
				public verifyPendingInstall(param0: number, param1: number): void;
				public extendVerificationTimeout(param0: number, param1: number, param2: number): void;
				public setInstallerPackageName(param0: string, param1: string): void;
				public getInstallerPackageName(param0: string): string;
				public addPackageToPreferred(param0: string): void;
				public removePackageFromPreferred(param0: string): void;
				public getPreferredPackages(param0: number): java.util.List;
				public addPreferredActivity(param0: android.content.IntentFilter, param1: number, param2: native.Array<android.content.ComponentName>, param3: android.content.ComponentName): void;
				public clearPackagePreferredActivities(param0: string): void;
				public getPreferredActivities(param0: java.util.List, param1: java.util.List, param2: string): number;
				public setComponentEnabledSetting(param0: android.content.ComponentName, param1: number, param2: number): void;
				public getComponentEnabledSetting(param0: android.content.ComponentName): number;
				public setApplicationEnabledSetting(param0: string, param1: number, param2: number): void;
				public getApplicationEnabledSetting(param0: string): number;
				public isSafeMode(): boolean;
				public getPackageInstaller(): android.content.pm.PackageInstaller;
				public static COMPONENT_ENABLED_STATE_DEFAULT: number;
				public static COMPONENT_ENABLED_STATE_DISABLED: number;
				public static COMPONENT_ENABLED_STATE_DISABLED_UNTIL_USED: number;
				public static COMPONENT_ENABLED_STATE_DISABLED_USER: number;
				public static COMPONENT_ENABLED_STATE_ENABLED: number;
				public static DONT_KILL_APP: number;
				public static EXTRA_VERIFICATION_ID: string;
				public static EXTRA_VERIFICATION_RESULT: string;
				public static FEATURE_APP_WIDGETS: string;
				public static FEATURE_AUDIO_LOW_LATENCY: string;
				public static FEATURE_AUDIO_OUTPUT: string;
				public static FEATURE_AUDIO_PRO: string;
				public static FEATURE_AUTOMOTIVE: string;
				public static FEATURE_BACKUP: string;
				public static FEATURE_BLUETOOTH: string;
				public static FEATURE_BLUETOOTH_LE: string;
				public static FEATURE_CAMERA: string;
				public static FEATURE_CAMERA_ANY: string;
				public static FEATURE_CAMERA_AUTOFOCUS: string;
				public static FEATURE_CAMERA_CAPABILITY_MANUAL_POST_PROCESSING: string;
				public static FEATURE_CAMERA_CAPABILITY_MANUAL_SENSOR: string;
				public static FEATURE_CAMERA_CAPABILITY_RAW: string;
				public static FEATURE_CAMERA_EXTERNAL: string;
				public static FEATURE_CAMERA_FLASH: string;
				public static FEATURE_CAMERA_FRONT: string;
				public static FEATURE_CAMERA_LEVEL_FULL: string;
				public static FEATURE_CONNECTION_SERVICE: string;
				public static FEATURE_CONSUMER_IR: string;
				public static FEATURE_DEVICE_ADMIN: string;
				public static FEATURE_FAKETOUCH: string;
				public static FEATURE_FAKETOUCH_MULTITOUCH_DISTINCT: string;
				public static FEATURE_FAKETOUCH_MULTITOUCH_JAZZHAND: string;
				public static FEATURE_FINGERPRINT: string;
				public static FEATURE_GAMEPAD: string;
				public static FEATURE_HIFI_SENSORS: string;
				public static FEATURE_HOME_SCREEN: string;
				public static FEATURE_INPUT_METHODS: string;
				public static FEATURE_LEANBACK: string;
				public static FEATURE_LIVE_TV: string;
				public static FEATURE_LIVE_WALLPAPER: string;
				public static FEATURE_LOCATION: string;
				public static FEATURE_LOCATION_GPS: string;
				public static FEATURE_LOCATION_NETWORK: string;
				public static FEATURE_MANAGED_USERS: string;
				public static FEATURE_MICROPHONE: string;
				public static FEATURE_MIDI: string;
				public static FEATURE_NFC: string;
				public static FEATURE_NFC_HOST_CARD_EMULATION: string;
				public static FEATURE_OPENGLES_EXTENSION_PACK: string;
				public static FEATURE_PRINTING: string;
				public static FEATURE_SCREEN_LANDSCAPE: string;
				public static FEATURE_SCREEN_PORTRAIT: string;
				public static FEATURE_SECURELY_REMOVES_USERS: string;
				public static FEATURE_SENSOR_ACCELEROMETER: string;
				public static FEATURE_SENSOR_AMBIENT_TEMPERATURE: string;
				public static FEATURE_SENSOR_BAROMETER: string;
				public static FEATURE_SENSOR_COMPASS: string;
				public static FEATURE_SENSOR_GYROSCOPE: string;
				public static FEATURE_SENSOR_HEART_RATE: string;
				public static FEATURE_SENSOR_HEART_RATE_ECG: string;
				public static FEATURE_SENSOR_LIGHT: string;
				public static FEATURE_SENSOR_PROXIMITY: string;
				public static FEATURE_SENSOR_RELATIVE_HUMIDITY: string;
				public static FEATURE_SENSOR_STEP_COUNTER: string;
				public static FEATURE_SENSOR_STEP_DETECTOR: string;
				public static FEATURE_SIP: string;
				public static FEATURE_SIP_VOIP: string;
				public static FEATURE_TELEPHONY: string;
				public static FEATURE_TELEPHONY_CDMA: string;
				public static FEATURE_TELEPHONY_GSM: string;
				public static FEATURE_TELEVISION: string;
				public static FEATURE_TOUCHSCREEN: string;
				public static FEATURE_TOUCHSCREEN_MULTITOUCH: string;
				public static FEATURE_TOUCHSCREEN_MULTITOUCH_DISTINCT: string;
				public static FEATURE_TOUCHSCREEN_MULTITOUCH_JAZZHAND: string;
				public static FEATURE_USB_ACCESSORY: string;
				public static FEATURE_USB_HOST: string;
				public static FEATURE_VERIFIED_BOOT: string;
				public static FEATURE_WATCH: string;
				public static FEATURE_WEBVIEW: string;
				public static FEATURE_WIFI: string;
				public static FEATURE_WIFI_DIRECT: string;
				public static GET_ACTIVITIES: number;
				public static GET_CONFIGURATIONS: number;
				public static GET_DISABLED_COMPONENTS: number;
				public static GET_DISABLED_UNTIL_USED_COMPONENTS: number;
				public static GET_GIDS: number;
				public static GET_INSTRUMENTATION: number;
				public static GET_INTENT_FILTERS: number;
				public static GET_META_DATA: number;
				public static GET_PERMISSIONS: number;
				public static GET_PROVIDERS: number;
				public static GET_RECEIVERS: number;
				public static GET_RESOLVED_FILTER: number;
				public static GET_SERVICES: number;
				public static GET_SHARED_LIBRARY_FILES: number;
				public static GET_SIGNATURES: number;
				public static GET_UNINSTALLED_PACKAGES: number;
				public static GET_URI_PERMISSION_PATTERNS: number;
				public static MATCH_ALL: number;
				public static MATCH_DEFAULT_ONLY: number;
				public static MAXIMUM_VERIFICATION_TIMEOUT: number;
				public static PERMISSION_DENIED: number;
				public static PERMISSION_GRANTED: number;
				public static SIGNATURE_FIRST_NOT_SIGNED: number;
				public static SIGNATURE_MATCH: number;
				public static SIGNATURE_NEITHER_SIGNED: number;
				public static SIGNATURE_NO_MATCH: number;
				public static SIGNATURE_SECOND_NOT_SIGNED: number;
				public static SIGNATURE_UNKNOWN_PACKAGE: number;
				public static VERIFICATION_ALLOW: number;
				public static VERIFICATION_REJECT: number;
			}
			export module PackageManager {
				export class NameNotFoundException {
					public constructor(param0: string);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Exception);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor();
					public constructor(param0: string);
				}
			}
		}
	}
}
