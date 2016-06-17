/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class RC5ParameterSpec {
				public constructor();
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>);
				public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number);
				public getVersion(): number;
				public getRounds(): number;
				public getWordSize(): number;
				public getIV(): native.Array<number>;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
			}
		}
	}
}
