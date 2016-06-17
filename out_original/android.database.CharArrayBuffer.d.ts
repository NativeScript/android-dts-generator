/// <reference path="./_helpers.d.ts" />

declare module android {
	export module database {
		export class CharArrayBuffer {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: native.Array<string>);
			public data: native.Array<string>;
			public sizeCopied: number;
		}
	}
}
