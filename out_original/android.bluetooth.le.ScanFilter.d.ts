/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.le.ScanResult.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class ScanFilter {
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getDeviceName(): string;
				public getServiceUuid(): android.os.ParcelUuid;
				public getServiceUuidMask(): android.os.ParcelUuid;
				public getDeviceAddress(): string;
				public getServiceData(): native.Array<number>;
				public getServiceDataMask(): native.Array<number>;
				public getServiceDataUuid(): android.os.ParcelUuid;
				public getManufacturerId(): number;
				public getManufacturerData(): native.Array<number>;
				public getManufacturerDataMask(): native.Array<number>;
				public matches(param0: android.bluetooth.le.ScanResult): boolean;
				public toString(): string;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module ScanFilter {
				export class Builder {
					public constructor();
					public setDeviceName(param0: string): android.bluetooth.le.ScanFilter.Builder;
					public setDeviceAddress(param0: string): android.bluetooth.le.ScanFilter.Builder;
					public setServiceUuid(param0: android.os.ParcelUuid): android.bluetooth.le.ScanFilter.Builder;
					public setServiceUuid(param0: android.os.ParcelUuid, param1: android.os.ParcelUuid): android.bluetooth.le.ScanFilter.Builder;
					public setServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
					public setServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>, param2: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
					public setManufacturerData(param0: number, param1: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
					public setManufacturerData(param0: number, param1: native.Array<number>, param2: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
					public build(): android.bluetooth.le.ScanFilter;
				}
			}
		}
	}
}
