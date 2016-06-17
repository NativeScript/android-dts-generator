/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.le.ScanCallback.d.ts" />
/// <reference path="./android.bluetooth.le.ScanSettings.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class BluetoothLeScanner {
				public startScan(param0: android.bluetooth.le.ScanCallback): void;
				public startScan(param0: java.util.List, param1: android.bluetooth.le.ScanSettings, param2: android.bluetooth.le.ScanCallback): void;
				public stopScan(param0: android.bluetooth.le.ScanCallback): void;
				public flushPendingScanResults(param0: android.bluetooth.le.ScanCallback): void;
			}
		}
	}
}
