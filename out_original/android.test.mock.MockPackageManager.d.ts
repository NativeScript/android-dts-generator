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
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module test {
		export module mock {
			export class MockPackageManager {
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
				public checkSignatures(param0: number, param1: number): number;
				public checkSignatures(param0: string, param1: string): number;
				public checkSignatures(param0: number, param1: number): number;
				public getPackagesForUid(param0: number): native.Array<string>;
				public getNameForUid(param0: number): string;
				public getInstalledApplications(param0: number): java.util.List;
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
				public getActivityIcon(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getActivityIcon(param0: android.content.ComponentName): android.graphics.drawable.Drawable;
				public getActivityIcon(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getDefaultActivityIcon(): android.graphics.drawable.Drawable;
				public getActivityBanner(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getActivityBanner(param0: android.content.ComponentName): android.graphics.drawable.Drawable;
				public getActivityBanner(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getApplicationBanner(param0: string): android.graphics.drawable.Drawable;
				public getApplicationBanner(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getApplicationBanner(param0: string): android.graphics.drawable.Drawable;
				public getApplicationIcon(param0: string): android.graphics.drawable.Drawable;
				public getApplicationIcon(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getApplicationIcon(param0: string): android.graphics.drawable.Drawable;
				public getActivityLogo(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getActivityLogo(param0: android.content.ComponentName): android.graphics.drawable.Drawable;
				public getActivityLogo(param0: android.content.Intent): android.graphics.drawable.Drawable;
				public getApplicationLogo(param0: string): android.graphics.drawable.Drawable;
				public getApplicationLogo(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
				public getApplicationLogo(param0: string): android.graphics.drawable.Drawable;
				public getUserBadgedIcon(param0: android.graphics.drawable.Drawable, param1: android.os.UserHandle): android.graphics.drawable.Drawable;
				public getUserBadgedDrawableForDensity(param0: android.graphics.drawable.Drawable, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: number): android.graphics.drawable.Drawable;
				public getUserBadgedLabel(param0: string, param1: android.os.UserHandle): string;
				public getText(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): string;
				public getXml(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): android.content.res.XmlResourceParser;
				public getApplicationLabel(param0: android.content.pm.ApplicationInfo): string;
				public getResourcesForActivity(param0: android.content.ComponentName): android.content.res.Resources;
				public getResourcesForApplication(param0: string): android.content.res.Resources;
				public getResourcesForApplication(param0: android.content.pm.ApplicationInfo): android.content.res.Resources;
				public getResourcesForApplication(param0: string): android.content.res.Resources;
				public getPackageArchiveInfo(param0: string, param1: number): android.content.pm.PackageInfo;
				public setInstallerPackageName(param0: string, param1: string): void;
				public getInstallerPackageName(param0: string): string;
				public addPackageToPreferred(param0: string): void;
				public removePackageFromPreferred(param0: string): void;
				public getPreferredPackages(param0: number): java.util.List;
				public setComponentEnabledSetting(param0: android.content.ComponentName, param1: number, param2: number): void;
				public getComponentEnabledSetting(param0: android.content.ComponentName): number;
				public setApplicationEnabledSetting(param0: string, param1: number, param2: number): void;
				public getApplicationEnabledSetting(param0: string): number;
				public addPreferredActivity(param0: android.content.IntentFilter, param1: number, param2: native.Array<android.content.ComponentName>, param3: android.content.ComponentName): void;
				public clearPackagePreferredActivities(param0: string): void;
				public getPreferredActivities(param0: java.util.List, param1: java.util.List, param2: string): number;
				public getSystemSharedLibraryNames(): native.Array<string>;
				public getSystemAvailableFeatures(): native.Array<android.content.pm.FeatureInfo>;
				public hasSystemFeature(param0: string): boolean;
				public isSafeMode(): boolean;
				public verifyPendingInstall(param0: number, param1: number): void;
				public extendVerificationTimeout(param0: number, param1: number, param2: number): void;
				public getAllIntentFilters(param0: string): java.util.List;
				public getDefaultBrowserPackageName(param0: number): string;
				public setDefaultBrowserPackageName(param0: string, param1: number): boolean;
				public getPackageInstaller(): android.content.pm.PackageInstaller;
			}
		}
	}
}
