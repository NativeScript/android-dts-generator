/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class KeyManagerFactorySpi {
				public constructor();
				public engineInit(param0: java.security.KeyStore, param1: native.Array<string>): void;
				public engineInit(param0: javax.net.ssl.ManagerFactoryParameters): void;
				public engineGetKeyManagers(): native.Array<javax.net.ssl.KeyManager>;
			}
		}
	}
}
