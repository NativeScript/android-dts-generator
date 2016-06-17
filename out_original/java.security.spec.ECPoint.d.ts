/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECPoint {
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public getAffineX(): java.math.BigInteger;
				public getAffineY(): java.math.BigInteger;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public static POINT_INFINITY: java.security.spec.ECPoint;
			}
		}
	}
}
