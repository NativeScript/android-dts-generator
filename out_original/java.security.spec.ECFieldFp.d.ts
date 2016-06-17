/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECFieldFp {
				public constructor();
				public constructor(param0: java.math.BigInteger);
				public getFieldSize(): number;
				public getP(): java.math.BigInteger;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
			}
		}
	}
}
