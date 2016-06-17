/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class RSAPrivateKeySpec {
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public getModulus(): java.math.BigInteger;
				public getPrivateExponent(): java.math.BigInteger;
			}
		}
	}
}
