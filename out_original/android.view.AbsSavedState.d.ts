/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />

declare module android {
	export module view {
		export class AbsSavedState {
			public constructor();
			public constructor(param0: android.os.Parcelable);
			public constructor(param0: android.os.Parcel);
			public getSuperState(): android.os.Parcelable;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static EMPTY_STATE: android.view.AbsSavedState;
		}
	}
}
