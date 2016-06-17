/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.ECPoint.d.ts" />
/// <reference path="./java.security.spec.EllipticCurve.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECParameterSpec {
				public constructor();
				public constructor(param0: java.security.spec.EllipticCurve, param1: java.security.spec.ECPoint, param2: java.math.BigInteger, param3: number);
				public getCofactor(): number;
				public getCurve(): java.security.spec.EllipticCurve;
				public getGenerator(): java.security.spec.ECPoint;
				public getOrder(): java.math.BigInteger;
			}
		}
	}
}
