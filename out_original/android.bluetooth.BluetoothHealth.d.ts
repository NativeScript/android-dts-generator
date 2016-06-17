/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothHealthAppConfiguration.d.ts" />
/// <reference path="./android.bluetooth.BluetoothHealthCallback.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothHealth {
			public registerSinkAppConfiguration(param0: string, param1: number, param2: android.bluetooth.BluetoothHealthCallback): boolean;
			public unregisterAppConfiguration(param0: android.bluetooth.BluetoothHealthAppConfiguration): boolean;
			public connectChannelToSource(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothHealthAppConfiguration): boolean;
			public disconnectChannel(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothHealthAppConfiguration, param2: number): boolean;
			public getMainChannelFd(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothHealthAppConfiguration): android.os.ParcelFileDescriptor;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
			public getConnectedDevices(): java.util.List;
			public getDevicesMatchingConnectionStates(param0: native.Array<number>): java.util.List;
			public static APP_CONFIG_REGISTRATION_FAILURE: number;
			public static APP_CONFIG_REGISTRATION_SUCCESS: number;
			public static APP_CONFIG_UNREGISTRATION_FAILURE: number;
			public static APP_CONFIG_UNREGISTRATION_SUCCESS: number;
			public static CHANNEL_TYPE_RELIABLE: number;
			public static CHANNEL_TYPE_STREAMING: number;
			public static SINK_ROLE: number;
			public static SOURCE_ROLE: number;
			public static STATE_CHANNEL_CONNECTED: number;
			public static STATE_CHANNEL_CONNECTING: number;
			public static STATE_CHANNEL_DISCONNECTED: number;
			public static STATE_CHANNEL_DISCONNECTING: number;
		}
	}
}
