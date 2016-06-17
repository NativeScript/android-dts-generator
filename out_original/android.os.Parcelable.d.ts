/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module os {
		export class Parcelable {
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CONTENTS_FILE_DESCRIPTOR: number;
			public static PARCELABLE_WRITE_RETURN_VALUE: number;
		}
		export module Parcelable {
			export class ClassLoaderCreator {
				public createFromParcel(param0: android.os.Parcel, param1: java.lang.ClassLoader): java.lang.Object;
			}
			export class Creator {
				public createFromParcel(param0: android.os.Parcel): java.lang.Object;
				public newArray(param0: number): native.Array<java.lang.Object>;
			}
		}
	}
}
