/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export module nsd {
					export class WifiP2pDnsSdServiceRequest {
						public static newInstance(param0: number, param1: string): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
						public static newInstance(param0: number): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
						public static newInstance(): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest;
						public static newInstance(param0: string): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest;
						public static newInstance(param0: string, param1: string): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest;
					}
				}
			}
		}
	}
}
