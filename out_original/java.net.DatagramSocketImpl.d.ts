/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.net.DatagramPacket.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.NetworkInterface.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />

declare module java {
	export module net {
		export class DatagramSocketImpl {
			public constructor();
			public bind(param0: number, param1: java.net.InetAddress): void;
			public close(): void;
			public create(): void;
			public getFileDescriptor(): java.io.FileDescriptor;
			public getLocalPort(): number;
			public getTTL(): number;
			public getTimeToLive(): number;
			public join(param0: java.net.InetAddress): void;
			public joinGroup(param0: java.net.SocketAddress, param1: java.net.NetworkInterface): void;
			public leave(param0: java.net.InetAddress): void;
			public leaveGroup(param0: java.net.SocketAddress, param1: java.net.NetworkInterface): void;
			public peek(param0: java.net.InetAddress): number;
			public receive(param0: java.net.DatagramPacket): void;
			public send(param0: java.net.DatagramPacket): void;
			public setTimeToLive(param0: number): void;
			public setTTL(param0: number): void;
			public connect(param0: java.net.InetAddress, param1: number): void;
			public disconnect(): void;
			public peekData(param0: java.net.DatagramPacket): number;
			public fd: java.io.FileDescriptor;
			public localPort: number;
		}
	}
}
