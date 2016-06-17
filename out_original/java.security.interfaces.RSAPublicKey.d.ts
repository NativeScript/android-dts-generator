/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class RSAPublicKey {
				public getPublicExponent(): java.math.BigInteger;
				public static serialVersionUID: number;
			}
		}
	}
}
