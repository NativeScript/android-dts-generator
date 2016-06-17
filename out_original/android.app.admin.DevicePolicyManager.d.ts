/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.admin.SystemUpdatePolicy.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.ProxyInfo.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export module admin {
			export class DevicePolicyManager {
				public isAdminActive(param0: android.content.ComponentName): boolean;
				public getActiveAdmins(): java.util.List;
				public removeActiveAdmin(param0: android.content.ComponentName): void;
				public hasGrantedPolicy(param0: android.content.ComponentName, param1: number): boolean;
				public setPasswordQuality(param0: android.content.ComponentName, param1: number): void;
				public getPasswordQuality(param0: android.content.ComponentName): number;
				public setPasswordMinimumLength(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumLength(param0: android.content.ComponentName): number;
				public setPasswordMinimumUpperCase(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumUpperCase(param0: android.content.ComponentName): number;
				public setPasswordMinimumLowerCase(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumLowerCase(param0: android.content.ComponentName): number;
				public setPasswordMinimumLetters(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumLetters(param0: android.content.ComponentName): number;
				public setPasswordMinimumNumeric(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumNumeric(param0: android.content.ComponentName): number;
				public setPasswordMinimumSymbols(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumSymbols(param0: android.content.ComponentName): number;
				public setPasswordMinimumNonLetter(param0: android.content.ComponentName, param1: number): void;
				public getPasswordMinimumNonLetter(param0: android.content.ComponentName): number;
				public setPasswordHistoryLength(param0: android.content.ComponentName, param1: number): void;
				public setPasswordExpirationTimeout(param0: android.content.ComponentName, param1: number): void;
				public getPasswordExpirationTimeout(param0: android.content.ComponentName): number;
				public getPasswordExpiration(param0: android.content.ComponentName): number;
				public getPasswordHistoryLength(param0: android.content.ComponentName): number;
				public getPasswordMaximumLength(param0: number): number;
				public isActivePasswordSufficient(): boolean;
				public getCurrentFailedPasswordAttempts(): number;
				public setMaximumFailedPasswordsForWipe(param0: android.content.ComponentName, param1: number): void;
				public getMaximumFailedPasswordsForWipe(param0: android.content.ComponentName): number;
				public resetPassword(param0: string, param1: number): boolean;
				public setMaximumTimeToLock(param0: android.content.ComponentName, param1: number): void;
				public getMaximumTimeToLock(param0: android.content.ComponentName): number;
				public lockNow(): void;
				public wipeData(param0: number): void;
				public setRecommendedGlobalProxy(param0: android.content.ComponentName, param1: android.net.ProxyInfo): void;
				public setStorageEncryption(param0: android.content.ComponentName, param1: boolean): number;
				public getStorageEncryption(param0: android.content.ComponentName): boolean;
				public getStorageEncryptionStatus(): number;
				public installCaCert(param0: android.content.ComponentName, param1: native.Array<number>): boolean;
				public uninstallCaCert(param0: android.content.ComponentName, param1: native.Array<number>): void;
				public getInstalledCaCerts(param0: android.content.ComponentName): java.util.List;
				public uninstallAllUserCaCerts(param0: android.content.ComponentName): void;
				public hasCaCertInstalled(param0: android.content.ComponentName, param1: native.Array<number>): boolean;
				public installKeyPair(param0: android.content.ComponentName, param1: java.security.PrivateKey, param2: java.security.cert.Certificate, param3: string): boolean;
				public setCertInstallerPackage(param0: android.content.ComponentName, param1: string): void;
				public getCertInstallerPackage(param0: android.content.ComponentName): string;
				public setCameraDisabled(param0: android.content.ComponentName, param1: boolean): void;
				public getCameraDisabled(param0: android.content.ComponentName): boolean;
				public setScreenCaptureDisabled(param0: android.content.ComponentName, param1: boolean): void;
				public getScreenCaptureDisabled(param0: android.content.ComponentName): boolean;
				public setAutoTimeRequired(param0: android.content.ComponentName, param1: boolean): void;
				public getAutoTimeRequired(): boolean;
				public setKeyguardDisabledFeatures(param0: android.content.ComponentName, param1: number): void;
				public getKeyguardDisabledFeatures(param0: android.content.ComponentName): number;
				public isDeviceOwnerApp(param0: string): boolean;
				public clearDeviceOwnerApp(param0: string): void;
				public setProfileEnabled(param0: android.content.ComponentName): void;
				public setProfileName(param0: android.content.ComponentName, param1: string): void;
				public isProfileOwnerApp(param0: string): boolean;
				public addPersistentPreferredActivity(param0: android.content.ComponentName, param1: android.content.IntentFilter, param2: android.content.ComponentName): void;
				public clearPackagePersistentPreferredActivities(param0: android.content.ComponentName, param1: string): void;
				public setApplicationRestrictions(param0: android.content.ComponentName, param1: string, param2: android.os.Bundle): void;
				public setTrustAgentConfiguration(param0: android.content.ComponentName, param1: android.content.ComponentName, param2: android.os.PersistableBundle): void;
				public getTrustAgentConfiguration(param0: android.content.ComponentName, param1: android.content.ComponentName): java.util.List;
				public setCrossProfileCallerIdDisabled(param0: android.content.ComponentName, param1: boolean): void;
				public getCrossProfileCallerIdDisabled(param0: android.content.ComponentName): boolean;
				public setBluetoothContactSharingDisabled(param0: android.content.ComponentName, param1: boolean): void;
				public getBluetoothContactSharingDisabled(param0: android.content.ComponentName): boolean;
				public addCrossProfileIntentFilter(param0: android.content.ComponentName, param1: android.content.IntentFilter, param2: number): void;
				public clearCrossProfileIntentFilters(param0: android.content.ComponentName): void;
				public setPermittedAccessibilityServices(param0: android.content.ComponentName, param1: java.util.List): boolean;
				public getPermittedAccessibilityServices(param0: android.content.ComponentName): java.util.List;
				public setPermittedInputMethods(param0: android.content.ComponentName, param1: java.util.List): boolean;
				public getPermittedInputMethods(param0: android.content.ComponentName): java.util.List;
				public createUser(param0: android.content.ComponentName, param1: string): android.os.UserHandle;
				public createAndInitializeUser(param0: android.content.ComponentName, param1: string, param2: string, param3: android.content.ComponentName, param4: android.os.Bundle): android.os.UserHandle;
				public removeUser(param0: android.content.ComponentName, param1: android.os.UserHandle): boolean;
				public switchUser(param0: android.content.ComponentName, param1: android.os.UserHandle): boolean;
				public getApplicationRestrictions(param0: android.content.ComponentName, param1: string): android.os.Bundle;
				public addUserRestriction(param0: android.content.ComponentName, param1: string): void;
				public clearUserRestriction(param0: android.content.ComponentName, param1: string): void;
				public setApplicationHidden(param0: android.content.ComponentName, param1: string, param2: boolean): boolean;
				public isApplicationHidden(param0: android.content.ComponentName, param1: string): boolean;
				public enableSystemApp(param0: android.content.ComponentName, param1: string): void;
				public enableSystemApp(param0: android.content.ComponentName, param1: android.content.Intent): number;
				public setAccountManagementDisabled(param0: android.content.ComponentName, param1: string, param2: boolean): void;
				public getAccountTypesWithManagementDisabled(): native.Array<string>;
				public setLockTaskPackages(param0: android.content.ComponentName, param1: native.Array<string>): void;
				public isLockTaskPermitted(param0: string): boolean;
				public setGlobalSetting(param0: android.content.ComponentName, param1: string, param2: string): void;
				public setSecureSetting(param0: android.content.ComponentName, param1: string, param2: string): void;
				public setRestrictionsProvider(param0: android.content.ComponentName, param1: android.content.ComponentName): void;
				public setMasterVolumeMuted(param0: android.content.ComponentName, param1: boolean): void;
				public isMasterVolumeMuted(param0: android.content.ComponentName): boolean;
				public setUninstallBlocked(param0: android.content.ComponentName, param1: string, param2: boolean): void;
				public isUninstallBlocked(param0: android.content.ComponentName, param1: string): boolean;
				public addCrossProfileWidgetProvider(param0: android.content.ComponentName, param1: string): boolean;
				public removeCrossProfileWidgetProvider(param0: android.content.ComponentName, param1: string): boolean;
				public getCrossProfileWidgetProviders(param0: android.content.ComponentName): java.util.List;
				public setUserIcon(param0: android.content.ComponentName, param1: android.graphics.Bitmap): void;
				public setSystemUpdatePolicy(param0: android.content.ComponentName, param1: android.app.admin.SystemUpdatePolicy): void;
				public getSystemUpdatePolicy(): android.app.admin.SystemUpdatePolicy;
				public setKeyguardDisabled(param0: android.content.ComponentName, param1: boolean): boolean;
				public setStatusBarDisabled(param0: android.content.ComponentName, param1: boolean): boolean;
				public setPermissionPolicy(param0: android.content.ComponentName, param1: number): void;
				public getPermissionPolicy(param0: android.content.ComponentName): number;
				public setPermissionGrantState(param0: android.content.ComponentName, param1: string, param2: string, param3: number): boolean;
				public getPermissionGrantState(param0: android.content.ComponentName, param1: string, param2: string): number;
				public static ACTION_ADD_DEVICE_ADMIN: string;
				public static ACTION_DEVICE_OWNER_CHANGED: string;
				public static ACTION_MANAGED_PROFILE_PROVISIONED: string;
				public static ACTION_PROVISION_MANAGED_DEVICE: string;
				public static ACTION_PROVISION_MANAGED_PROFILE: string;
				public static ACTION_SET_NEW_PASSWORD: string;
				public static ACTION_START_ENCRYPTION: string;
				public static ACTION_SYSTEM_UPDATE_POLICY_CHANGED: string;
				public static ENCRYPTION_STATUS_ACTIVATING: number;
				public static ENCRYPTION_STATUS_ACTIVE: number;
				public static ENCRYPTION_STATUS_ACTIVE_DEFAULT_KEY: number;
				public static ENCRYPTION_STATUS_INACTIVE: number;
				public static ENCRYPTION_STATUS_UNSUPPORTED: number;
				public static EXTRA_ADD_EXPLANATION: string;
				public static EXTRA_DEVICE_ADMIN: string;
				public static EXTRA_PROVISIONING_ACCOUNT_TO_MIGRATE: string;
				public static EXTRA_PROVISIONING_ADMIN_EXTRAS_BUNDLE: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_MINIMUM_VERSION_CODE: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_CHECKSUM: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_COOKIE_HEADER: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_NAME: string;
				public static EXTRA_PROVISIONING_DEVICE_ADMIN_SIGNATURE_CHECKSUM: string;
				public static EXTRA_PROVISIONING_EMAIL_ADDRESS: string;
				public static EXTRA_PROVISIONING_LEAVE_ALL_SYSTEM_APPS_ENABLED: string;
				public static EXTRA_PROVISIONING_LOCALE: string;
				public static EXTRA_PROVISIONING_LOCAL_TIME: string;
				public static EXTRA_PROVISIONING_SKIP_ENCRYPTION: string;
				public static EXTRA_PROVISIONING_TIME_ZONE: string;
				public static EXTRA_PROVISIONING_WIFI_HIDDEN: string;
				public static EXTRA_PROVISIONING_WIFI_PAC_URL: string;
				public static EXTRA_PROVISIONING_WIFI_PASSWORD: string;
				public static EXTRA_PROVISIONING_WIFI_PROXY_BYPASS: string;
				public static EXTRA_PROVISIONING_WIFI_PROXY_HOST: string;
				public static EXTRA_PROVISIONING_WIFI_PROXY_PORT: string;
				public static EXTRA_PROVISIONING_WIFI_SECURITY_TYPE: string;
				public static EXTRA_PROVISIONING_WIFI_SSID: string;
				public static FLAG_MANAGED_CAN_ACCESS_PARENT: number;
				public static FLAG_PARENT_CAN_ACCESS_MANAGED: number;
				public static KEYGUARD_DISABLE_FEATURES_ALL: number;
				public static KEYGUARD_DISABLE_FEATURES_NONE: number;
				public static KEYGUARD_DISABLE_FINGERPRINT: number;
				public static KEYGUARD_DISABLE_SECURE_CAMERA: number;
				public static KEYGUARD_DISABLE_SECURE_NOTIFICATIONS: number;
				public static KEYGUARD_DISABLE_TRUST_AGENTS: number;
				public static KEYGUARD_DISABLE_UNREDACTED_NOTIFICATIONS: number;
				public static KEYGUARD_DISABLE_WIDGETS_ALL: number;
				public static MIME_TYPE_PROVISIONING_NFC: string;
				public static PASSWORD_QUALITY_ALPHABETIC: number;
				public static PASSWORD_QUALITY_ALPHANUMERIC: number;
				public static PASSWORD_QUALITY_BIOMETRIC_WEAK: number;
				public static PASSWORD_QUALITY_COMPLEX: number;
				public static PASSWORD_QUALITY_NUMERIC: number;
				public static PASSWORD_QUALITY_NUMERIC_COMPLEX: number;
				public static PASSWORD_QUALITY_SOMETHING: number;
				public static PASSWORD_QUALITY_UNSPECIFIED: number;
				public static PERMISSION_GRANT_STATE_DEFAULT: number;
				public static PERMISSION_GRANT_STATE_DENIED: number;
				public static PERMISSION_GRANT_STATE_GRANTED: number;
				public static PERMISSION_POLICY_AUTO_DENY: number;
				public static PERMISSION_POLICY_AUTO_GRANT: number;
				public static PERMISSION_POLICY_PROMPT: number;
				public static RESET_PASSWORD_DO_NOT_ASK_CREDENTIALS_ON_BOOT: number;
				public static RESET_PASSWORD_REQUIRE_ENTRY: number;
				public static WIPE_EXTERNAL_STORAGE: number;
				public static WIPE_RESET_PROTECTION_DATA: number;
			}
		}
	}
}
