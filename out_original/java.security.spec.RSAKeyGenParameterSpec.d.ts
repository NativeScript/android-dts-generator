/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class RSAKeyGenParameterSpec {
				public constructor();
				public constructor(param0: number, param1: java.math.BigInteger);
				public getKeysize(): number;
				public getPublicExponent(): java.math.BigInteger;
				public static F0: java.math.BigInteger;
				public static F4: java.math.BigInteger;
			}
		}
	}
}
