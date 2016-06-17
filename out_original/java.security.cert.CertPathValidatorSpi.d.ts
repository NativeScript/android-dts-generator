/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />
/// <reference path="./java.security.cert.CertPathParameters.d.ts" />
/// <reference path="./java.security.cert.CertPathValidatorResult.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPathValidatorSpi {
				public constructor();
				public engineValidate(param0: java.security.cert.CertPath, param1: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult;
			}
		}
	}
}
