/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.ConnectivityManager.d.ts" />
/// <reference path="./android.net.NetworkInfo.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module net {
				export class ConnectivityManagerCompat {
					public static isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
					public static getNetworkInfoFromBroadcast(param0: android.net.ConnectivityManager, param1: android.content.Intent): android.net.NetworkInfo;
				}
				export module ConnectivityManagerCompat {
					export class BaseConnectivityManagerCompatImpl {
						public isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
					}
					export class ConnectivityManagerCompatImpl {
						public isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
					}
					export class GingerbreadConnectivityManagerCompatImpl {
						public isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
					}
					export class HoneycombMR2ConnectivityManagerCompatImpl {
						public isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
					}
					export class JellyBeanConnectivityManagerCompatImpl {
						public isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
					}
				}
			}
		}
	}
}
