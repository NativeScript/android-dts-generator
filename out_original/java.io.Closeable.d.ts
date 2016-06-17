/// <reference path="./_helpers.d.ts" />

declare module java {
	export module io {
		export class Closeable {
			public close(): void;
		}
	}
}
