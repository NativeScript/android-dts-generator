/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.le.ScanRecord.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class ScanResult {
				public constructor();
				public constructor(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.le.ScanRecord, param2: number, param3: number);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public getDevice(): android.bluetooth.BluetoothDevice;
				public getScanRecord(): android.bluetooth.le.ScanRecord;
				public getRssi(): number;
				public getTimestampNanos(): number;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
