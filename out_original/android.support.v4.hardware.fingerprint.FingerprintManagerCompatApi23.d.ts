/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.Signature.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
/// <reference path="./javax.crypto.Mac.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module hardware {
				export module fingerprint {
					export class FingerprintManagerCompatApi23 {
						public constructor();
						public static hasEnrolledFingerprints(param0: android.content.Context): boolean;
						public static isHardwareDetected(param0: android.content.Context): boolean;
						public static authenticate(param0: android.content.Context, param1: android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.CryptoObject, param2: number, param3: java.lang.Object, param4: android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.AuthenticationCallback, param5: android.os.Handler): void;
					}
					export module FingerprintManagerCompatApi23 {
						export class AuthenticationCallback {
							public constructor();
							public onAuthenticationError(param0: number, param1: string): void;
							public onAuthenticationHelp(param0: number, param1: string): void;
							public onAuthenticationSucceeded(param0: android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.AuthenticationResultInternal): void;
							public onAuthenticationFailed(): void;
						}
						export class AuthenticationResultInternal {
							public constructor();
							public constructor(param0: android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.CryptoObject);
							public getCryptoObject(): android.support.v4.hardware.fingerprint.FingerprintManagerCompatApi23.CryptoObject;
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
	}
}
