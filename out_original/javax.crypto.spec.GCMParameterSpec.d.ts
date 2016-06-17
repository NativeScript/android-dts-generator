/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class GCMParameterSpec {
				public constructor();
				public constructor(param0: number, param1: native.Array<number>);
				public constructor(param0: number, param1: native.Array<number>, param2: number, param3: number);
				public getTLen(): number;
				public getIV(): native.Array<number>;
			}
		}
	}
}
