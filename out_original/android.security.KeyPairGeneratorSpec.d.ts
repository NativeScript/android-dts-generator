/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module android {
	export module security {
		export class KeyPairGeneratorSpec {
			public getContext(): android.content.Context;
			public getKeystoreAlias(): string;
			public getKeyType(): string;
			public getKeySize(): number;
			public getAlgorithmParameterSpec(): java.security.spec.AlgorithmParameterSpec;
			public getSubjectDN(): javax.security.auth.x500.X500Principal;
			public getSerialNumber(): java.math.BigInteger;
			public getStartDate(): java.util.Date;
			public getEndDate(): java.util.Date;
			public isEncryptionRequired(): boolean;
		}
		export module KeyPairGeneratorSpec {
			export class Builder {
				public constructor();
				public constructor(param0: android.content.Context);
				public setAlias(param0: string): android.security.KeyPairGeneratorSpec.Builder;
				public setKeyType(param0: string): android.security.KeyPairGeneratorSpec.Builder;
				public setKeySize(param0: number): android.security.KeyPairGeneratorSpec.Builder;
				public setAlgorithmParameterSpec(param0: java.security.spec.AlgorithmParameterSpec): android.security.KeyPairGeneratorSpec.Builder;
				public setSubject(param0: javax.security.auth.x500.X500Principal): android.security.KeyPairGeneratorSpec.Builder;
				public setSerialNumber(param0: java.math.BigInteger): android.security.KeyPairGeneratorSpec.Builder;
				public setStartDate(param0: java.util.Date): android.security.KeyPairGeneratorSpec.Builder;
				public setEndDate(param0: java.util.Date): android.security.KeyPairGeneratorSpec.Builder;
				public setEncryptionRequired(): android.security.KeyPairGeneratorSpec.Builder;
				public build(): android.security.KeyPairGeneratorSpec;
			}
		}
	}
}
