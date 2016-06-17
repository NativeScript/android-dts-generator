/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.DhcpInfo.d.ts" />
/// <reference path="./android.net.wifi.WifiConfiguration.d.ts" />
/// <reference path="./android.net.wifi.WifiInfo.d.ts" />
/// <reference path="./android.net.wifi.WpsInfo.d.ts" />
/// <reference path="./android.os.WorkSource.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class WifiManager {
				public getConfiguredNetworks(): java.util.List;
				public addNetwork(param0: android.net.wifi.WifiConfiguration): number;
				public updateNetwork(param0: android.net.wifi.WifiConfiguration): number;
				public removeNetwork(param0: number): boolean;
				public enableNetwork(param0: number, param1: boolean): boolean;
				public disableNetwork(param0: number): boolean;
				public disconnect(): boolean;
				public reconnect(): boolean;
				public reassociate(): boolean;
				public pingSupplicant(): boolean;
				public is5GHzBandSupported(): boolean;
				public isP2pSupported(): boolean;
				public isDeviceToApRttSupported(): boolean;
				public isPreferredNetworkOffloadSupported(): boolean;
				public isTdlsSupported(): boolean;
				public isEnhancedPowerReportingSupported(): boolean;
				public startScan(): boolean;
				public getConnectionInfo(): android.net.wifi.WifiInfo;
				public getScanResults(): java.util.List;
				public isScanAlwaysAvailable(): boolean;
				public saveConfiguration(): boolean;
				public getDhcpInfo(): android.net.DhcpInfo;
				public setWifiEnabled(param0: boolean): boolean;
				public getWifiState(): number;
				public isWifiEnabled(): boolean;
				public static calculateSignalLevel(param0: number, param1: number): number;
				public static compareSignalLevel(param0: number, param1: number): number;
				public setTdlsEnabled(param0: java.net.InetAddress, param1: boolean): void;
				public setTdlsEnabledWithMacAddress(param0: string, param1: boolean): void;
				public startWps(param0: android.net.wifi.WpsInfo, param1: android.net.wifi.WifiManager.WpsCallback): void;
				public cancelWps(param0: android.net.wifi.WifiManager.WpsCallback): void;
				public createWifiLock(param0: number, param1: string): android.net.wifi.WifiManager.WifiLock;
				public createWifiLock(param0: string): android.net.wifi.WifiManager.WifiLock;
				public createMulticastLock(param0: string): android.net.wifi.WifiManager.MulticastLock;
				public finalize(): void;
				public static ACTION_PICK_WIFI_NETWORK: string;
				public static ACTION_REQUEST_SCAN_ALWAYS_AVAILABLE: string;
				public static ERROR_AUTHENTICATING: number;
				public static EXTRA_BSSID: string;
				public static EXTRA_NETWORK_INFO: string;
				public static EXTRA_NEW_RSSI: string;
				public static EXTRA_NEW_STATE: string;
				public static EXTRA_PREVIOUS_WIFI_STATE: string;
				public static EXTRA_RESULTS_UPDATED: string;
				public static EXTRA_SUPPLICANT_CONNECTED: string;
				public static EXTRA_SUPPLICANT_ERROR: string;
				public static EXTRA_WIFI_INFO: string;
				public static EXTRA_WIFI_STATE: string;
				public static NETWORK_IDS_CHANGED_ACTION: string;
				public static NETWORK_STATE_CHANGED_ACTION: string;
				public static RSSI_CHANGED_ACTION: string;
				public static SCAN_RESULTS_AVAILABLE_ACTION: string;
				public static SUPPLICANT_CONNECTION_CHANGE_ACTION: string;
				public static SUPPLICANT_STATE_CHANGED_ACTION: string;
				public static WIFI_MODE_FULL: number;
				public static WIFI_MODE_FULL_HIGH_PERF: number;
				public static WIFI_MODE_SCAN_ONLY: number;
				public static WIFI_STATE_CHANGED_ACTION: string;
				public static WIFI_STATE_DISABLED: number;
				public static WIFI_STATE_DISABLING: number;
				public static WIFI_STATE_ENABLED: number;
				public static WIFI_STATE_ENABLING: number;
				public static WIFI_STATE_UNKNOWN: number;
				public static WPS_AUTH_FAILURE: number;
				public static WPS_OVERLAP_ERROR: number;
				public static WPS_TIMED_OUT: number;
				public static WPS_TKIP_ONLY_PROHIBITED: number;
				public static WPS_WEP_PROHIBITED: number;
			}
			export module WifiManager {
				export class MulticastLock {
					public acquire(): void;
					public release(): void;
					public setReferenceCounted(param0: boolean): void;
					public isHeld(): boolean;
					public toString(): string;
					public finalize(): void;
				}
				export class WifiLock {
					public acquire(): void;
					public release(): void;
					public setReferenceCounted(param0: boolean): void;
					public isHeld(): boolean;
					public setWorkSource(param0: android.os.WorkSource): void;
					public toString(): string;
					public finalize(): void;
				}
				export class WpsCallback {
					public constructor();
					public onStarted(param0: string): void;
					public onSucceeded(): void;
					public onFailed(param0: number): void;
				}
			}
		}
	}
}
