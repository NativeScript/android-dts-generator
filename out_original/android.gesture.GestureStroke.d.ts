/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.gesture.OrientedBoundingBox.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module gesture {
		export class GestureStroke {
			public constructor();
			public constructor(param0: java.util.ArrayList);
			public clone(): java.lang.Object;
			public getPath(): android.graphics.Path;
			public toPath(param0: number, param1: number, param2: number): android.graphics.Path;
			public clearPath(): void;
			public computeOrientedBoundingBox(): android.gesture.OrientedBoundingBox;
			public boundingBox: android.graphics.RectF;
			public length: number;
			public points: native.Array<number>;
		}
	}
}
