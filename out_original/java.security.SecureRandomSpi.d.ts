/// <reference path="./_helpers.d.ts" />

declare module java {
	export module security {
		export class SecureRandomSpi {
			public constructor();
			public engineSetSeed(param0: native.Array<number>): void;
			public engineNextBytes(param0: native.Array<number>): void;
			public engineGenerateSeed(param0: number): native.Array<number>;
		}
	}
}
