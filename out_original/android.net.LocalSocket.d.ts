/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Credentials.d.ts" />
/// <reference path="./android.net.LocalSocketAddress.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module android {
	export module net {
		export class LocalSocket {
			public constructor();
			public constructor(param0: number);
			public toString(): string;
			public connect(param0: android.net.LocalSocketAddress): void;
			public bind(param0: android.net.LocalSocketAddress): void;
			public getLocalSocketAddress(): android.net.LocalSocketAddress;
			public getInputStream(): java.io.InputStream;
			public getOutputStream(): java.io.OutputStream;
			public close(): void;
			public shutdownInput(): void;
			public shutdownOutput(): void;
			public setReceiveBufferSize(param0: number): void;
			public getReceiveBufferSize(): number;
			public setSoTimeout(param0: number): void;
			public getSoTimeout(): number;
			public setSendBufferSize(param0: number): void;
			public getSendBufferSize(): number;
			public getRemoteSocketAddress(): android.net.LocalSocketAddress;
			public isConnected(): boolean;
			public isClosed(): boolean;
			public isBound(): boolean;
			public isOutputShutdown(): boolean;
			public isInputShutdown(): boolean;
			public connect(param0: android.net.LocalSocketAddress, param1: number): void;
			public setFileDescriptorsForSend(param0: native.Array<java.io.FileDescriptor>): void;
			public getAncillaryFileDescriptors(): native.Array<java.io.FileDescriptor>;
			public getPeerCredentials(): android.net.Credentials;
			public getFileDescriptor(): java.io.FileDescriptor;
			public static SOCKET_DGRAM: number;
			public static SOCKET_SEQPACKET: number;
			public static SOCKET_STREAM: number;
		}
	}
}
