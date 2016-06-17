/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothHeadset {
			public getConnectedDevices(): java.util.List;
			public getDevicesMatchingConnectionStates(param0: native.Array<number>): java.util.List;
			public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
			public startVoiceRecognition(param0: android.bluetooth.BluetoothDevice): boolean;
			public stopVoiceRecognition(param0: android.bluetooth.BluetoothDevice): boolean;
			public isAudioConnected(param0: android.bluetooth.BluetoothDevice): boolean;
			public sendVendorSpecificResultCode(param0: android.bluetooth.BluetoothDevice, param1: string, param2: string): boolean;
			public static ACTION_AUDIO_STATE_CHANGED: string;
			public static ACTION_CONNECTION_STATE_CHANGED: string;
			public static ACTION_VENDOR_SPECIFIC_HEADSET_EVENT: string;
			public static AT_CMD_TYPE_ACTION: number;
			public static AT_CMD_TYPE_BASIC: number;
			public static AT_CMD_TYPE_READ: number;
			public static AT_CMD_TYPE_SET: number;
			public static AT_CMD_TYPE_TEST: number;
			public static EXTRA_VENDOR_SPECIFIC_HEADSET_EVENT_ARGS: string;
			public static EXTRA_VENDOR_SPECIFIC_HEADSET_EVENT_CMD: string;
			public static EXTRA_VENDOR_SPECIFIC_HEADSET_EVENT_CMD_TYPE: string;
			public static STATE_AUDIO_CONNECTED: number;
			public static STATE_AUDIO_CONNECTING: number;
			public static STATE_AUDIO_DISCONNECTED: number;
			public static VENDOR_RESULT_CODE_COMMAND_ANDROID: string;
			public static VENDOR_SPECIFIC_HEADSET_EVENT_COMPANY_ID_CATEGORY: string;
		}
	}
}
