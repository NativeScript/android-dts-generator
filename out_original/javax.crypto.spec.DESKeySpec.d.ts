/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class DESKeySpec {
				public constructor();
				public constructor(param0: native.Array<number>);
				public constructor(param0: native.Array<number>, param1: number);
				public getKey(): native.Array<number>;
				public static isParityAdjusted(param0: native.Array<number>, param1: number): boolean;
				public static isWeak(param0: native.Array<number>, param1: number): boolean;
				public static DES_KEY_LEN: number;
			}
		}
	}
}
