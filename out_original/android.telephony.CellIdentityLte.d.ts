/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telephony {
		export class CellIdentityLte {
			public getMcc(): number;
			public getMnc(): number;
			public getCi(): number;
			public getPci(): number;
			public getTac(): number;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
