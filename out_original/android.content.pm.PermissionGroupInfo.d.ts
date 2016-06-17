/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PermissionGroupInfo {
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor(param0: android.os.Parcel);
				public constructor();
				public constructor(param0: android.content.pm.PermissionGroupInfo);
				public loadDescription(param0: android.content.pm.PackageManager): string;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_PERSONAL_INFO: number;
				public descriptionRes: number;
				public flags: number;
				public nonLocalizedDescription: string;
				public priority: number;
			}
		}
	}
}
