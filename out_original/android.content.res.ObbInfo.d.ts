/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export module res {
			export class ObbInfo {
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static OBB_OVERLAY: number;
				public filename: string;
				public flags: number;
				public packageName: string;
				public version: number;
			}
		}
	}
}
