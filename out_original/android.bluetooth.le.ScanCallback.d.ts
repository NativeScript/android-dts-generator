/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.le.ScanResult.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class ScanCallback {
				public constructor();
				public onScanResult(param0: number, param1: android.bluetooth.le.ScanResult): void;
				public onBatchScanResults(param0: java.util.List): void;
				public onScanFailed(param0: number): void;
				public static SCAN_FAILED_ALREADY_STARTED: number;
				public static SCAN_FAILED_APPLICATION_REGISTRATION_FAILED: number;
				public static SCAN_FAILED_FEATURE_UNSUPPORTED: number;
				public static SCAN_FAILED_INTERNAL_ERROR: number;
			}
		}
	}
}
