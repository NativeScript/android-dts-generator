/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CRL {
				public constructor();
				public constructor(param0: string);
				public getType(): string;
				public isRevoked(param0: java.security.cert.Certificate): boolean;
				public toString(): string;
			}
		}
	}
}
