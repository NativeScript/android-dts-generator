/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.cert.CRL.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class X509CRLSelector {
				public constructor();
				public setIssuers(param0: java.util.Collection): void;
				public setIssuerNames(param0: java.util.Collection): void;
				public addIssuer(param0: javax.security.auth.x500.X500Principal): void;
				public addIssuerName(param0: string): void;
				public addIssuerName(param0: native.Array<number>): void;
				public setMinCRLNumber(param0: java.math.BigInteger): void;
				public setMaxCRLNumber(param0: java.math.BigInteger): void;
				public setDateAndTime(param0: java.util.Date): void;
				public setCertificateChecking(param0: java.security.cert.X509Certificate): void;
				public getIssuers(): java.util.Collection;
				public getIssuerNames(): java.util.Collection;
				public getMinCRL(): java.math.BigInteger;
				public getMaxCRL(): java.math.BigInteger;
				public getDateAndTime(): java.util.Date;
				public getCertificateChecking(): java.security.cert.X509Certificate;
				public toString(): string;
				public match(param0: java.security.cert.CRL): boolean;
				public clone(): java.lang.Object;
			}
		}
	}
}
