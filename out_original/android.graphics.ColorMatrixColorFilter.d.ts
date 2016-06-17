/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.ColorMatrix.d.ts" />

declare module android {
	export module graphics {
		export class ColorMatrixColorFilter {
			public constructor();
			public constructor(param0: android.graphics.ColorMatrix);
			public constructor(param0: native.Array<number>);
		}
	}
}
