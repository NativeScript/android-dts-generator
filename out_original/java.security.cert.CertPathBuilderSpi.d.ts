/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.cert.CertPathBuilderResult.d.ts" />
/// <reference path="./java.security.cert.CertPathParameters.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPathBuilderSpi {
				public constructor();
				public engineBuild(param0: java.security.cert.CertPathParameters): java.security.cert.CertPathBuilderResult;
			}
		}
	}
}
