/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPathBuilderResult {
				public clone(): java.lang.Object;
				public getCertPath(): java.security.cert.CertPath;
			}
		}
	}
}
