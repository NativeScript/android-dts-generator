/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class DHGenParameterSpec {
				public constructor();
				public constructor(param0: number, param1: number);
				public getPrimeSize(): number;
				public getExponentSize(): number;
			}
		}
	}
}
