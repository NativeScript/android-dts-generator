/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.net.SocketImpl.d.ts" />
/// <reference path="./java.net.SocketImplFactory.d.ts" />
/// <reference path="./java.nio.channels.SocketChannel.d.ts" />

declare module java {
	export module net {
		export class Socket {
			public constructor();
			public constructor(param0: java.net.Proxy);
			public constructor(param0: string, param1: number);
			public constructor(param0: string, param1: number, param2: java.net.InetAddress, param3: number);
			public constructor(param0: string, param1: number, param2: boolean);
			public constructor(param0: java.net.InetAddress, param1: number);
			public constructor(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number);
			public constructor(param0: java.net.InetAddress, param1: number, param2: boolean);
			public constructor(param0: java.net.SocketImpl);
			public close(): void;
			public getInetAddress(): java.net.InetAddress;
			public getInputStream(): java.io.InputStream;
			public getKeepAlive(): boolean;
			public getLocalAddress(): java.net.InetAddress;
			public getLocalPort(): number;
			public getOutputStream(): java.io.OutputStream;
			public getPort(): number;
			public getSoLinger(): number;
			public getReceiveBufferSize(): number;
			public getSendBufferSize(): number;
			public getSoTimeout(): number;
			public getTcpNoDelay(): boolean;
			public setKeepAlive(param0: boolean): void;
			public static setSocketImplFactory(param0: java.net.SocketImplFactory): void;
			public setSendBufferSize(param0: number): void;
			public setReceiveBufferSize(param0: number): void;
			public setSoLinger(param0: boolean, param1: number): void;
			public setSoTimeout(param0: number): void;
			public setTcpNoDelay(param0: boolean): void;
			public toString(): string;
			public shutdownInput(): void;
			public shutdownOutput(): void;
			public getLocalSocketAddress(): java.net.SocketAddress;
			public getRemoteSocketAddress(): java.net.SocketAddress;
			public isBound(): boolean;
			public isConnected(): boolean;
			public isClosed(): boolean;
			public bind(param0: java.net.SocketAddress): void;
			public connect(param0: java.net.SocketAddress): void;
			public connect(param0: java.net.SocketAddress, param1: number): void;
			public isInputShutdown(): boolean;
			public isOutputShutdown(): boolean;
			public setReuseAddress(param0: boolean): void;
			public getReuseAddress(): boolean;
			public setOOBInline(param0: boolean): void;
			public getOOBInline(): boolean;
			public setTrafficClass(param0: number): void;
			public getTrafficClass(): number;
			public sendUrgentData(param0: number): void;
			public getChannel(): java.nio.channels.SocketChannel;
			public setPerformancePreferences(param0: number, param1: number, param2: number): void;
		}
	}
}
