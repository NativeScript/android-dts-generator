/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module javax {
	export module net {
		export class SocketFactory {
			public constructor();
			public static getDefault(): javax.net.SocketFactory;
			public createSocket(): java.net.Socket;
			public createSocket(param0: string, param1: number): java.net.Socket;
			public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
		}
	}
}
