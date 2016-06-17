/// <reference path="./_helpers.d.ts" />

declare module java {
	export module security {
		export module spec {
			export class EncodedKeySpec {
				public constructor();
				public constructor(param0: native.Array<number>);
				public getEncoded(): native.Array<number>;
				public getFormat(): string;
			}
		}
	}
}
