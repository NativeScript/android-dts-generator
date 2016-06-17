/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothAdapter.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattServer.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattServerCallback.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothManager {
			public getAdapter(): android.bluetooth.BluetoothAdapter;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice, param1: number): number;
			public getConnectedDevices(param0: number): java.util.List;
			public getDevicesMatchingConnectionStates(param0: number, param1: native.Array<number>): java.util.List;
			public openGattServer(param0: android.content.Context, param1: android.bluetooth.BluetoothGattServerCallback): android.bluetooth.BluetoothGattServer;
		}
	}
}
