/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telephony {
		export class CellSignalStrengthWcdma {
			public getLevel(): number;
			public getDbm(): number;
			public getAsuLevel(): number;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
