/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.DatagramPacket.d.ts" />
/// <reference path="./java.net.DatagramSocketImpl.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.NetworkInterface.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />

declare module java {
	export module net {
		export class MulticastSocket {
			public constructor(param0: number);
			public constructor(param0: number, param1: java.net.InetAddress);
			public constructor(param0: java.net.DatagramSocketImpl);
			public constructor(param0: java.net.SocketAddress);
			public constructor();
			public constructor(param0: number);
			public constructor(param0: java.net.SocketAddress);
			public getInterface(): java.net.InetAddress;
			public getNetworkInterface(): java.net.NetworkInterface;
			public getTimeToLive(): number;
			public getTTL(): number;
			public joinGroup(param0: java.net.InetAddress): void;
			public joinGroup(param0: java.net.SocketAddress, param1: java.net.NetworkInterface): void;
			public leaveGroup(param0: java.net.InetAddress): void;
			public leaveGroup(param0: java.net.SocketAddress, param1: java.net.NetworkInterface): void;
			public send(param0: java.net.DatagramPacket): void;
			public send(param0: java.net.DatagramPacket, param1: number): void;
			public setInterface(param0: java.net.InetAddress): void;
			public setNetworkInterface(param0: java.net.NetworkInterface): void;
			public setTimeToLive(param0: number): void;
			public setTTL(param0: number): void;
			public getLoopbackMode(): boolean;
			public setLoopbackMode(param0: boolean): void;
		}
	}
}
