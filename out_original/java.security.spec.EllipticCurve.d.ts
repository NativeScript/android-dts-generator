/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.ECField.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class EllipticCurve {
				public constructor();
				public constructor(param0: java.security.spec.ECField, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: native.Array<number>);
				public constructor(param0: java.security.spec.ECField, param1: java.math.BigInteger, param2: java.math.BigInteger);
				public getA(): java.math.BigInteger;
				public getB(): java.math.BigInteger;
				public getField(): java.security.spec.ECField;
				public getSeed(): native.Array<number>;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
			}
		}
	}
}
