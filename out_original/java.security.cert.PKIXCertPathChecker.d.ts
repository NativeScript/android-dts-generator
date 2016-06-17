/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PKIXCertPathChecker {
				public constructor();
				public clone(): java.lang.Object;
				public init(param0: boolean): void;
				public isForwardCheckingSupported(): boolean;
				public getSupportedExtensions(): java.util.Set;
				public check(param0: java.security.cert.Certificate, param1: java.util.Collection): void;
			}
		}
	}
}
