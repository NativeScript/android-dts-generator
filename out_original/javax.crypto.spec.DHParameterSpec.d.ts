/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class DHParameterSpec {
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: number);
				public getP(): java.math.BigInteger;
				public getG(): java.math.BigInteger;
				public getL(): number;
			}
		}
	}
}
