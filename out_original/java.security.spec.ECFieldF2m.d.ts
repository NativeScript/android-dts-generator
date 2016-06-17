/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECFieldF2m {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: java.math.BigInteger);
				public constructor(param0: number, param1: native.Array<number>);
				public equals(param0: java.lang.Object): boolean;
				public getFieldSize(): number;
				public getM(): number;
				public getMidTermsOfReductionPolynomial(): native.Array<number>;
				public getReductionPolynomial(): java.math.BigInteger;
				public hashCode(): number;
			}
		}
	}
}
