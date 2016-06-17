/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Date.d.ts" />

declare module android {
	export module security {
		export module keystore {
			export class KeyInfo {
				public getKeystoreAlias(): string;
				public isInsideSecureHardware(): boolean;
				public getOrigin(): number;
				public getKeySize(): number;
				public getKeyValidityStart(): java.util.Date;
				public getKeyValidityForConsumptionEnd(): java.util.Date;
				public getKeyValidityForOriginationEnd(): java.util.Date;
				public getPurposes(): number;
				public getBlockModes(): native.Array<string>;
				public getEncryptionPaddings(): native.Array<string>;
				public getSignaturePaddings(): native.Array<string>;
				public getDigests(): native.Array<string>;
				public isUserAuthenticationRequired(): boolean;
				public getUserAuthenticationValidityDurationSeconds(): number;
				public isUserAuthenticationRequirementEnforcedBySecureHardware(): boolean;
			}
		}
	}
}
