/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export module nsd {
					export class WifiP2pDnsSdServiceInfo {
						public static newInstance(param0: string, param1: string, param2: java.util.Map): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceInfo;
					}
				}
			}
		}
	}
}
