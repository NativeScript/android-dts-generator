/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export module shapes {
				export class RectShape {
					public constructor();
					public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;
					public getOutline(param0: android.graphics.Outline): void;
					public onResize(param0: number, param1: number): void;
					public rect(): android.graphics.RectF;
					public clone(): android.graphics.drawable.shapes.Shape;
					public clone(): java.lang.Object;
					public clone(): android.graphics.drawable.shapes.RectShape;
				}
			}
		}
	}
}
