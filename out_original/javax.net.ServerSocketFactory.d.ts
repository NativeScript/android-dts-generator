/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.ServerSocket.d.ts" />

declare module javax {
	export module net {
		export class ServerSocketFactory {
			public constructor();
			public static getDefault(): javax.net.ServerSocketFactory;
			public createServerSocket(): java.net.ServerSocket;
			public createServerSocket(param0: number): java.net.ServerSocket;
			public createServerSocket(param0: number, param1: number): java.net.ServerSocket;
			public createServerSocket(param0: number, param1: number, param2: java.net.InetAddress): java.net.ServerSocket;
		}
	}
}
