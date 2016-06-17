/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module print {
		export class PrintJobId {
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
