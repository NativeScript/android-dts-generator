/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export module nsd {
					export class WifiP2pServiceInfo {
						public equals(param0: java.lang.Object): boolean;
						public hashCode(): number;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public static SERVICE_TYPE_ALL: number;
						public static SERVICE_TYPE_BONJOUR: number;
						public static SERVICE_TYPE_UPNP: number;
						public static SERVICE_TYPE_VENDOR_SPECIFIC: number;
					}
				}
			}
		}
	}
}
