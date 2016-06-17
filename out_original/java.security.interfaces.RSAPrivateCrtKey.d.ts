/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class RSAPrivateCrtKey {
				public getCrtCoefficient(): java.math.BigInteger;
				public getPrimeP(): java.math.BigInteger;
				public getPrimeQ(): java.math.BigInteger;
				public getPrimeExponentP(): java.math.BigInteger;
				public getPrimeExponentQ(): java.math.BigInteger;
				public getPublicExponent(): java.math.BigInteger;
				public static serialVersionUID: number;
			}
		}
	}
}
