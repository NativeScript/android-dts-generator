/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module annotation {
			export class Size {
				public value(): number;
				public min(): number;
				public max(): number;
				public multiple(): number;
			}
		}
	}
}
