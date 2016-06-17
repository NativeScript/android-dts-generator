/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module graphics {
		export class PorterDuffColorFilter {
			public constructor();
			public constructor(param0: number, param1: android.graphics.PorterDuff.Mode);
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
