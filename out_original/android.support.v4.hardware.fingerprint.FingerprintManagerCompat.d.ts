/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.support.v4.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.security.Signature.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
/// <reference path="./javax.crypto.Mac.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module hardware {
				export module fingerprint {
					export class FingerprintManagerCompat {
						public static from(param0: android.content.Context): android.support.v4.hardware.fingerprint.FingerprintManagerCompat;
						public hasEnrolledFingerprints(): boolean;
						public isHardwareDetected(): boolean;
						public authenticate(param0: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.CryptoObject, param1: number, param2: android.support.v4.os.CancellationSignal, param3: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback, param4: android.os.Handler): void;
					}
					export module FingerprintManagerCompat {
						export class Api23FingerprintManagerCompatImpl {
							public constructor();
							public hasEnrolledFingerprints(param0: android.content.Context): boolean;
							public isHardwareDetected(param0: android.content.Context): boolean;
							public authenticate(param0: android.content.Context, param1: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.CryptoObject, param2: number, param3: android.support.v4.os.CancellationSignal, param4: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback, param5: android.os.Handler): void;
						}
						export class AuthenticationCallback {
							public constructor();
							public onAuthenticationError(param0: number, param1: string): void;
							public onAuthenticationHelp(param0: number, param1: string): void;
							public onAuthenticationSucceeded(param0: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.AuthenticationResult): void;
							public onAuthenticationFailed(): void;
						}
						export class AuthenticationResult {
							public constructor();
							public constructor(param0: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.CryptoObject);
							public getCryptoObject(): android.support.v4.hardware.fingerprint.FingerprintManagerCompat.CryptoObject;
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
						export class FingerprintManagerCompatImpl {
							public hasEnrolledFingerprints(param0: android.content.Context): boolean;
							public isHardwareDetected(param0: android.content.Context): boolean;
							public authenticate(param0: android.content.Context, param1: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.CryptoObject, param2: number, param3: android.support.v4.os.CancellationSignal, param4: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback, param5: android.os.Handler): void;
						}
						export class LegacyFingerprintManagerCompatImpl {
							public constructor();
							public hasEnrolledFingerprints(param0: android.content.Context): boolean;
							public isHardwareDetected(param0: android.content.Context): boolean;
							public authenticate(param0: android.content.Context, param1: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.CryptoObject, param2: number, param3: android.support.v4.os.CancellationSignal, param4: android.support.v4.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback, param5: android.os.Handler): void;
						}
					}
				}
			}
		}
	}
}
