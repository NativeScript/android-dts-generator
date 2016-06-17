/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Date.d.ts" />

declare module android {
	export module security {
		export module keystore {
			export class KeyProtection {
				public getKeyValidityStart(): java.util.Date;
				public getKeyValidityForConsumptionEnd(): java.util.Date;
				public getKeyValidityForOriginationEnd(): java.util.Date;
				public getPurposes(): number;
				public getEncryptionPaddings(): native.Array<string>;
				public getSignaturePaddings(): native.Array<string>;
				public getDigests(): native.Array<string>;
				public isDigestsSpecified(): boolean;
				public getBlockModes(): native.Array<string>;
				public isRandomizedEncryptionRequired(): boolean;
				public isUserAuthenticationRequired(): boolean;
				public getUserAuthenticationValidityDurationSeconds(): number;
			}
			export module KeyProtection {
				export class Builder {
					public constructor();
					public constructor(param0: number);
					public setKeyValidityStart(param0: java.util.Date): android.security.keystore.KeyProtection.Builder;
					public setKeyValidityEnd(param0: java.util.Date): android.security.keystore.KeyProtection.Builder;
					public setKeyValidityForOriginationEnd(param0: java.util.Date): android.security.keystore.KeyProtection.Builder;
					public setKeyValidityForConsumptionEnd(param0: java.util.Date): android.security.keystore.KeyProtection.Builder;
					public setEncryptionPaddings(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;
					public setSignaturePaddings(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;
					public setDigests(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;
					public setBlockModes(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;
					public setRandomizedEncryptionRequired(param0: boolean): android.security.keystore.KeyProtection.Builder;
					public setUserAuthenticationRequired(param0: boolean): android.security.keystore.KeyProtection.Builder;
					public setUserAuthenticationValidityDurationSeconds(param0: number): android.security.keystore.KeyProtection.Builder;
					public build(): android.security.keystore.KeyProtection;
				}
			}
		}
	}
}
