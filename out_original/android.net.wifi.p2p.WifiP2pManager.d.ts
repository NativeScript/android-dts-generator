/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pConfig.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pDevice.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pDeviceList.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pGroup.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pInfo.d.ts" />
/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceInfo.d.ts" />
/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceRequest.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export module p2p {
				export class WifiP2pManager {
					public initialize(param0: android.content.Context, param1: android.os.Looper, param2: android.net.wifi.p2p.WifiP2pManager.ChannelListener): android.net.wifi.p2p.WifiP2pManager.Channel;
					public discoverPeers(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public stopPeerDiscovery(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public connect(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pConfig, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public cancelConnect(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public createGroup(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public removeGroup(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public addLocalService(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceInfo, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public removeLocalService(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceInfo, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public clearLocalServices(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public setServiceResponseListener(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ServiceResponseListener): void;
					public setDnsSdResponseListeners(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.DnsSdServiceResponseListener, param2: android.net.wifi.p2p.WifiP2pManager.DnsSdTxtRecordListener): void;
					public setUpnpServiceResponseListener(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.UpnpServiceResponseListener): void;
					public discoverServices(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public addServiceRequest(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceRequest, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public removeServiceRequest(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceRequest, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public clearServiceRequests(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;
					public requestPeers(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.PeerListListener): void;
					public requestConnectionInfo(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ConnectionInfoListener): void;
					public requestGroupInfo(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.GroupInfoListener): void;
					public static BUSY: number;
					public static ERROR: number;
					public static EXTRA_DISCOVERY_STATE: string;
					public static EXTRA_NETWORK_INFO: string;
					public static EXTRA_P2P_DEVICE_LIST: string;
					public static EXTRA_WIFI_P2P_DEVICE: string;
					public static EXTRA_WIFI_P2P_GROUP: string;
					public static EXTRA_WIFI_P2P_INFO: string;
					public static EXTRA_WIFI_STATE: string;
					public static NO_SERVICE_REQUESTS: number;
					public static P2P_UNSUPPORTED: number;
					public static WIFI_P2P_CONNECTION_CHANGED_ACTION: string;
					public static WIFI_P2P_DISCOVERY_CHANGED_ACTION: string;
					public static WIFI_P2P_DISCOVERY_STARTED: number;
					public static WIFI_P2P_DISCOVERY_STOPPED: number;
					public static WIFI_P2P_PEERS_CHANGED_ACTION: string;
					public static WIFI_P2P_STATE_CHANGED_ACTION: string;
					public static WIFI_P2P_STATE_DISABLED: number;
					public static WIFI_P2P_STATE_ENABLED: number;
					public static WIFI_P2P_THIS_DEVICE_CHANGED_ACTION: string;
				}
				export module WifiP2pManager {
					export class ActionListener {
						public onSuccess(): void;
						public onFailure(param0: number): void;
					}
					export class Channel {
					}
					export class ChannelListener {
						public onChannelDisconnected(): void;
					}
					export class ConnectionInfoListener {
						public onConnectionInfoAvailable(param0: android.net.wifi.p2p.WifiP2pInfo): void;
					}
					export class DnsSdServiceResponseListener {
						public onDnsSdServiceAvailable(param0: string, param1: string, param2: android.net.wifi.p2p.WifiP2pDevice): void;
					}
					export class DnsSdTxtRecordListener {
						public onDnsSdTxtRecordAvailable(param0: string, param1: java.util.Map, param2: android.net.wifi.p2p.WifiP2pDevice): void;
					}
					export class GroupInfoListener {
						public onGroupInfoAvailable(param0: android.net.wifi.p2p.WifiP2pGroup): void;
					}
					export class PeerListListener {
						public onPeersAvailable(param0: android.net.wifi.p2p.WifiP2pDeviceList): void;
					}
					export class ServiceResponseListener {
						public onServiceAvailable(param0: number, param1: native.Array<number>, param2: android.net.wifi.p2p.WifiP2pDevice): void;
					}
					export class UpnpServiceResponseListener {
						public onUpnpServiceAvailable(param0: java.util.List, param1: android.net.wifi.p2p.WifiP2pDevice): void;
					}
				}
			}
		}
	}
}
