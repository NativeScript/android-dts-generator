/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.spec.ECParameterSpec.d.ts" />
/// <reference path="./java.security.spec.ECPoint.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class ECPublicKeySpec {
				public constructor();
				public constructor(param0: java.security.spec.ECPoint, param1: java.security.spec.ECParameterSpec);
				public getParams(): java.security.spec.ECParameterSpec;
				public getW(): java.security.spec.ECPoint;
			}
		}
	}
}
