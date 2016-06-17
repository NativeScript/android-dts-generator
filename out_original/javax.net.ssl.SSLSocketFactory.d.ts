/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLSocketFactory {
				public constructor();
				public static getDefault(): javax.net.SocketFactory;
				public getDefaultCipherSuites(): native.Array<string>;
				public getSupportedCipherSuites(): native.Array<string>;
				public createSocket(): java.net.Socket;
				public createSocket(param0: string, param1: number): java.net.Socket;
				public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
			}
		}
	}
}
