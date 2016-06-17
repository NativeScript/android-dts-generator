/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentHostCallback.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentState {
					public constructor();
					public constructor(param0: android.support.v4.app.Fragment);
					public constructor(param0: android.os.Parcel);
					public instantiate(param0: android.support.v4.app.FragmentHostCallback, param1: android.support.v4.app.Fragment): android.support.v4.app.Fragment;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
		}
	}
}
