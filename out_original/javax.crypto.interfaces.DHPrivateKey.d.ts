/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />

declare module javax {
	export module crypto {
		export module interfaces {
			export class DHPrivateKey {
				public getX(): java.math.BigInteger;
				public static serialVersionUID: number;
			}
		}
	}
}
