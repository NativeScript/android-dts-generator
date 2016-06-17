/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export class WifiP2pDevice {
					public constructor();
					public constructor(param0: android.net.wifi.p2p.WifiP2pDevice);
					public wpsPbcSupported(): boolean;
					public wpsKeypadSupported(): boolean;
					public wpsDisplaySupported(): boolean;
					public isServiceDiscoveryCapable(): boolean;
					public isGroupOwner(): boolean;
					public equals(param0: java.lang.Object): boolean;
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static AVAILABLE: number;
					public static CONNECTED: number;
					public static CREATOR: android.os.Parcelable.Creator;
					public static FAILED: number;
					public static INVITED: number;
					public static UNAVAILABLE: number;
					public deviceAddress: string;
					public deviceName: string;
					public primaryDeviceType: string;
					public secondaryDeviceType: string;
					public status: number;
				}
			}
		}
	}
}
