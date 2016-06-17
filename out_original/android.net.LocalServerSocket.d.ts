/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.LocalSocket.d.ts" />
/// <reference path="./android.net.LocalSocketAddress.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export class LocalServerSocket {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.io.FileDescriptor);
			public getLocalSocketAddress(): android.net.LocalSocketAddress;
			public accept(): android.net.LocalSocket;
			public getFileDescriptor(): java.io.FileDescriptor;
			public close(): void;
		}
	}
}
