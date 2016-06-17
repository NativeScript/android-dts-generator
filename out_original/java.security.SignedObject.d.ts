/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.Signature.d.ts" />

declare module java {
	export module security {
		export class SignedObject {
			public constructor();
			public constructor(param0: java.io.Serializable, param1: java.security.PrivateKey, param2: java.security.Signature);
			public getObject(): java.lang.Object;
			public getSignature(): native.Array<number>;
			public getAlgorithm(): string;
			public verify(param0: java.security.PublicKey, param1: java.security.Signature): boolean;
		}
	}
}
