/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class X509Certificate {
				public constructor(param0: string);
				public constructor();
				public checkValidity(): void;
				public checkValidity(param0: java.util.Date): void;
				public getVersion(): number;
				public getSerialNumber(): java.math.BigInteger;
				public getIssuerDN(): java.security.Principal;
				public getIssuerX500Principal(): javax.security.auth.x500.X500Principal;
				public getSubjectDN(): java.security.Principal;
				public getSubjectX500Principal(): javax.security.auth.x500.X500Principal;
				public getNotBefore(): java.util.Date;
				public getNotAfter(): java.util.Date;
				public getTBSCertificate(): native.Array<number>;
				public getSignature(): native.Array<number>;
				public getSigAlgName(): string;
				public getSigAlgOID(): string;
				public getSigAlgParams(): native.Array<number>;
				public getIssuerUniqueID(): native.Array<boolean>;
				public getSubjectUniqueID(): native.Array<boolean>;
				public getKeyUsage(): native.Array<boolean>;
				public getExtendedKeyUsage(): java.util.List;
				public getBasicConstraints(): number;
				public getSubjectAlternativeNames(): java.util.Collection;
				public getIssuerAlternativeNames(): java.util.Collection;
			}
		}
	}
}
