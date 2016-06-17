/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.SocketImpl.d.ts" />
/// <reference path="./javax.net.ssl.HandshakeCompletedListener.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLSocket {
				public constructor(param0: java.net.Proxy);
				public constructor(param0: string, param1: number);
				public constructor(param0: string, param1: number, param2: java.net.InetAddress, param3: number);
				public constructor(param0: string, param1: number, param2: boolean);
				public constructor(param0: java.net.InetAddress, param1: number);
				public constructor(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number);
				public constructor(param0: java.net.InetAddress, param1: number, param2: boolean);
				public constructor(param0: java.net.SocketImpl);
				public constructor();
				public constructor(param0: string, param1: number);
				public constructor(param0: java.net.InetAddress, param1: number);
				public constructor(param0: string, param1: number, param2: java.net.InetAddress, param3: number);
				public constructor(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number);
				public shutdownInput(): void;
				public shutdownOutput(): void;
				public getSupportedCipherSuites(): native.Array<string>;
				public getEnabledCipherSuites(): native.Array<string>;
				public setEnabledCipherSuites(param0: native.Array<string>): void;
				public getSupportedProtocols(): native.Array<string>;
				public getEnabledProtocols(): native.Array<string>;
				public setEnabledProtocols(param0: native.Array<string>): void;
				public getSession(): javax.net.ssl.SSLSession;
				public addHandshakeCompletedListener(param0: javax.net.ssl.HandshakeCompletedListener): void;
				public removeHandshakeCompletedListener(param0: javax.net.ssl.HandshakeCompletedListener): void;
				public startHandshake(): void;
				public setUseClientMode(param0: boolean): void;
				public getUseClientMode(): boolean;
				public setNeedClientAuth(param0: boolean): void;
				public setWantClientAuth(param0: boolean): void;
				public getNeedClientAuth(): boolean;
				public getWantClientAuth(): boolean;
				public setEnableSessionCreation(param0: boolean): void;
				public getEnableSessionCreation(): boolean;
				public getSSLParameters(): javax.net.ssl.SSLParameters;
				public setSSLParameters(param0: javax.net.ssl.SSLParameters): void;
			}
		}
	}
}
