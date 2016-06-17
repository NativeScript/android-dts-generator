/// <reference path="./_helpers.d.ts" />

declare module android {
	export module security {
		export module keystore {
			export class KeyProperties {
				public static BLOCK_MODE_CBC: string;
				public static BLOCK_MODE_CTR: string;
				public static BLOCK_MODE_ECB: string;
				public static BLOCK_MODE_GCM: string;
				public static DIGEST_MD5: string;
				public static DIGEST_NONE: string;
				public static DIGEST_SHA1: string;
				public static DIGEST_SHA224: string;
				public static DIGEST_SHA256: string;
				public static DIGEST_SHA384: string;
				public static DIGEST_SHA512: string;
				public static ENCRYPTION_PADDING_NONE: string;
				public static ENCRYPTION_PADDING_PKCS7: string;
				public static ENCRYPTION_PADDING_RSA_OAEP: string;
				public static ENCRYPTION_PADDING_RSA_PKCS1: string;
				public static KEY_ALGORITHM_AES: string;
				public static KEY_ALGORITHM_EC: string;
				public static KEY_ALGORITHM_HMAC_SHA1: string;
				public static KEY_ALGORITHM_HMAC_SHA224: string;
				public static KEY_ALGORITHM_HMAC_SHA256: string;
				public static KEY_ALGORITHM_HMAC_SHA384: string;
				public static KEY_ALGORITHM_HMAC_SHA512: string;
				public static KEY_ALGORITHM_RSA: string;
				public static ORIGIN_GENERATED: number;
				public static ORIGIN_IMPORTED: number;
				public static ORIGIN_UNKNOWN: number;
				public static PURPOSE_DECRYPT: number;
				public static PURPOSE_ENCRYPT: number;
				public static PURPOSE_SIGN: number;
				public static PURPOSE_VERIFY: number;
				public static SIGNATURE_PADDING_RSA_PKCS1: string;
				public static SIGNATURE_PADDING_RSA_PSS: string;
			}
		}
	}
}
