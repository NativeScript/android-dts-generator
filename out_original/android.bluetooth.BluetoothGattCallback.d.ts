/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGattCallback {
			public constructor();
			public onConnectionStateChange(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;
			public onServicesDiscovered(param0: android.bluetooth.BluetoothGatt, param1: number): void;
			public onCharacteristicRead(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic, param2: number): void;
			public onCharacteristicWrite(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic, param2: number): void;
			public onCharacteristicChanged(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic): void;
			public onDescriptorRead(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattDescriptor, param2: number): void;
			public onDescriptorWrite(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattDescriptor, param2: number): void;
			public onReliableWriteCompleted(param0: android.bluetooth.BluetoothGatt, param1: number): void;
			public onReadRemoteRssi(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;
			public onMtuChanged(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;
		}
	}
}
