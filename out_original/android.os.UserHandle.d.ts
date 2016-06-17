/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module os {
		export class UserHandle {
			public constructor();
			public constructor(param0: android.os.Parcel);
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static writeToParcel(param0: android.os.UserHandle, param1: android.os.Parcel): void;
			public static readFromParcel(param0: android.os.Parcel): android.os.UserHandle;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
