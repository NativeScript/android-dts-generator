/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.DrawFilter.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Picture.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Canvas {
			public constructor();
			public constructor(param0: android.graphics.Bitmap);
			public isHardwareAccelerated(): boolean;
			public setBitmap(param0: android.graphics.Bitmap): void;
			public isOpaque(): boolean;
			public getWidth(): number;
			public getHeight(): number;
			public getDensity(): number;
			public setDensity(param0: number): void;
			public getMaximumBitmapWidth(): number;
			public getMaximumBitmapHeight(): number;
			public save(): number;
			public save(param0: number): number;
			public saveLayer(param0: android.graphics.RectF, param1: android.graphics.Paint, param2: number): number;
			public saveLayer(param0: android.graphics.RectF, param1: android.graphics.Paint): number;
			public saveLayer(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint, param5: number): number;
			public saveLayer(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): number;
			public saveLayerAlpha(param0: android.graphics.RectF, param1: number, param2: number): number;
			public saveLayerAlpha(param0: android.graphics.RectF, param1: number): number;
			public saveLayerAlpha(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
			public saveLayerAlpha(param0: number, param1: number, param2: number, param3: number, param4: number): number;
			public restore(): void;
			public getSaveCount(): number;
			public restoreToCount(param0: number): void;
			public translate(param0: number, param1: number): void;
			public scale(param0: number, param1: number): void;
			public scale(param0: number, param1: number, param2: number, param3: number): void;
			public rotate(param0: number): void;
			public rotate(param0: number, param1: number, param2: number): void;
			public skew(param0: number, param1: number): void;
			public concat(param0: android.graphics.Matrix): void;
			public setMatrix(param0: android.graphics.Matrix): void;
			public getMatrix(param0: android.graphics.Matrix): void;
			public getMatrix(): android.graphics.Matrix;
			public clipRect(param0: android.graphics.RectF, param1: android.graphics.Region.Op): boolean;
			public clipRect(param0: android.graphics.Rect, param1: android.graphics.Region.Op): boolean;
			public clipRect(param0: android.graphics.RectF): boolean;
			public clipRect(param0: android.graphics.Rect): boolean;
			public clipRect(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Region.Op): boolean;
			public clipRect(param0: number, param1: number, param2: number, param3: number): boolean;
			public clipRect(param0: number, param1: number, param2: number, param3: number): boolean;
			public clipPath(param0: android.graphics.Path, param1: android.graphics.Region.Op): boolean;
			public clipPath(param0: android.graphics.Path): boolean;
			public clipRegion(param0: android.graphics.Region, param1: android.graphics.Region.Op): boolean;
			public clipRegion(param0: android.graphics.Region): boolean;
			public getDrawFilter(): android.graphics.DrawFilter;
			public setDrawFilter(param0: android.graphics.DrawFilter): void;
			public quickReject(param0: android.graphics.RectF, param1: android.graphics.Canvas.EdgeType): boolean;
			public quickReject(param0: android.graphics.Path, param1: android.graphics.Canvas.EdgeType): boolean;
			public quickReject(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Canvas.EdgeType): boolean;
			public getClipBounds(param0: android.graphics.Rect): boolean;
			public getClipBounds(): android.graphics.Rect;
			public drawRGB(param0: number, param1: number, param2: number): void;
			public drawARGB(param0: number, param1: number, param2: number, param3: number): void;
			public drawColor(param0: number): void;
			public drawColor(param0: number, param1: android.graphics.PorterDuff.Mode): void;
			public drawPaint(param0: android.graphics.Paint): void;
			public drawPoints(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.Paint): void;
			public drawPoints(param0: native.Array<number>, param1: android.graphics.Paint): void;
			public drawPoint(param0: number, param1: number, param2: android.graphics.Paint): void;
			public drawLine(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): void;
			public drawLines(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.Paint): void;
			public drawLines(param0: native.Array<number>, param1: android.graphics.Paint): void;
			public drawRect(param0: android.graphics.RectF, param1: android.graphics.Paint): void;
			public drawRect(param0: android.graphics.Rect, param1: android.graphics.Paint): void;
			public drawRect(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): void;
			public drawOval(param0: android.graphics.RectF, param1: android.graphics.Paint): void;
			public drawOval(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): void;
			public drawCircle(param0: number, param1: number, param2: number, param3: android.graphics.Paint): void;
			public drawArc(param0: android.graphics.RectF, param1: number, param2: number, param3: boolean, param4: android.graphics.Paint): void;
			public drawArc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean, param7: android.graphics.Paint): void;
			public drawRoundRect(param0: android.graphics.RectF, param1: number, param2: number, param3: android.graphics.Paint): void;
			public drawRoundRect(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Paint): void;
			public drawPath(param0: android.graphics.Path, param1: android.graphics.Paint): void;
			public drawBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: android.graphics.Paint): void;
			public drawBitmap(param0: android.graphics.Bitmap, param1: android.graphics.Rect, param2: android.graphics.RectF, param3: android.graphics.Paint): void;
			public drawBitmap(param0: android.graphics.Bitmap, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: android.graphics.Paint): void;
			public drawBitmap(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;
			public drawBitmap(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;
			public drawBitmap(param0: android.graphics.Bitmap, param1: android.graphics.Matrix, param2: android.graphics.Paint): void;
			public drawBitmapMesh(param0: android.graphics.Bitmap, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: android.graphics.Paint): void;
			public drawVertices(param0: android.graphics.Canvas.VertexMode, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>, param7: number, param8: native.Array<number>, param9: number, param10: number, param11: android.graphics.Paint): void;
			public drawText(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): void;
			public drawText(param0: string, param1: number, param2: number, param3: android.graphics.Paint): void;
			public drawText(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): void;
			public drawText(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): void;
			public drawTextRun(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;
			public drawTextRun(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;
			public drawPosText(param0: native.Array<string>, param1: number, param2: number, param3: native.Array<number>, param4: android.graphics.Paint): void;
			public drawPosText(param0: string, param1: native.Array<number>, param2: android.graphics.Paint): void;
			public drawTextOnPath(param0: native.Array<string>, param1: number, param2: number, param3: android.graphics.Path, param4: number, param5: number, param6: android.graphics.Paint): void;
			public drawTextOnPath(param0: string, param1: android.graphics.Path, param2: number, param3: number, param4: android.graphics.Paint): void;
			public drawPicture(param0: android.graphics.Picture): void;
			public drawPicture(param0: android.graphics.Picture, param1: android.graphics.RectF): void;
			public drawPicture(param0: android.graphics.Picture, param1: android.graphics.Rect): void;
			public static ALL_SAVE_FLAG: number;
			public static CLIP_SAVE_FLAG: number;
			public static CLIP_TO_LAYER_SAVE_FLAG: number;
			public static FULL_COLOR_LAYER_SAVE_FLAG: number;
			public static HAS_ALPHA_LAYER_SAVE_FLAG: number;
			public static MATRIX_SAVE_FLAG: number;
		}
		export module Canvas {
			export class EdgeType {
				public static values(): native.Array<android.graphics.Canvas.EdgeType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Canvas.EdgeType;
				public static AA: android.graphics.Canvas.EdgeType;
				public static BW: android.graphics.Canvas.EdgeType;
			}
			export class VertexMode {
				public static values(): native.Array<android.graphics.Canvas.VertexMode>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Canvas.VertexMode;
				public static TRIANGLES: android.graphics.Canvas.VertexMode;
				public static TRIANGLE_FAN: android.graphics.Canvas.VertexMode;
				public static TRIANGLE_STRIP: android.graphics.Canvas.VertexMode;
			}
		}
	}
}
