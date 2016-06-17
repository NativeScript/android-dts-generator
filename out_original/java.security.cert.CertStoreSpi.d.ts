/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.cert.CRLSelector.d.ts" />
/// <reference path="./java.security.cert.CertSelector.d.ts" />
/// <reference path="./java.security.cert.CertStoreParameters.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertStoreSpi {
				public constructor();
				public constructor(param0: java.security.cert.CertStoreParameters);
				public engineGetCertificates(param0: java.security.cert.CertSelector): java.util.Collection;
				public engineGetCRLs(param0: java.security.cert.CRLSelector): java.util.Collection;
			}
		}
	}
}
