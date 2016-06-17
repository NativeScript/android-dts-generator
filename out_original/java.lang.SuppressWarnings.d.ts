/// <reference path="./_helpers.d.ts" />

declare module java {
	export module lang {
		export class SuppressWarnings {
			public value(): native.Array<string>;
		}
	}
}
