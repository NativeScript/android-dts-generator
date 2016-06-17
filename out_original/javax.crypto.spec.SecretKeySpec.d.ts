/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module crypto {
		export module spec {
			export class SecretKeySpec {
				public constructor();
				public constructor(param0: native.Array<number>, param1: string);
				public constructor(param0: native.Array<number>, param1: number, param2: number, param3: string);
				public getAlgorithm(): string;
				public getFormat(): string;
				public getEncoded(): native.Array<number>;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
			}
		}
	}
}
