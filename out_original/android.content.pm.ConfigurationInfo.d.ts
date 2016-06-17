/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ConfigurationInfo {
				public constructor();
				public constructor(param0: android.content.pm.ConfigurationInfo);
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getGlEsVersion(): string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static GL_ES_VERSION_UNDEFINED: number;
				public static INPUT_FEATURE_FIVE_WAY_NAV: number;
				public static INPUT_FEATURE_HARD_KEYBOARD: number;
				public reqGlEsVersion: number;
				public reqInputFeatures: number;
				public reqKeyboardType: number;
				public reqNavigation: number;
				public reqTouchScreen: number;
			}
		}
	}
}
