/// <reference path="./_helpers.d.ts" />

declare module java {
	export module io {
		export class OptionalDataException {
			public eof: boolean;
			public length: number;
		}
	}
}
