/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />

declare module java {
	export module net {
		export class SocketImpl {
			public constructor();
			public accept(param0: java.net.SocketImpl): void;
			public available(): number;
			public bind(param0: java.net.InetAddress, param1: number): void;
			public close(): void;
			public connect(param0: string, param1: number): void;
			public connect(param0: java.net.InetAddress, param1: number): void;
			public create(param0: boolean): void;
			public getFileDescriptor(): java.io.FileDescriptor;
			public getInetAddress(): java.net.InetAddress;
			public getInputStream(): java.io.InputStream;
			public getLocalPort(): number;
			public getOutputStream(): java.io.OutputStream;
			public getPort(): number;
			public listen(param0: number): void;
			public toString(): string;
			public shutdownInput(): void;
			public shutdownOutput(): void;
			public connect(param0: java.net.SocketAddress, param1: number): void;
			public supportsUrgentData(): boolean;
			public sendUrgentData(param0: number): void;
			public setPerformancePreferences(param0: number, param1: number, param2: number): void;
			public address: java.net.InetAddress;
			public fd: java.io.FileDescriptor;
			public localport: number;
			public port: number;
		}
	}
}
