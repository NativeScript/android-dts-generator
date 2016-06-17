/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.cert.X509CRLEntry.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class X509CRL {
				public constructor(param0: string);
				public constructor();
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public getEncoded(): native.Array<number>;
				public verify(param0: java.security.PublicKey): void;
				public verify(param0: java.security.PublicKey, param1: string): void;
				public getVersion(): number;
				public getIssuerDN(): java.security.Principal;
				public getIssuerX500Principal(): javax.security.auth.x500.X500Principal;
				public getThisUpdate(): java.util.Date;
				public getNextUpdate(): java.util.Date;
				public getRevokedCertificate(param0: java.math.BigInteger): java.security.cert.X509CRLEntry;
				public getRevokedCertificate(param0: java.security.cert.X509Certificate): java.security.cert.X509CRLEntry;
				public getRevokedCertificates(): java.util.Set;
				public getTBSCertList(): native.Array<number>;
				public getSignature(): native.Array<number>;
				public getSigAlgName(): string;
				public getSigAlgOID(): string;
				public getSigAlgParams(): native.Array<number>;
			}
		}
	}
}
