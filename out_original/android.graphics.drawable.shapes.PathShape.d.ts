/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export module shapes {
				export class PathShape {
					public constructor();
					public constructor(param0: android.graphics.Path, param1: number, param2: number);
					public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;
					public onResize(param0: number, param1: number): void;
					public clone(): android.graphics.drawable.shapes.Shape;
					public clone(): java.lang.Object;
					public clone(): android.graphics.drawable.shapes.PathShape;
				}
			}
		}
	}
}
