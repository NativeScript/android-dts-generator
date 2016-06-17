/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class ScanResult {
				public is80211mcResponder(): boolean;
				public isPasspointNetwork(): boolean;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public BSSID: string;
				public static CHANNEL_WIDTH_160MHZ: number;
				public static CHANNEL_WIDTH_20MHZ: number;
				public static CHANNEL_WIDTH_40MHZ: number;
				public static CHANNEL_WIDTH_80MHZ: number;
				public static CHANNEL_WIDTH_80MHZ_PLUS_MHZ: number;
				public SSID: string;
				public capabilities: string;
				public centerFreq0: number;
				public centerFreq1: number;
				public channelWidth: number;
				public frequency: number;
				public level: number;
				public operatorFriendlyName: string;
				public timestamp: number;
				public venueName: string;
			}
		}
	}
}
