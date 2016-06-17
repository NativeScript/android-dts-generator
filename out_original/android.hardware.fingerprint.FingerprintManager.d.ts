/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.security.Signature.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
/// <reference path="./javax.crypto.Mac.d.ts" />

declare module android {
	export module hardware {
		export module fingerprint {
			export class FingerprintManager {
				public authenticate(param0: android.hardware.fingerprint.FingerprintManager.CryptoObject, param1: android.os.CancellationSignal, param2: number, param3: android.hardware.fingerprint.FingerprintManager.AuthenticationCallback, param4: android.os.Handler): void;
				public hasEnrolledFingerprints(): boolean;
				public isHardwareDetected(): boolean;
				public static FINGERPRINT_ACQUIRED_GOOD: number;
				public static FINGERPRINT_ACQUIRED_IMAGER_DIRTY: number;
				public static FINGERPRINT_ACQUIRED_INSUFFICIENT: number;
				public static FINGERPRINT_ACQUIRED_PARTIAL: number;
				public static FINGERPRINT_ACQUIRED_TOO_FAST: number;
				public static FINGERPRINT_ACQUIRED_TOO_SLOW: number;
				public static FINGERPRINT_ERROR_CANCELED: number;
				public static FINGERPRINT_ERROR_HW_UNAVAILABLE: number;
				public static FINGERPRINT_ERROR_LOCKOUT: number;
				public static FINGERPRINT_ERROR_NO_SPACE: number;
				public static FINGERPRINT_ERROR_TIMEOUT: number;
				public static FINGERPRINT_ERROR_UNABLE_TO_PROCESS: number;
			}
			export module FingerprintManager {
				export class AuthenticationCallback {
					public constructor();
					public onAuthenticationError(param0: number, param1: string): void;
					public onAuthenticationHelp(param0: number, param1: string): void;
					public onAuthenticationSucceeded(param0: android.hardware.fingerprint.FingerprintManager.AuthenticationResult): void;
					public onAuthenticationFailed(): void;
				}
				export class AuthenticationResult {
					public getCryptoObject(): android.hardware.fingerprint.FingerprintManager.CryptoObject;
				}
				export class CryptoObject {
					public constructor();
					public constructor(param0: java.security.Signature);
					public constructor(param0: javax.crypto.Cipher);
					public constructor(param0: javax.crypto.Mac);
					public getSignature(): java.security.Signature;
					public getCipher(): javax.crypto.Cipher;
					public getMac(): javax.crypto.Mac;
				}
			}
		}
	}
}
