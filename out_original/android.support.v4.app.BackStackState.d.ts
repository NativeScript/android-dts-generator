/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.app.BackStackRecord.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManagerImpl.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class BackStackState {
					public constructor();
					public constructor(param0: android.support.v4.app.BackStackRecord);
					public constructor(param0: android.os.Parcel);
					public instantiate(param0: android.support.v4.app.FragmentManagerImpl): android.support.v4.app.BackStackRecord;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
		}
	}
}
