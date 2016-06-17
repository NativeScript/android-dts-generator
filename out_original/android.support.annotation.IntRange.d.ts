/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module annotation {
			export class IntRange {
				public from(): number;
				public to(): number;
			}
		}
	}
}
