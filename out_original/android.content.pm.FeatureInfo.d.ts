/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class FeatureInfo {
				public constructor();
				public constructor(param0: android.content.pm.FeatureInfo);
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getGlEsVersion(): string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_REQUIRED: number;
				public static GL_ES_VERSION_UNDEFINED: number;
				public flags: number;
				public name: string;
				public reqGlEsVersion: number;
			}
		}
	}
}
