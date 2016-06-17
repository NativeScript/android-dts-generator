/// <reference path="./_helpers.d.ts" />

declare module android {
	export module annotation {
		export class SuppressLint {
			public value(): native.Array<string>;
		}
	}
}
