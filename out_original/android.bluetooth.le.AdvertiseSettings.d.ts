/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module bluetooth {
		export module le {
			export class AdvertiseSettings {
				public getMode(): number;
				public getTxPowerLevel(): number;
				public isConnectable(): boolean;
				public getTimeout(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static ADVERTISE_MODE_BALANCED: number;
				public static ADVERTISE_MODE_LOW_LATENCY: number;
				public static ADVERTISE_MODE_LOW_POWER: number;
				public static ADVERTISE_TX_POWER_HIGH: number;
				public static ADVERTISE_TX_POWER_LOW: number;
				public static ADVERTISE_TX_POWER_MEDIUM: number;
				public static ADVERTISE_TX_POWER_ULTRA_LOW: number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module AdvertiseSettings {
				export class Builder {
					public constructor();
					public setAdvertiseMode(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
					public setTxPowerLevel(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
					public setConnectable(param0: boolean): android.bluetooth.le.AdvertiseSettings.Builder;
					public setTimeout(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
					public build(): android.bluetooth.le.AdvertiseSettings;
				}
			}
		}
	}
}
