/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rasterizer.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />

declare module android {
	export module text {
		export module style {
			export class RasterizerSpan {
				public constructor();
				public constructor(param0: android.graphics.Rasterizer);
				public getRasterizer(): android.graphics.Rasterizer;
				public updateDrawState(param0: android.text.TextPaint): void;
			}
		}
	}
}
