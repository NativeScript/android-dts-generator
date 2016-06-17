/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class ParcelableVolumeInfo {
						public constructor();
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
						public constructor(param0: android.os.Parcel);
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public volumeType: number;
						public audioStream: number;
						public controlType: number;
						public maxVolume: number;
						public currentVolume: number;
						public static CREATOR: android.os.Parcelable.Creator;
					}
				}
			}
		}
	}
}
