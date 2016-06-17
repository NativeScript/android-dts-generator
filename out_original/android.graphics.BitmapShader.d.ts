/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />

declare module android {
	export module graphics {
		export class BitmapShader {
			public constructor();
			public constructor(param0: android.graphics.Bitmap, param1: android.graphics.Shader.TileMode, param2: android.graphics.Shader.TileMode);
		}
	}
}
