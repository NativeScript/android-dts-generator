/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class ScanRecord {
				public getAdvertiseFlags(): number;
				public getServiceUuids(): java.util.List;
				public getManufacturerSpecificData(): android.util.SparseArray;
				public getManufacturerSpecificData(param0: number): native.Array<number>;
				public getServiceData(): java.util.Map;
				public getServiceData(param0: android.os.ParcelUuid): native.Array<number>;
				public getTxPowerLevel(): number;
				public getDeviceName(): string;
				public getBytes(): native.Array<number>;
				public toString(): string;
			}
		}
	}
}
