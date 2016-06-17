/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.SSLContextSpi.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLServerSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionContext.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLContext {
				public constructor();
				public constructor(param0: javax.net.ssl.SSLContextSpi, param1: java.security.Provider, param2: string);
				public static getDefault(): javax.net.ssl.SSLContext;
				public static setDefault(param0: javax.net.ssl.SSLContext): void;
				public static getInstance(param0: string): javax.net.ssl.SSLContext;
				public static getInstance(param0: string, param1: string): javax.net.ssl.SSLContext;
				public static getInstance(param0: string, param1: java.security.Provider): javax.net.ssl.SSLContext;
				public getProtocol(): string;
				public getProvider(): java.security.Provider;
				public init(param0: native.Array<javax.net.ssl.KeyManager>, param1: native.Array<javax.net.ssl.TrustManager>, param2: java.security.SecureRandom): void;
				public getSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory;
				public createSSLEngine(): javax.net.ssl.SSLEngine;
				public createSSLEngine(param0: string, param1: number): javax.net.ssl.SSLEngine;
				public getServerSessionContext(): javax.net.ssl.SSLSessionContext;
				public getClientSessionContext(): javax.net.ssl.SSLSessionContext;
				public getDefaultSSLParameters(): javax.net.ssl.SSLParameters;
				public getSupportedSSLParameters(): javax.net.ssl.SSLParameters;
			}
		}
	}
}
