/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.le.AdvertiseCallback.d.ts" />
/// <reference path="./android.bluetooth.le.AdvertiseData.d.ts" />
/// <reference path="./android.bluetooth.le.AdvertiseSettings.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class BluetoothLeAdvertiser {
				public startAdvertising(param0: android.bluetooth.le.AdvertiseSettings, param1: android.bluetooth.le.AdvertiseData, param2: android.bluetooth.le.AdvertiseCallback): void;
				public startAdvertising(param0: android.bluetooth.le.AdvertiseSettings, param1: android.bluetooth.le.AdvertiseData, param2: android.bluetooth.le.AdvertiseData, param3: android.bluetooth.le.AdvertiseCallback): void;
				public stopAdvertising(param0: android.bluetooth.le.AdvertiseCallback): void;
			}
		}
	}
}
