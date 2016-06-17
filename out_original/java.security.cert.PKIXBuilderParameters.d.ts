/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.cert.CertSelector.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PKIXBuilderParameters {
				public constructor(param0: java.util.Set);
				public constructor(param0: java.security.KeyStore);
				public constructor();
				public constructor(param0: java.util.Set, param1: java.security.cert.CertSelector);
				public constructor(param0: java.security.KeyStore, param1: java.security.cert.CertSelector);
				public getMaxPathLength(): number;
				public setMaxPathLength(param0: number): void;
				public toString(): string;
			}
		}
	}
}
