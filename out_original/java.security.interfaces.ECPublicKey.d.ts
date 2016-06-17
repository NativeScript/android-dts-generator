/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.spec.ECPoint.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class ECPublicKey {
				public getW(): java.security.spec.ECPoint;
				public static serialVersionUID: number;
			}
		}
	}
}
