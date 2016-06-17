/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothHealthAppConfiguration {
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public getDataType(): number;
			public getName(): string;
			public getRole(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
