/// <reference path="./_helpers.d.ts" />

declare module android {
	export module graphics {
		export class RadialGradient {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>, param5: android.graphics.Shader.TileMode);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Shader.TileMode);
		}
	}
}
