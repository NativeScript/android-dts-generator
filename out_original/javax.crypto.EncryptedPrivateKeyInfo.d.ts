/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.PKCS8EncodedKeySpec.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />

declare module javax {
	export module crypto {
		export class EncryptedPrivateKeyInfo {
			public constructor();
			public constructor(param0: native.Array<number>);
			public constructor(param0: string, param1: native.Array<number>);
			public constructor(param0: java.security.AlgorithmParameters, param1: native.Array<number>);
			public getAlgName(): string;
			public getAlgParameters(): java.security.AlgorithmParameters;
			public getEncryptedData(): native.Array<number>;
			public getKeySpec(param0: javax.crypto.Cipher): java.security.spec.PKCS8EncodedKeySpec;
			public getKeySpec(param0: java.security.Key): java.security.spec.PKCS8EncodedKeySpec;
			public getKeySpec(param0: java.security.Key, param1: string): java.security.spec.PKCS8EncodedKeySpec;
			public getKeySpec(param0: java.security.Key, param1: java.security.Provider): java.security.spec.PKCS8EncodedKeySpec;
			public getEncoded(): native.Array<number>;
		}
	}
}
