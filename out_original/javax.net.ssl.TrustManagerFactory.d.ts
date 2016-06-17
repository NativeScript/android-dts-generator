/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />
/// <reference path="./javax.net.ssl.TrustManagerFactorySpi.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class TrustManagerFactory {
				public constructor();
				public constructor(param0: javax.net.ssl.TrustManagerFactorySpi, param1: java.security.Provider, param2: string);
				public static getDefaultAlgorithm(): string;
				public static getInstance(param0: string): javax.net.ssl.TrustManagerFactory;
				public static getInstance(param0: string, param1: string): javax.net.ssl.TrustManagerFactory;
				public static getInstance(param0: string, param1: java.security.Provider): javax.net.ssl.TrustManagerFactory;
				public getAlgorithm(): string;
				public getProvider(): java.security.Provider;
				public init(param0: java.security.KeyStore): void;
				public init(param0: javax.net.ssl.ManagerFactoryParameters): void;
				public getTrustManagers(): native.Array<javax.net.ssl.TrustManager>;
			}
		}
	}
}
