/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export module shapes {
				export class ArcShape {
					public constructor();
					public constructor(param0: number, param1: number);
					public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;
				}
			}
		}
	}
}
