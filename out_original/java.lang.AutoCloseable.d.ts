/// <reference path="./_helpers.d.ts" />

declare module java {
	export module lang {
		export class AutoCloseable {
			public close(): void;
		}
	}
}
