/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.cert.CertPathParameters.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class CertPathTrustManagerParameters {
				public constructor();
				public constructor(param0: java.security.cert.CertPathParameters);
				public getParameters(): java.security.cert.CertPathParameters;
			}
		}
	}
}
