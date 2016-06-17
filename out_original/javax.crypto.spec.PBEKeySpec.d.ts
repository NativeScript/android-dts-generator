/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class PBEKeySpec {
				public constructor();
				public constructor(param0: native.Array<string>);
				public constructor(param0: native.Array<string>, param1: native.Array<number>, param2: number, param3: number);
				public constructor(param0: native.Array<string>, param1: native.Array<number>, param2: number);
				public clearPassword(): void;
				public getPassword(): native.Array<string>;
				public getSalt(): native.Array<number>;
				public getIterationCount(): number;
				public getKeyLength(): number;
			}
		}
	}
}
