/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGattService {
			public constructor();
			public constructor(param0: java.util.UUID, param1: number);
			public addService(param0: android.bluetooth.BluetoothGattService): boolean;
			public addCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;
			public getUuid(): java.util.UUID;
			public getInstanceId(): number;
			public getType(): number;
			public getIncludedServices(): java.util.List;
			public getCharacteristics(): java.util.List;
			public getCharacteristic(param0: java.util.UUID): android.bluetooth.BluetoothGattCharacteristic;
			public static SERVICE_TYPE_PRIMARY: number;
			public static SERVICE_TYPE_SECONDARY: number;
			public mCharacteristics: java.util.List;
			public mIncludedServices: java.util.List;
		}
	}
}
