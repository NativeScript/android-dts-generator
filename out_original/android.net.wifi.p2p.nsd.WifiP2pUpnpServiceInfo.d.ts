/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export module nsd {
					export class WifiP2pUpnpServiceInfo {
						public static newInstance(param0: string, param1: string, param2: java.util.List): android.net.wifi.p2p.nsd.WifiP2pUpnpServiceInfo;
					}
				}
			}
		}
	}
}
