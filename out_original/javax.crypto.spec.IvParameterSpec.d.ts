/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class IvParameterSpec {
				public constructor();
				public constructor(param0: native.Array<number>);
				public constructor(param0: native.Array<number>, param1: number, param2: number);
				public getIV(): native.Array<number>;
			}
		}
	}
}
