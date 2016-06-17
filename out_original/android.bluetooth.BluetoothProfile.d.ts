/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothProfile {
			public getConnectedDevices(): java.util.List;
			public getDevicesMatchingConnectionStates(param0: native.Array<number>): java.util.List;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
			public static A2DP: number;
			public static EXTRA_PREVIOUS_STATE: string;
			public static EXTRA_STATE: string;
			public static GATT: number;
			public static GATT_SERVER: number;
			public static HEADSET: number;
			public static HEALTH: number;
			public static SAP: number;
			public static STATE_CONNECTED: number;
			public static STATE_CONNECTING: number;
			public static STATE_DISCONNECTED: number;
			public static STATE_DISCONNECTING: number;
		}
		export module BluetoothProfile {
			export class ServiceListener {
				public onServiceConnected(param0: number, param1: android.bluetooth.BluetoothProfile): void;
				public onServiceDisconnected(param0: number): void;
			}
		}
	}
}
