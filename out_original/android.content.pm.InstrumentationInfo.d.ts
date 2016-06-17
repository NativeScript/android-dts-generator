/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class InstrumentationInfo {
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor(param0: android.os.Parcel);
				public constructor();
				public constructor(param0: android.content.pm.InstrumentationInfo);
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public dataDir: string;
				public functionalTest: boolean;
				public handleProfiling: boolean;
				public publicSourceDir: string;
				public sourceDir: string;
				public splitPublicSourceDirs: native.Array<string>;
				public splitSourceDirs: native.Array<string>;
				public targetPackage: string;
			}
		}
	}
}
