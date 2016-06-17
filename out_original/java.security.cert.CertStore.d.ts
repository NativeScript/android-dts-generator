/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.cert.CRLSelector.d.ts" />
/// <reference path="./java.security.cert.CertSelector.d.ts" />
/// <reference path="./java.security.cert.CertStoreParameters.d.ts" />
/// <reference path="./java.security.cert.CertStoreSpi.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertStore {
				public constructor();
				public constructor(param0: java.security.cert.CertStoreSpi, param1: java.security.Provider, param2: string, param3: java.security.cert.CertStoreParameters);
				public static getInstance(param0: string, param1: java.security.cert.CertStoreParameters): java.security.cert.CertStore;
				public static getInstance(param0: string, param1: java.security.cert.CertStoreParameters, param2: string): java.security.cert.CertStore;
				public static getInstance(param0: string, param1: java.security.cert.CertStoreParameters, param2: java.security.Provider): java.security.cert.CertStore;
				public getType(): string;
				public getProvider(): java.security.Provider;
				public getCertStoreParameters(): java.security.cert.CertStoreParameters;
				public getCertificates(param0: java.security.cert.CertSelector): java.util.Collection;
				public getCRLs(param0: java.security.cert.CRLSelector): java.util.Collection;
				public static getDefaultType(): string;
			}
		}
	}
}
