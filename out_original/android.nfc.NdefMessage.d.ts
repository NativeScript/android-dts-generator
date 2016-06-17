/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.NdefRecord.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module nfc {
		export class NdefMessage {
			public constructor();
			public constructor(param0: native.Array<number>);
			public constructor(param0: android.nfc.NdefRecord, param1: native.Array<android.nfc.NdefRecord>);
			public constructor(param0: native.Array<android.nfc.NdefRecord>);
			public getRecords(): native.Array<android.nfc.NdefRecord>;
			public getByteArrayLength(): number;
			public toByteArray(): native.Array<number>;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
