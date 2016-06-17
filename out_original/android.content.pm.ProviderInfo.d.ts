/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.ComponentInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PathPermission.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PatternMatcher.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ProviderInfo {
				public constructor(param0: android.content.pm.ComponentInfo);
				public constructor(param0: android.os.Parcel);
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor();
				public constructor(param0: android.content.pm.ProviderInfo);
				public dump(param0: android.util.Printer, param1: string): void;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public toString(): string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_SINGLE_USER: number;
				public authority: string;
				public flags: number;
				public grantUriPermissions: boolean;
				public initOrder: number;
				public isSyncable: boolean;
				public multiprocess: boolean;
				public pathPermissions: native.Array<android.content.pm.PathPermission>;
				public readPermission: string;
				public uriPermissionPatterns: native.Array<android.os.PatternMatcher>;
				public writePermission: string;
			}
		}
	}
}
