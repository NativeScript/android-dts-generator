/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.ComponentInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ServiceInfo {
				public constructor(param0: android.content.pm.ComponentInfo);
				public constructor(param0: android.os.Parcel);
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor();
				public constructor(param0: android.content.pm.ServiceInfo);
				public dump(param0: android.util.Printer, param1: string): void;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_ISOLATED_PROCESS: number;
				public static FLAG_SINGLE_USER: number;
				public static FLAG_STOP_WITH_TASK: number;
				public flags: number;
				public permission: string;
			}
		}
	}
}
