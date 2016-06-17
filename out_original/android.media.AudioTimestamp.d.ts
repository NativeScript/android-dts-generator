/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class AudioTimestamp {
			public constructor();
			public framePosition: number;
			public nanoTime: number;
		}
	}
}
