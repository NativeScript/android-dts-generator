/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class PBEParameterSpec {
				public constructor();
				public constructor(param0: native.Array<number>, param1: number);
				public getSalt(): native.Array<number>;
				public getIterationCount(): number;
			}
		}
	}
}
