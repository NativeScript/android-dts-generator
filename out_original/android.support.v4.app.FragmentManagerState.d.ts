/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentManagerState {
					public constructor();
					public constructor(param0: android.os.Parcel);
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
		}
	}
}
