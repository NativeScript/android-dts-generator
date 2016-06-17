/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.ConfigurationInfo.d.ts" />
/// <reference path="./android.content.pm.FeatureGroupInfo.d.ts" />
/// <reference path="./android.content.pm.FeatureInfo.d.ts" />
/// <reference path="./android.content.pm.InstrumentationInfo.d.ts" />
/// <reference path="./android.content.pm.PermissionInfo.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.content.pm.Signature.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PackageInfo {
				public constructor();
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static INSTALL_LOCATION_AUTO: number;
				public static INSTALL_LOCATION_INTERNAL_ONLY: number;
				public static INSTALL_LOCATION_PREFER_EXTERNAL: number;
				public static REQUESTED_PERMISSION_GRANTED: number;
				public activities: native.Array<android.content.pm.ActivityInfo>;
				public applicationInfo: android.content.pm.ApplicationInfo;
				public baseRevisionCode: number;
				public configPreferences: native.Array<android.content.pm.ConfigurationInfo>;
				public featureGroups: native.Array<android.content.pm.FeatureGroupInfo>;
				public firstInstallTime: number;
				public gids: native.Array<number>;
				public installLocation: number;
				public instrumentation: native.Array<android.content.pm.InstrumentationInfo>;
				public lastUpdateTime: number;
				public packageName: string;
				public permissions: native.Array<android.content.pm.PermissionInfo>;
				public providers: native.Array<android.content.pm.ProviderInfo>;
				public receivers: native.Array<android.content.pm.ActivityInfo>;
				public reqFeatures: native.Array<android.content.pm.FeatureInfo>;
				public requestedPermissions: native.Array<string>;
				public requestedPermissionsFlags: native.Array<number>;
				public services: native.Array<android.content.pm.ServiceInfo>;
				public sharedUserId: string;
				public sharedUserLabel: number;
				public signatures: native.Array<android.content.pm.Signature>;
				public splitNames: native.Array<string>;
				public splitRevisionCodes: native.Array<number>;
				public versionCode: number;
				public versionName: string;
			}
		}
	}
}
