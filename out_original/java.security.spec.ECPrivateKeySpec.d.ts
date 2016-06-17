/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.ECParameterSpec.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECPrivateKeySpec {
				public constructor();
				public constructor(param0: java.math.BigInteger, param1: java.security.spec.ECParameterSpec);
				public getParams(): java.security.spec.ECParameterSpec;
				public getS(): java.math.BigInteger;
			}
		}
	}
}
