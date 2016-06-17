/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export module shapes {
				export class Shape {
					public constructor();
					public getWidth(): number;
					public getHeight(): number;
					public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;
					public resize(param0: number, param1: number): void;
					public hasAlpha(): boolean;
					public onResize(param0: number, param1: number): void;
					public getOutline(param0: android.graphics.Outline): void;
					public clone(): java.lang.Object;
					public clone(): android.graphics.drawable.shapes.Shape;
				}
			}
		}
	}
}
