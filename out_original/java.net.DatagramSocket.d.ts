/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.DatagramPacket.d.ts" />
/// <reference path="./java.net.DatagramSocketImpl.d.ts" />
/// <reference path="./java.net.DatagramSocketImplFactory.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.nio.channels.DatagramChannel.d.ts" />

declare module java {
	export module net {
		export class DatagramSocket {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: java.net.InetAddress);
			public constructor(param0: java.net.DatagramSocketImpl);
			public constructor(param0: java.net.SocketAddress);
			public close(): void;
			public disconnect(): void;
			public getInetAddress(): java.net.InetAddress;
			public getLocalAddress(): java.net.InetAddress;
			public getLocalPort(): number;
			public getPort(): number;
			public getReceiveBufferSize(): number;
			public getSendBufferSize(): number;
			public getSoTimeout(): number;
			public receive(param0: java.net.DatagramPacket): void;
			public send(param0: java.net.DatagramPacket): void;
			public setSendBufferSize(param0: number): void;
			public setReceiveBufferSize(param0: number): void;
			public setSoTimeout(param0: number): void;
			public static setDatagramSocketImplFactory(param0: java.net.DatagramSocketImplFactory): void;
			public bind(param0: java.net.SocketAddress): void;
			public connect(param0: java.net.SocketAddress): void;
			public connect(param0: java.net.InetAddress, param1: number): void;
			public isBound(): boolean;
			public isConnected(): boolean;
			public getRemoteSocketAddress(): java.net.SocketAddress;
			public getLocalSocketAddress(): java.net.SocketAddress;
			public setReuseAddress(param0: boolean): void;
			public getReuseAddress(): boolean;
			public setBroadcast(param0: boolean): void;
			public getBroadcast(): boolean;
			public setTrafficClass(param0: number): void;
			public getTrafficClass(): number;
			public isClosed(): boolean;
			public getChannel(): java.nio.channels.DatagramChannel;
		}
	}
}
