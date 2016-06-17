/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module telephony {
		export class NeighboringCellInfo {
			public constructor();
			public constructor(param0: number, param1: number);
			public constructor(param0: number, param1: string, param2: number);
			public constructor(param0: android.os.Parcel);
			public getRssi(): number;
			public getLac(): number;
			public getCid(): number;
			public getPsc(): number;
			public getNetworkType(): number;
			public setCid(param0: number): void;
			public setRssi(param0: number): void;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static UNKNOWN_CID: number;
			public static UNKNOWN_RSSI: number;
		}
	}
}
