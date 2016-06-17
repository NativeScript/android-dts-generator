/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertSelector {
				public clone(): java.lang.Object;
				public match(param0: java.security.cert.Certificate): boolean;
			}
		}
	}
}
