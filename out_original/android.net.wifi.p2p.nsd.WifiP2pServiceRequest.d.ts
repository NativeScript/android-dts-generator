/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export module nsd {
					export class WifiP2pServiceRequest {
						public static newInstance(param0: number, param1: string): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
						public static newInstance(param0: number): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
						public equals(param0: java.lang.Object): boolean;
						public hashCode(): number;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}
