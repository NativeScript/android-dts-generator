/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.SSLSessionCache.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />

declare module android {
	export module net {
		export class SSLCertificateSocketFactory {
			public constructor();
			public constructor(param0: number);
			public static getDefault(): javax.net.SocketFactory;
			public static getDefault(param0: number): javax.net.SocketFactory;
			public static getDefault(param0: number, param1: android.net.SSLSessionCache): javax.net.ssl.SSLSocketFactory;
			public static getInsecure(param0: number, param1: android.net.SSLSessionCache): javax.net.ssl.SSLSocketFactory;
			public setTrustManagers(param0: native.Array<javax.net.ssl.TrustManager>): void;
			public setNpnProtocols(param0: native.Array<native.Array<number>>): void;
			public getNpnSelectedProtocol(param0: java.net.Socket): native.Array<number>;
			public setKeyManagers(param0: native.Array<javax.net.ssl.KeyManager>): void;
			public setUseSessionTickets(param0: java.net.Socket, param1: boolean): void;
			public setHostname(param0: java.net.Socket, param1: string): void;
			public createSocket(): java.net.Socket;
			public createSocket(param0: string, param1: number): java.net.Socket;
			public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
			public createSocket(): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
			public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: string, param1: number): java.net.Socket;
			public getDefaultCipherSuites(): native.Array<string>;
			public getSupportedCipherSuites(): native.Array<string>;
		}
	}
}
