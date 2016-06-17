/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Network.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module android {
	export module net {
		export class VpnService {
			public constructor(param0: android.content.Context);
			public constructor();
			public static prepare(param0: android.content.Context): android.content.Intent;
			public protect(param0: number): boolean;
			public protect(param0: java.net.Socket): boolean;
			public protect(param0: java.net.DatagramSocket): boolean;
			public setUnderlyingNetworks(param0: native.Array<android.net.Network>): boolean;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onRevoke(): void;
			public static SERVICE_INTERFACE: string;
		}
		export module VpnService {
			export class Builder {
				public constructor();
				public constructor(param0: android.net.VpnService);
				public setSession(param0: string): android.net.VpnService.Builder;
				public setConfigureIntent(param0: android.app.PendingIntent): android.net.VpnService.Builder;
				public setMtu(param0: number): android.net.VpnService.Builder;
				public addAddress(param0: java.net.InetAddress, param1: number): android.net.VpnService.Builder;
				public addAddress(param0: string, param1: number): android.net.VpnService.Builder;
				public addRoute(param0: java.net.InetAddress, param1: number): android.net.VpnService.Builder;
				public addRoute(param0: string, param1: number): android.net.VpnService.Builder;
				public addDnsServer(param0: java.net.InetAddress): android.net.VpnService.Builder;
				public addDnsServer(param0: string): android.net.VpnService.Builder;
				public addSearchDomain(param0: string): android.net.VpnService.Builder;
				public allowFamily(param0: number): android.net.VpnService.Builder;
				public addAllowedApplication(param0: string): android.net.VpnService.Builder;
				public addDisallowedApplication(param0: string): android.net.VpnService.Builder;
				public allowBypass(): android.net.VpnService.Builder;
				public setBlocking(param0: boolean): android.net.VpnService.Builder;
				public setUnderlyingNetworks(param0: native.Array<android.net.Network>): android.net.VpnService.Builder;
				public establish(): android.os.ParcelFileDescriptor;
			}
		}
	}
}
