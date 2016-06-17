/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class ScanSettings {
				public getScanMode(): number;
				public getCallbackType(): number;
				public getScanResultType(): number;
				public getReportDelayMillis(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CALLBACK_TYPE_ALL_MATCHES: number;
				public static CALLBACK_TYPE_FIRST_MATCH: number;
				public static CALLBACK_TYPE_MATCH_LOST: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static MATCH_MODE_AGGRESSIVE: number;
				public static MATCH_MODE_STICKY: number;
				public static MATCH_NUM_FEW_ADVERTISEMENT: number;
				public static MATCH_NUM_MAX_ADVERTISEMENT: number;
				public static MATCH_NUM_ONE_ADVERTISEMENT: number;
				public static SCAN_MODE_BALANCED: number;
				public static SCAN_MODE_LOW_LATENCY: number;
				public static SCAN_MODE_LOW_POWER: number;
				public static SCAN_MODE_OPPORTUNISTIC: number;
			}
			export module ScanSettings {
				export class Builder {
					public constructor();
					public setScanMode(param0: number): android.bluetooth.le.ScanSettings.Builder;
					public setCallbackType(param0: number): android.bluetooth.le.ScanSettings.Builder;
					public setReportDelay(param0: number): android.bluetooth.le.ScanSettings.Builder;
					public setNumOfMatches(param0: number): android.bluetooth.le.ScanSettings.Builder;
					public setMatchMode(param0: number): android.bluetooth.le.ScanSettings.Builder;
					public build(): android.bluetooth.le.ScanSettings;
				}
			}
		}
	}
}
