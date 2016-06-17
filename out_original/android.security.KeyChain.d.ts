/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.security.KeyChainAliasCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />

declare module android {
	export module security {
		export class KeyChain {
			public constructor();
			public static createInstallIntent(): android.content.Intent;
			public static choosePrivateKeyAlias(param0: android.app.Activity, param1: android.security.KeyChainAliasCallback, param2: native.Array<string>, param3: native.Array<java.security.Principal>, param4: string, param5: number, param6: string): void;
			public static choosePrivateKeyAlias(param0: android.app.Activity, param1: android.security.KeyChainAliasCallback, param2: native.Array<string>, param3: native.Array<java.security.Principal>, param4: android.net.Uri, param5: string): void;
			public static getPrivateKey(param0: android.content.Context, param1: string): java.security.PrivateKey;
			public static getCertificateChain(param0: android.content.Context, param1: string): native.Array<java.security.cert.X509Certificate>;
			public static isKeyAlgorithmSupported(param0: string): boolean;
			public static isBoundKeyAlgorithm(param0: string): boolean;
			public static ACTION_STORAGE_CHANGED: string;
			public static EXTRA_CERTIFICATE: string;
			public static EXTRA_NAME: string;
			public static EXTRA_PKCS12: string;
		}
	}
}
