/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class RSAOtherPrimeInfo {
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger);
				public getCrtCoefficient(): java.math.BigInteger;
				public getPrime(): java.math.BigInteger;
				public getExponent(): java.math.BigInteger;
			}
		}
	}
}
