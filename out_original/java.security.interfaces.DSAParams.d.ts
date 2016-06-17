/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class DSAParams {
				public getG(): java.math.BigInteger;
				public getP(): java.math.BigInteger;
				public getQ(): java.math.BigInteger;
			}
		}
	}
}
