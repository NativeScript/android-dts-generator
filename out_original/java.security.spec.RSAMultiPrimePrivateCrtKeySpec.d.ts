/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.RSAOtherPrimeInfo.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class RSAMultiPrimePrivateCrtKeySpec {
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: java.math.BigInteger, param5: java.math.BigInteger, param6: java.math.BigInteger, param7: java.math.BigInteger, param8: native.Array<java.security.spec.RSAOtherPrimeInfo>);
				public getCrtCoefficient(): java.math.BigInteger;
				public getOtherPrimeInfo(): native.Array<java.security.spec.RSAOtherPrimeInfo>;
				public getPrimeExponentP(): java.math.BigInteger;
				public getPrimeExponentQ(): java.math.BigInteger;
				public getPrimeP(): java.math.BigInteger;
				public getPrimeQ(): java.math.BigInteger;
				public getPublicExponent(): java.math.BigInteger;
			}
		}
	}
}
