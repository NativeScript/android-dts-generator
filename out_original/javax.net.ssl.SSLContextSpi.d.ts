/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLServerSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionContext.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLContextSpi {
				public constructor();
				public engineInit(param0: native.Array<javax.net.ssl.KeyManager>, param1: native.Array<javax.net.ssl.TrustManager>, param2: java.security.SecureRandom): void;
				public engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory;
				public engineCreateSSLEngine(param0: string, param1: number): javax.net.ssl.SSLEngine;
				public engineCreateSSLEngine(): javax.net.ssl.SSLEngine;
				public engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext;
				public engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext;
				public engineGetDefaultSSLParameters(): javax.net.ssl.SSLParameters;
				public engineGetSupportedSSLParameters(): javax.net.ssl.SSLParameters;
			}
		}
	}
}
