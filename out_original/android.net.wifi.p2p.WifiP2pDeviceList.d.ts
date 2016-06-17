/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pDevice.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export class WifiP2pDeviceList {
					public constructor();
					public constructor(param0: android.net.wifi.p2p.WifiP2pDeviceList);
					public get(param0: string): android.net.wifi.p2p.WifiP2pDevice;
					public getDeviceList(): java.util.Collection;
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
		}
	}
}
