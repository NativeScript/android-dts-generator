/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />

declare module javax {
	export module crypto {
		export class SealedObject {
			public constructor();
			public constructor(param0: java.io.Serializable, param1: javax.crypto.Cipher);
			public constructor(param0: javax.crypto.SealedObject);
			public getAlgorithm(): string;
			public getObject(param0: java.security.Key): java.lang.Object;
			public getObject(param0: javax.crypto.Cipher): java.lang.Object;
			public getObject(param0: java.security.Key, param1: string): java.lang.Object;
			public encodedParams: native.Array<number>;
		}
	}
}
