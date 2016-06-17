/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.le.AdvertiseSettings.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class AdvertiseCallback {
				public constructor();
				public onStartSuccess(param0: android.bluetooth.le.AdvertiseSettings): void;
				public onStartFailure(param0: number): void;
				public static ADVERTISE_FAILED_ALREADY_STARTED: number;
				public static ADVERTISE_FAILED_DATA_TOO_LARGE: number;
				public static ADVERTISE_FAILED_FEATURE_UNSUPPORTED: number;
				public static ADVERTISE_FAILED_INTERNAL_ERROR: number;
				public static ADVERTISE_FAILED_TOO_MANY_ADVERTISERS: number;
			}
		}
	}
}
