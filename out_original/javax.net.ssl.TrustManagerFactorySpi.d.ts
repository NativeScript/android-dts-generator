/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class TrustManagerFactorySpi {
				public constructor();
				public engineInit(param0: java.security.KeyStore): void;
				public engineInit(param0: javax.net.ssl.ManagerFactoryParameters): void;
				public engineGetTrustManagers(): native.Array<javax.net.ssl.TrustManager>;
			}
		}
	}
}
