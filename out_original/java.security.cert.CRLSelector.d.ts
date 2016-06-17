/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.cert.CRL.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CRLSelector {
				public clone(): java.lang.Object;
				public match(param0: java.security.cert.CRL): boolean;
			}
		}
	}
}
