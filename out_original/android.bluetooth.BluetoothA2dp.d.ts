/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothA2dp {
			public finalize(): void;
			public getConnectedDevices(): java.util.List;
			public getDevicesMatchingConnectionStates(param0: native.Array<number>): java.util.List;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
			public isA2dpPlaying(param0: android.bluetooth.BluetoothDevice): boolean;
			public static ACTION_CONNECTION_STATE_CHANGED: string;
			public static ACTION_PLAYING_STATE_CHANGED: string;
			public static STATE_NOT_PLAYING: number;
			public static STATE_PLAYING: number;
		}
	}
}
