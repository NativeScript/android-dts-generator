/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.wifi.WpsInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export class WifiP2pConfig {
					public constructor();
					public constructor(param0: android.net.wifi.p2p.WifiP2pConfig);
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
					public deviceAddress: string;
					public groupOwnerIntent: number;
					public wps: android.net.wifi.WpsInfo;
				}
			}
		}
	}
}
