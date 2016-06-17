/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class X509CRLEntry {
				public constructor();
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public getEncoded(): native.Array<number>;
				public getSerialNumber(): java.math.BigInteger;
				public getCertificateIssuer(): javax.security.auth.x500.X500Principal;
				public getRevocationDate(): java.util.Date;
				public hasExtensions(): boolean;
				public toString(): string;
			}
		}
	}
}
