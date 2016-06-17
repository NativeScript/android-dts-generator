/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.KeyManagerFactorySpi.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class KeyManagerFactory {
				public constructor();
				public constructor(param0: javax.net.ssl.KeyManagerFactorySpi, param1: java.security.Provider, param2: string);
				public static getDefaultAlgorithm(): string;
				public static getInstance(param0: string): javax.net.ssl.KeyManagerFactory;
				public static getInstance(param0: string, param1: string): javax.net.ssl.KeyManagerFactory;
				public static getInstance(param0: string, param1: java.security.Provider): javax.net.ssl.KeyManagerFactory;
				public getAlgorithm(): string;
				public getProvider(): java.security.Provider;
				public init(param0: java.security.KeyStore, param1: native.Array<string>): void;
				public init(param0: javax.net.ssl.ManagerFactoryParameters): void;
				public getKeyManagers(): native.Array<javax.net.ssl.KeyManager>;
			}
		}
	}
}
