/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class DSAPrivateKeySpec {
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger);
				public getG(): java.math.BigInteger;
				public getP(): java.math.BigInteger;
				public getQ(): java.math.BigInteger;
				public getX(): java.math.BigInteger;
			}
		}
	}
}
