/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PermissionInfo {
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor(param0: android.os.Parcel);
				public constructor();
				public constructor(param0: android.content.pm.PermissionInfo);
				public loadDescription(param0: android.content.pm.PackageManager): string;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_COSTS_MONEY: number;
				public static FLAG_INSTALLED: number;
				public static PROTECTION_DANGEROUS: number;
				public static PROTECTION_FLAG_APPOP: number;
				public static PROTECTION_FLAG_DEVELOPMENT: number;
				public static PROTECTION_FLAG_INSTALLER: number;
				public static PROTECTION_FLAG_PRE23: number;
				public static PROTECTION_FLAG_PREINSTALLED: number;
				public static PROTECTION_FLAG_PRIVILEGED: number;
				public static PROTECTION_FLAG_SYSTEM: number;
				public static PROTECTION_FLAG_VERIFIER: number;
				public static PROTECTION_MASK_BASE: number;
				public static PROTECTION_MASK_FLAGS: number;
				public static PROTECTION_NORMAL: number;
				public static PROTECTION_SIGNATURE: number;
				public static PROTECTION_SIGNATURE_OR_SYSTEM: number;
				public descriptionRes: number;
				public flags: number;
				public group: string;
				public nonLocalizedDescription: string;
				public protectionLevel: number;
			}
		}
	}
}
