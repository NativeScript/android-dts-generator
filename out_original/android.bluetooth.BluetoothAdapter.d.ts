/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothProfile.d.ts" />
/// <reference path="./android.bluetooth.BluetoothServerSocket.d.ts" />
/// <reference path="./android.bluetooth.le.BluetoothLeAdvertiser.d.ts" />
/// <reference path="./android.bluetooth.le.BluetoothLeScanner.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothAdapter {
			public static getDefaultAdapter(): android.bluetooth.BluetoothAdapter;
			public getRemoteDevice(param0: string): android.bluetooth.BluetoothDevice;
			public getRemoteDevice(param0: native.Array<number>): android.bluetooth.BluetoothDevice;
			public getBluetoothLeAdvertiser(): android.bluetooth.le.BluetoothLeAdvertiser;
			public getBluetoothLeScanner(): android.bluetooth.le.BluetoothLeScanner;
			public isEnabled(): boolean;
			public getState(): number;
			public enable(): boolean;
			public disable(): boolean;
			public getAddress(): string;
			public getName(): string;
			public setName(param0: string): boolean;
			public getScanMode(): number;
			public startDiscovery(): boolean;
			public cancelDiscovery(): boolean;
			public isDiscovering(): boolean;
			public isMultipleAdvertisementSupported(): boolean;
			public isOffloadedFilteringSupported(): boolean;
			public isOffloadedScanBatchingSupported(): boolean;
			public getBondedDevices(): java.util.Set;
			public getProfileConnectionState(param0: number): number;
			public listenUsingRfcommWithServiceRecord(param0: string, param1: java.util.UUID): android.bluetooth.BluetoothServerSocket;
			public listenUsingInsecureRfcommWithServiceRecord(param0: string, param1: java.util.UUID): android.bluetooth.BluetoothServerSocket;
			public getProfileProxy(param0: android.content.Context, param1: android.bluetooth.BluetoothProfile.ServiceListener, param2: number): boolean;
			public closeProfileProxy(param0: number, param1: android.bluetooth.BluetoothProfile): void;
			public finalize(): void;
			public static checkBluetoothAddress(param0: string): boolean;
			public startLeScan(param0: android.bluetooth.BluetoothAdapter.LeScanCallback): boolean;
			public startLeScan(param0: native.Array<java.util.UUID>, param1: android.bluetooth.BluetoothAdapter.LeScanCallback): boolean;
			public stopLeScan(param0: android.bluetooth.BluetoothAdapter.LeScanCallback): void;
			public static ACTION_CONNECTION_STATE_CHANGED: string;
			public static ACTION_DISCOVERY_FINISHED: string;
			public static ACTION_DISCOVERY_STARTED: string;
			public static ACTION_LOCAL_NAME_CHANGED: string;
			public static ACTION_REQUEST_DISCOVERABLE: string;
			public static ACTION_REQUEST_ENABLE: string;
			public static ACTION_SCAN_MODE_CHANGED: string;
			public static ACTION_STATE_CHANGED: string;
			public static ERROR: number;
			public static EXTRA_CONNECTION_STATE: string;
			public static EXTRA_DISCOVERABLE_DURATION: string;
			public static EXTRA_LOCAL_NAME: string;
			public static EXTRA_PREVIOUS_CONNECTION_STATE: string;
			public static EXTRA_PREVIOUS_SCAN_MODE: string;
			public static EXTRA_PREVIOUS_STATE: string;
			public static EXTRA_SCAN_MODE: string;
			public static EXTRA_STATE: string;
			public static SCAN_MODE_CONNECTABLE: number;
			public static SCAN_MODE_CONNECTABLE_DISCOVERABLE: number;
			public static SCAN_MODE_NONE: number;
			public static STATE_CONNECTED: number;
			public static STATE_CONNECTING: number;
			public static STATE_DISCONNECTED: number;
			public static STATE_DISCONNECTING: number;
			public static STATE_OFF: number;
			public static STATE_ON: number;
			public static STATE_TURNING_OFF: number;
			public static STATE_TURNING_ON: number;
		}
		export module BluetoothAdapter {
			export class LeScanCallback {
				public onLeScan(param0: android.bluetooth.BluetoothDevice, param1: number, param2: native.Array<number>): void;
			}
		}
	}
}
