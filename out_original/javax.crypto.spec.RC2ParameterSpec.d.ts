/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class RC2ParameterSpec {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: number, param1: native.Array<number>);
				public constructor(param0: number, param1: native.Array<number>, param2: number);
				public getEffectiveKeyBits(): number;
				public getIV(): native.Array<number>;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
			}
		}
	}
}
