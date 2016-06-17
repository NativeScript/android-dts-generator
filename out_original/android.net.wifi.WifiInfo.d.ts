/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.wifi.SupplicantState.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class WifiInfo {
				public getSSID(): string;
				public getBSSID(): string;
				public getRssi(): number;
				public getLinkSpeed(): number;
				public getFrequency(): number;
				public getMacAddress(): string;
				public getNetworkId(): number;
				public getSupplicantState(): android.net.wifi.SupplicantState;
				public getIpAddress(): number;
				public getHiddenSSID(): boolean;
				public static getDetailedStateOf(param0: android.net.wifi.SupplicantState): android.net.NetworkInfo.DetailedState;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static FREQUENCY_UNITS: string;
				public static LINK_SPEED_UNITS: string;
			}
		}
	}
}
