/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGatt {
			public close(): void;
			public disconnect(): void;
			public connect(): boolean;
			public getDevice(): android.bluetooth.BluetoothDevice;
			public discoverServices(): boolean;
			public getServices(): java.util.List;
			public getService(param0: java.util.UUID): android.bluetooth.BluetoothGattService;
			public readCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;
			public writeCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;
			public readDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;
			public writeDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;
			public beginReliableWrite(): boolean;
			public executeReliableWrite(): boolean;
			public abortReliableWrite(): void;
			public abortReliableWrite(param0: android.bluetooth.BluetoothDevice): void;
			public setCharacteristicNotification(param0: android.bluetooth.BluetoothGattCharacteristic, param1: boolean): boolean;
			public readRemoteRssi(): boolean;
			public requestMtu(param0: number): boolean;
			public requestConnectionPriority(param0: number): boolean;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
			public getConnectedDevices(): java.util.List;
			public getDevicesMatchingConnectionStates(param0: native.Array<number>): java.util.List;
			public static CONNECTION_PRIORITY_BALANCED: number;
			public static CONNECTION_PRIORITY_HIGH: number;
			public static CONNECTION_PRIORITY_LOW_POWER: number;
			public static GATT_CONNECTION_CONGESTED: number;
			public static GATT_FAILURE: number;
			public static GATT_INSUFFICIENT_AUTHENTICATION: number;
			public static GATT_INSUFFICIENT_ENCRYPTION: number;
			public static GATT_INVALID_ATTRIBUTE_LENGTH: number;
			public static GATT_INVALID_OFFSET: number;
			public static GATT_READ_NOT_PERMITTED: number;
			public static GATT_REQUEST_NOT_SUPPORTED: number;
			public static GATT_SUCCESS: number;
			public static GATT_WRITE_NOT_PERMITTED: number;
		}
	}
}
