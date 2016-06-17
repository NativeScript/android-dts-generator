/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./android.graphics.Xfermode.d.ts" />

declare module android {
	export module graphics {
		export class ComposeShader {
			public constructor();
			public constructor(param0: android.graphics.Shader, param1: android.graphics.Shader, param2: android.graphics.Xfermode);
			public constructor(param0: android.graphics.Shader, param1: android.graphics.Shader, param2: android.graphics.PorterDuff.Mode);
		}
	}
}
