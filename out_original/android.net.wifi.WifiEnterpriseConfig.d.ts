/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class WifiEnterpriseConfig {
				public constructor();
				public constructor(param0: android.net.wifi.WifiEnterpriseConfig);
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public setEapMethod(param0: number): void;
				public getEapMethod(): number;
				public setPhase2Method(param0: number): void;
				public getPhase2Method(): number;
				public setIdentity(param0: string): void;
				public getIdentity(): string;
				public setAnonymousIdentity(param0: string): void;
				public getAnonymousIdentity(): string;
				public setPassword(param0: string): void;
				public getPassword(): string;
				public setCaCertificate(param0: java.security.cert.X509Certificate): void;
				public getCaCertificate(): java.security.cert.X509Certificate;
				public setClientKeyEntry(param0: java.security.PrivateKey, param1: java.security.cert.X509Certificate): void;
				public getClientCertificate(): java.security.cert.X509Certificate;
				public setSubjectMatch(param0: string): void;
				public getSubjectMatch(): string;
				public setAltSubjectMatch(param0: string): void;
				public getAltSubjectMatch(): string;
				public setDomainSuffixMatch(param0: string): void;
				public getDomainSuffixMatch(): string;
				public setRealm(param0: string): void;
				public getRealm(): string;
				public setPlmn(param0: string): void;
				public getPlmn(): string;
				public toString(): string;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module WifiEnterpriseConfig {
				export class Eap {
					public static AKA: number;
					public static AKA_PRIME: number;
					public static NONE: number;
					public static PEAP: number;
					public static PWD: number;
					public static SIM: number;
					public static TLS: number;
					public static TTLS: number;
				}
				export class Phase2 {
					public static GTC: number;
					public static MSCHAP: number;
					public static MSCHAPV2: number;
					public static NONE: number;
					public static PAP: number;
				}
			}
		}
	}
}
