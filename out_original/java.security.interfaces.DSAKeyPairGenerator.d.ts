/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.interfaces.DSAParams.d.ts" />

declare module java {
	export module security {
		export module interfaces {
			export class DSAKeyPairGenerator {
				public initialize(param0: java.security.interfaces.DSAParams, param1: java.security.SecureRandom): void;
				public initialize(param0: number, param1: boolean, param2: java.security.SecureRandom): void;
			}
		}
	}
}
