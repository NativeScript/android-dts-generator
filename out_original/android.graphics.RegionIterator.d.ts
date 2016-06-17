/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />

declare module android {
	export module graphics {
		export class RegionIterator {
			public constructor();
			public constructor(param0: android.graphics.Region);
			public next(param0: android.graphics.Rect): boolean;
			public finalize(): void;
		}
	}
}
