/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export class WifiP2pInfo {
					public constructor();
					public constructor(param0: android.net.wifi.p2p.WifiP2pInfo);
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
					public groupFormed: boolean;
					public groupOwnerAddress: java.net.InetAddress;
					public isGroupOwner: boolean;
				}
			}
		}
	}
}
