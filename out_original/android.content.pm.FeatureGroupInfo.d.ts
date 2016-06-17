/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.FeatureInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class FeatureGroupInfo {
				public constructor();
				public constructor(param0: android.content.pm.FeatureGroupInfo);
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public features: native.Array<android.content.pm.FeatureInfo>;
			}
		}
	}
}
