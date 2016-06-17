/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class X509CertSelector {
				public constructor();
				public setCertificate(param0: java.security.cert.X509Certificate): void;
				public getCertificate(): java.security.cert.X509Certificate;
				public setSerialNumber(param0: java.math.BigInteger): void;
				public getSerialNumber(): java.math.BigInteger;
				public setIssuer(param0: javax.security.auth.x500.X500Principal): void;
				public getIssuer(): javax.security.auth.x500.X500Principal;
				public setIssuer(param0: string): void;
				public getIssuerAsString(): string;
				public setIssuer(param0: native.Array<number>): void;
				public getIssuerAsBytes(): native.Array<number>;
				public setSubject(param0: javax.security.auth.x500.X500Principal): void;
				public getSubject(): javax.security.auth.x500.X500Principal;
				public setSubject(param0: string): void;
				public getSubjectAsString(): string;
				public setSubject(param0: native.Array<number>): void;
				public getSubjectAsBytes(): native.Array<number>;
				public setSubjectKeyIdentifier(param0: native.Array<number>): void;
				public getSubjectKeyIdentifier(): native.Array<number>;
				public setAuthorityKeyIdentifier(param0: native.Array<number>): void;
				public getAuthorityKeyIdentifier(): native.Array<number>;
				public setCertificateValid(param0: java.util.Date): void;
				public getCertificateValid(): java.util.Date;
				public setPrivateKeyValid(param0: java.util.Date): void;
				public getPrivateKeyValid(): java.util.Date;
				public setSubjectPublicKeyAlgID(param0: string): void;
				public getSubjectPublicKeyAlgID(): string;
				public setSubjectPublicKey(param0: java.security.PublicKey): void;
				public setSubjectPublicKey(param0: native.Array<number>): void;
				public getSubjectPublicKey(): java.security.PublicKey;
				public setKeyUsage(param0: native.Array<boolean>): void;
				public getKeyUsage(): native.Array<boolean>;
				public setExtendedKeyUsage(param0: java.util.Set): void;
				public getExtendedKeyUsage(): java.util.Set;
				public setMatchAllSubjectAltNames(param0: boolean): void;
				public getMatchAllSubjectAltNames(): boolean;
				public setSubjectAlternativeNames(param0: java.util.Collection): void;
				public addSubjectAlternativeName(param0: number, param1: string): void;
				public addSubjectAlternativeName(param0: number, param1: native.Array<number>): void;
				public getSubjectAlternativeNames(): java.util.Collection;
				public setNameConstraints(param0: native.Array<number>): void;
				public getNameConstraints(): native.Array<number>;
				public setBasicConstraints(param0: number): void;
				public getBasicConstraints(): number;
				public setPolicy(param0: java.util.Set): void;
				public getPolicy(): java.util.Set;
				public addPathToName(param0: number, param1: string): void;
				public setPathToNames(param0: java.util.Collection): void;
				public addPathToName(param0: number, param1: native.Array<number>): void;
				public getPathToNames(): java.util.Collection;
				public toString(): string;
				public match(param0: java.security.cert.Certificate): boolean;
				public clone(): java.lang.Object;
			}
		}
	}
}
