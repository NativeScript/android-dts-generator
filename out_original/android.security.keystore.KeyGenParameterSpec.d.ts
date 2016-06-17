/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module android {
	export module security {
		export module keystore {
			export class KeyGenParameterSpec {
				public getKeystoreAlias(): string;
				public getKeySize(): number;
				public getAlgorithmParameterSpec(): java.security.spec.AlgorithmParameterSpec;
				public getCertificateSubject(): javax.security.auth.x500.X500Principal;
				public getCertificateSerialNumber(): java.math.BigInteger;
				public getCertificateNotBefore(): java.util.Date;
				public getCertificateNotAfter(): java.util.Date;
				public getKeyValidityStart(): java.util.Date;
				public getKeyValidityForConsumptionEnd(): java.util.Date;
				public getKeyValidityForOriginationEnd(): java.util.Date;
				public getPurposes(): number;
				public getDigests(): native.Array<string>;
				public isDigestsSpecified(): boolean;
				public getEncryptionPaddings(): native.Array<string>;
				public getSignaturePaddings(): native.Array<string>;
				public getBlockModes(): native.Array<string>;
				public isRandomizedEncryptionRequired(): boolean;
				public isUserAuthenticationRequired(): boolean;
				public getUserAuthenticationValidityDurationSeconds(): number;
			}
			export module KeyGenParameterSpec {
				export class Builder {
					public constructor();
					public constructor(param0: string, param1: number);
					public setKeySize(param0: number): android.security.keystore.KeyGenParameterSpec.Builder;
					public setAlgorithmParameterSpec(param0: java.security.spec.AlgorithmParameterSpec): android.security.keystore.KeyGenParameterSpec.Builder;
					public setCertificateSubject(param0: javax.security.auth.x500.X500Principal): android.security.keystore.KeyGenParameterSpec.Builder;
					public setCertificateSerialNumber(param0: java.math.BigInteger): android.security.keystore.KeyGenParameterSpec.Builder;
					public setCertificateNotBefore(param0: java.util.Date): android.security.keystore.KeyGenParameterSpec.Builder;
					public setCertificateNotAfter(param0: java.util.Date): android.security.keystore.KeyGenParameterSpec.Builder;
					public setKeyValidityStart(param0: java.util.Date): android.security.keystore.KeyGenParameterSpec.Builder;
					public setKeyValidityEnd(param0: java.util.Date): android.security.keystore.KeyGenParameterSpec.Builder;
					public setKeyValidityForOriginationEnd(param0: java.util.Date): android.security.keystore.KeyGenParameterSpec.Builder;
					public setKeyValidityForConsumptionEnd(param0: java.util.Date): android.security.keystore.KeyGenParameterSpec.Builder;
					public setDigests(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;
					public setEncryptionPaddings(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;
					public setSignaturePaddings(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;
					public setBlockModes(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;
					public setRandomizedEncryptionRequired(param0: boolean): android.security.keystore.KeyGenParameterSpec.Builder;
					public setUserAuthenticationRequired(param0: boolean): android.security.keystore.KeyGenParameterSpec.Builder;
					public setUserAuthenticationValidityDurationSeconds(param0: number): android.security.keystore.KeyGenParameterSpec.Builder;
					public build(): android.security.keystore.KeyGenParameterSpec;
				}
			}
		}
	}
}
