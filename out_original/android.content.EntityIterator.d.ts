/// <reference path="./_helpers.d.ts" />

declare module android {
	export module content {
		export class EntityIterator {
			public reset(): void;
			public close(): void;
		}
	}
}
