/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLServerSocket {
				public constructor(param0: number);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: java.net.InetAddress);
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: java.net.InetAddress);
				public getEnabledCipherSuites(): native.Array<string>;
				public setEnabledCipherSuites(param0: native.Array<string>): void;
				public getSupportedCipherSuites(): native.Array<string>;
				public getSupportedProtocols(): native.Array<string>;
				public getEnabledProtocols(): native.Array<string>;
				public setEnabledProtocols(param0: native.Array<string>): void;
				public setNeedClientAuth(param0: boolean): void;
				public getNeedClientAuth(): boolean;
				public setWantClientAuth(param0: boolean): void;
				public getWantClientAuth(): boolean;
				public setUseClientMode(param0: boolean): void;
				public getUseClientMode(): boolean;
				public setEnableSessionCreation(param0: boolean): void;
				public getEnableSessionCreation(): boolean;
			}
		}
	}
}
