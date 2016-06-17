/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.ConnectivityManager.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module net {
				export class ConnectivityManagerCompatJellyBean {
					public static isActiveNetworkMetered(param0: android.net.ConnectivityManager): boolean;
				}
			}
		}
	}
}
