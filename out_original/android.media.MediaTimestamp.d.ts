/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class MediaTimestamp {
			public getAnchorMediaTimeUs(): number;
			public getAnchorSytemNanoTime(): number;
			public getMediaClockRate(): number;
		}
	}
}
