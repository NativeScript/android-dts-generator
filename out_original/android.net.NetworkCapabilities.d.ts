/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module net {
		export class NetworkCapabilities {
			public constructor();
			public constructor(param0: android.net.NetworkCapabilities);
			public hasCapability(param0: number): boolean;
			public hasTransport(param0: number): boolean;
			public getLinkUpstreamBandwidthKbps(): number;
			public getLinkDownstreamBandwidthKbps(): number;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static NET_CAPABILITY_CAPTIVE_PORTAL: number;
			public static NET_CAPABILITY_CBS: number;
			public static NET_CAPABILITY_DUN: number;
			public static NET_CAPABILITY_EIMS: number;
			public static NET_CAPABILITY_FOTA: number;
			public static NET_CAPABILITY_IA: number;
			public static NET_CAPABILITY_IMS: number;
			public static NET_CAPABILITY_INTERNET: number;
			public static NET_CAPABILITY_MMS: number;
			public static NET_CAPABILITY_NOT_METERED: number;
			public static NET_CAPABILITY_NOT_RESTRICTED: number;
			public static NET_CAPABILITY_NOT_VPN: number;
			public static NET_CAPABILITY_RCS: number;
			public static NET_CAPABILITY_SUPL: number;
			public static NET_CAPABILITY_TRUSTED: number;
			public static NET_CAPABILITY_VALIDATED: number;
			public static NET_CAPABILITY_WIFI_P2P: number;
			public static NET_CAPABILITY_XCAP: number;
			public static TRANSPORT_BLUETOOTH: number;
			public static TRANSPORT_CELLULAR: number;
			public static TRANSPORT_ETHERNET: number;
			public static TRANSPORT_VPN: number;
			public static TRANSPORT_WIFI: number;
		}
	}
}
