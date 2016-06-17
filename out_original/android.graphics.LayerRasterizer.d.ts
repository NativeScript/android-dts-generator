/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />

declare module android {
	export module graphics {
		export class LayerRasterizer {
			public constructor();
			public addLayer(param0: android.graphics.Paint, param1: number, param2: number): void;
			public addLayer(param0: android.graphics.Paint): void;
		}
	}
}
