/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class AdvertiseData {
				public getServiceUuids(): java.util.List;
				public getManufacturerSpecificData(): android.util.SparseArray;
				public getServiceData(): java.util.Map;
				public getIncludeTxPowerLevel(): boolean;
				public getIncludeDeviceName(): boolean;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module AdvertiseData {
				export class Builder {
					public constructor();
					public addServiceUuid(param0: android.os.ParcelUuid): android.bluetooth.le.AdvertiseData.Builder;
					public addServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>): android.bluetooth.le.AdvertiseData.Builder;
					public addManufacturerData(param0: number, param1: native.Array<number>): android.bluetooth.le.AdvertiseData.Builder;
					public setIncludeTxPowerLevel(param0: boolean): android.bluetooth.le.AdvertiseData.Builder;
					public setIncludeDeviceName(param0: boolean): android.bluetooth.le.AdvertiseData.Builder;
					public build(): android.bluetooth.le.AdvertiseData;
				}
			}
		}
	}
}
