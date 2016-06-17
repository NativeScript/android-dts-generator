/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PackageStats {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: android.os.Parcel);
				public constructor(param0: android.content.pm.PackageStats);
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public cacheSize: number;
				public codeSize: number;
				public dataSize: number;
				public externalCacheSize: number;
				public externalCodeSize: number;
				public externalDataSize: number;
				public externalMediaSize: number;
				public externalObbSize: number;
				public packageName: string;
			}
		}
	}
}
