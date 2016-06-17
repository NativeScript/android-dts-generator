/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class NinePatch {
			public constructor();
			public constructor(param0: android.graphics.Bitmap, param1: native.Array<number>);
			public constructor(param0: android.graphics.Bitmap, param1: native.Array<number>, param2: string);
			public finalize(): void;
			public getName(): string;
			public getPaint(): android.graphics.Paint;
			public setPaint(param0: android.graphics.Paint): void;
			public getBitmap(): android.graphics.Bitmap;
			public draw(param0: android.graphics.Canvas, param1: android.graphics.RectF): void;
			public draw(param0: android.graphics.Canvas, param1: android.graphics.Rect): void;
			public draw(param0: android.graphics.Canvas, param1: android.graphics.Rect, param2: android.graphics.Paint): void;
			public getDensity(): number;
			public getWidth(): number;
			public getHeight(): number;
			public hasAlpha(): boolean;
			public getTransparentRegion(param0: android.graphics.Rect): android.graphics.Region;
			public static isNinePatchChunk(param0: native.Array<number>): boolean;
		}
	}
}
