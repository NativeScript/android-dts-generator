/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGattServerCallback {
			public constructor();
			public onConnectionStateChange(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number): void;
			public onServiceAdded(param0: number, param1: android.bluetooth.BluetoothGattService): void;
			public onCharacteristicReadRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: android.bluetooth.BluetoothGattCharacteristic): void;
			public onCharacteristicWriteRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: android.bluetooth.BluetoothGattCharacteristic, param3: boolean, param4: boolean, param5: number, param6: native.Array<number>): void;
			public onDescriptorReadRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: android.bluetooth.BluetoothGattDescriptor): void;
			public onDescriptorWriteRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: android.bluetooth.BluetoothGattDescriptor, param3: boolean, param4: boolean, param5: number, param6: native.Array<number>): void;
			public onExecuteWrite(param0: android.bluetooth.BluetoothDevice, param1: number, param2: boolean): void;
			public onNotificationSent(param0: android.bluetooth.BluetoothDevice, param1: number): void;
			public onMtuChanged(param0: android.bluetooth.BluetoothDevice, param1: number): void;
		}
	}
}
