/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothGattServer {
			public close(): void;
			public connect(param0: android.bluetooth.BluetoothDevice, param1: boolean): boolean;
			public cancelConnection(param0: android.bluetooth.BluetoothDevice): void;
			public sendResponse(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
			public notifyCharacteristicChanged(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothGattCharacteristic, param2: boolean): boolean;
			public addService(param0: android.bluetooth.BluetoothGattService): boolean;
			public removeService(param0: android.bluetooth.BluetoothGattService): boolean;
			public clearServices(): void;
			public getServices(): java.util.List;
			public getService(param0: java.util.UUID): android.bluetooth.BluetoothGattService;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
			public getConnectedDevices(): java.util.List;
			public getDevicesMatchingConnectionStates(param0: native.Array<number>): java.util.List;
		}
	}
}
