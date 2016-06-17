/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.net.SocketImplFactory.d.ts" />
/// <reference path="./java.nio.channels.ServerSocketChannel.d.ts" />

declare module java {
	export module net {
		export class ServerSocket {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: number, param1: number, param2: java.net.InetAddress);
			public accept(): java.net.Socket;
			public close(): void;
			public getInetAddress(): java.net.InetAddress;
			public getLocalPort(): number;
			public getSoTimeout(): number;
			public implAccept(param0: java.net.Socket): void;
			public static setSocketFactory(param0: java.net.SocketImplFactory): void;
			public setSoTimeout(param0: number): void;
			public toString(): string;
			public bind(param0: java.net.SocketAddress): void;
			public bind(param0: java.net.SocketAddress, param1: number): void;
			public getLocalSocketAddress(): java.net.SocketAddress;
			public isBound(): boolean;
			public isClosed(): boolean;
			public setReuseAddress(param0: boolean): void;
			public getReuseAddress(): boolean;
			public setReceiveBufferSize(param0: number): void;
			public getReceiveBufferSize(): number;
			public getChannel(): java.nio.channels.ServerSocketChannel;
			public setPerformancePreferences(param0: number, param1: number, param2: number): void;
		}
	}
}
