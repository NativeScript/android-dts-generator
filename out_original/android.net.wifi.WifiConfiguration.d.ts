/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.wifi.WifiEnterpriseConfig.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.BitSet.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class WifiConfiguration {
				public constructor();
				public isPasspoint(): boolean;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public BSSID: string;
				public FQDN: string;
				public SSID: string;
				public allowedAuthAlgorithms: java.util.BitSet;
				public allowedGroupCiphers: java.util.BitSet;
				public allowedKeyManagement: java.util.BitSet;
				public allowedPairwiseCiphers: java.util.BitSet;
				public allowedProtocols: java.util.BitSet;
				public enterpriseConfig: android.net.wifi.WifiEnterpriseConfig;
				public hiddenSSID: boolean;
				public networkId: number;
				public preSharedKey: string;
				public priority: number;
				public providerFriendlyName: string;
				public roamingConsortiumIds: native.Array<number>;
				public status: number;
				public wepKeys: native.Array<string>;
				public wepTxKeyIndex: number;
			}
			export module WifiConfiguration {
				export class AuthAlgorithm {
					public static LEAP: number;
					public static OPEN: number;
					public static SHARED: number;
					public static strings: native.Array<string>;
					public static varName: string;
				}
				export class GroupCipher {
					public static CCMP: number;
					public static TKIP: number;
					public static WEP104: number;
					public static WEP40: number;
					public static strings: native.Array<string>;
					public static varName: string;
				}
				export class KeyMgmt {
					public static IEEE8021X: number;
					public static NONE: number;
					public static WPA_EAP: number;
					public static WPA_PSK: number;
					public static strings: native.Array<string>;
					public static varName: string;
				}
				export class PairwiseCipher {
					public static CCMP: number;
					public static NONE: number;
					public static TKIP: number;
					public static strings: native.Array<string>;
					public static varName: string;
				}
				export class Protocol {
					public static RSN: number;
					public static WPA: number;
					public static strings: native.Array<string>;
					public static varName: string;
				}
				export class Status {
					public static CURRENT: number;
					public static DISABLED: number;
					public static ENABLED: number;
					public static strings: native.Array<string>;
				}
			}
		}
	}
}
