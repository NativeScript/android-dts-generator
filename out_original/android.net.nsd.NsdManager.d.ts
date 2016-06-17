/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.nsd.NsdServiceInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module nsd {
			export class NsdManager {
				public registerService(param0: android.net.nsd.NsdServiceInfo, param1: number, param2: android.net.nsd.NsdManager.RegistrationListener): void;
				public unregisterService(param0: android.net.nsd.NsdManager.RegistrationListener): void;
				public discoverServices(param0: string, param1: number, param2: android.net.nsd.NsdManager.DiscoveryListener): void;
				public stopServiceDiscovery(param0: android.net.nsd.NsdManager.DiscoveryListener): void;
				public resolveService(param0: android.net.nsd.NsdServiceInfo, param1: android.net.nsd.NsdManager.ResolveListener): void;
				public static ACTION_NSD_STATE_CHANGED: string;
				public static EXTRA_NSD_STATE: string;
				public static FAILURE_ALREADY_ACTIVE: number;
				public static FAILURE_INTERNAL_ERROR: number;
				public static FAILURE_MAX_LIMIT: number;
				public static NSD_STATE_DISABLED: number;
				public static NSD_STATE_ENABLED: number;
				public static PROTOCOL_DNS_SD: number;
			}
			export module NsdManager {
				export class DiscoveryListener {
					public onStartDiscoveryFailed(param0: string, param1: number): void;
					public onStopDiscoveryFailed(param0: string, param1: number): void;
					public onDiscoveryStarted(param0: string): void;
					public onDiscoveryStopped(param0: string): void;
					public onServiceFound(param0: android.net.nsd.NsdServiceInfo): void;
					public onServiceLost(param0: android.net.nsd.NsdServiceInfo): void;
				}
				export class RegistrationListener {
					public onRegistrationFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;
					public onUnregistrationFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;
					public onServiceRegistered(param0: android.net.nsd.NsdServiceInfo): void;
					public onServiceUnregistered(param0: android.net.nsd.NsdServiceInfo): void;
				}
				export class ResolveListener {
					public onResolveFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;
					public onServiceResolved(param0: android.net.nsd.NsdServiceInfo): void;
				}
			}
		}
	}
}
