/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothHealthAppConfiguration.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothHealthCallback {
			public constructor();
			public onHealthAppConfigurationStatusChange(param0: android.bluetooth.BluetoothHealthAppConfiguration, param1: number): void;
			public onHealthChannelStateChange(param0: android.bluetooth.BluetoothHealthAppConfiguration, param1: android.bluetooth.BluetoothDevice, param2: number, param3: number, param4: android.os.ParcelFileDescriptor, param5: number): void;
		}
	}
}
