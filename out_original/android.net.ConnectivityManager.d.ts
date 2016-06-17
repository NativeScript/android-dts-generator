/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.net.LinkProperties.d.ts" />
/// <reference path="./android.net.Network.d.ts" />
/// <reference path="./android.net.NetworkCapabilities.d.ts" />
/// <reference path="./android.net.NetworkInfo.d.ts" />
/// <reference path="./android.net.NetworkRequest.d.ts" />
/// <reference path="./android.net.ProxyInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export class ConnectivityManager {
			public static isNetworkTypeValid(param0: number): boolean;
			public setNetworkPreference(param0: number): void;
			public getNetworkPreference(): number;
			public getActiveNetworkInfo(): android.net.NetworkInfo;
			public getActiveNetwork(): android.net.Network;
			public getNetworkInfo(param0: number): android.net.NetworkInfo;
			public getNetworkInfo(param0: android.net.Network): android.net.NetworkInfo;
			public getAllNetworkInfo(): native.Array<android.net.NetworkInfo>;
			public getAllNetworks(): native.Array<android.net.Network>;
			public getLinkProperties(param0: android.net.Network): android.net.LinkProperties;
			public getNetworkCapabilities(param0: android.net.Network): android.net.NetworkCapabilities;
			public startUsingNetworkFeature(param0: number, param1: string): number;
			public stopUsingNetworkFeature(param0: number, param1: string): number;
			public requestRouteToHost(param0: number, param1: number): boolean;
			public getBackgroundDataSetting(): boolean;
			public addDefaultNetworkActiveListener(param0: android.net.ConnectivityManager.OnNetworkActiveListener): void;
			public removeDefaultNetworkActiveListener(param0: android.net.ConnectivityManager.OnNetworkActiveListener): void;
			public isDefaultNetworkActive(): boolean;
			public reportBadNetwork(param0: android.net.Network): void;
			public reportNetworkConnectivity(param0: android.net.Network, param1: boolean): void;
			public getDefaultProxy(): android.net.ProxyInfo;
			public isActiveNetworkMetered(): boolean;
			public requestNetwork(param0: android.net.NetworkRequest, param1: android.net.ConnectivityManager.NetworkCallback): void;
			public requestNetwork(param0: android.net.NetworkRequest, param1: android.app.PendingIntent): void;
			public releaseNetworkRequest(param0: android.app.PendingIntent): void;
			public registerNetworkCallback(param0: android.net.NetworkRequest, param1: android.net.ConnectivityManager.NetworkCallback): void;
			public registerNetworkCallback(param0: android.net.NetworkRequest, param1: android.app.PendingIntent): void;
			public requestBandwidthUpdate(param0: android.net.Network): boolean;
			public unregisterNetworkCallback(param0: android.net.ConnectivityManager.NetworkCallback): void;
			public unregisterNetworkCallback(param0: android.app.PendingIntent): void;
			public bindProcessToNetwork(param0: android.net.Network): boolean;
			public static setProcessDefaultNetwork(param0: android.net.Network): boolean;
			public getBoundNetworkForProcess(): android.net.Network;
			public static getProcessDefaultNetwork(): android.net.Network;
			public static ACTION_BACKGROUND_DATA_SETTING_CHANGED: string;
			public static ACTION_CAPTIVE_PORTAL_SIGN_IN: string;
			public static CONNECTIVITY_ACTION: string;
			public static DEFAULT_NETWORK_PREFERENCE: number;
			public static EXTRA_CAPTIVE_PORTAL: string;
			public static EXTRA_EXTRA_INFO: string;
			public static EXTRA_IS_FAILOVER: string;
			public static EXTRA_NETWORK: string;
			public static EXTRA_NETWORK_INFO: string;
			public static EXTRA_NETWORK_REQUEST: string;
			public static EXTRA_NETWORK_TYPE: string;
			public static EXTRA_NO_CONNECTIVITY: string;
			public static EXTRA_OTHER_NETWORK_INFO: string;
			public static EXTRA_REASON: string;
			public static TYPE_BLUETOOTH: number;
			public static TYPE_DUMMY: number;
			public static TYPE_ETHERNET: number;
			public static TYPE_MOBILE: number;
			public static TYPE_MOBILE_DUN: number;
			public static TYPE_MOBILE_HIPRI: number;
			public static TYPE_MOBILE_MMS: number;
			public static TYPE_MOBILE_SUPL: number;
			public static TYPE_VPN: number;
			public static TYPE_WIFI: number;
			public static TYPE_WIMAX: number;
		}
		export module ConnectivityManager {
			export class NetworkCallback {
				public constructor();
				public onAvailable(param0: android.net.Network): void;
				public onLosing(param0: android.net.Network, param1: number): void;
				public onLost(param0: android.net.Network): void;
				public onCapabilitiesChanged(param0: android.net.Network, param1: android.net.NetworkCapabilities): void;
				public onLinkPropertiesChanged(param0: android.net.Network, param1: android.net.LinkProperties): void;
			}
			export class OnNetworkActiveListener {
				public onNetworkActive(): void;
			}
		}
	}
}
