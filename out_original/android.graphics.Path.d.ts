/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Path {
			public constructor();
			public constructor(param0: android.graphics.Path);
			public reset(): void;
			public rewind(): void;
			public set(param0: android.graphics.Path): void;
			public op(param0: android.graphics.Path, param1: android.graphics.Path.Op): boolean;
			public op(param0: android.graphics.Path, param1: android.graphics.Path, param2: android.graphics.Path.Op): boolean;
			public isConvex(): boolean;
			public getFillType(): android.graphics.Path.FillType;
			public setFillType(param0: android.graphics.Path.FillType): void;
			public isInverseFillType(): boolean;
			public toggleInverseFillType(): void;
			public isEmpty(): boolean;
			public isRect(param0: android.graphics.RectF): boolean;
			public computeBounds(param0: android.graphics.RectF, param1: boolean): void;
			public incReserve(param0: number): void;
			public moveTo(param0: number, param1: number): void;
			public rMoveTo(param0: number, param1: number): void;
			public lineTo(param0: number, param1: number): void;
			public rLineTo(param0: number, param1: number): void;
			public quadTo(param0: number, param1: number, param2: number, param3: number): void;
			public rQuadTo(param0: number, param1: number, param2: number, param3: number): void;
			public cubicTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public rCubicTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public arcTo(param0: android.graphics.RectF, param1: number, param2: number, param3: boolean): void;
			public arcTo(param0: android.graphics.RectF, param1: number, param2: number): void;
			public arcTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean): void;
			public close(): void;
			public addRect(param0: android.graphics.RectF, param1: android.graphics.Path.Direction): void;
			public addRect(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Path.Direction): void;
			public addOval(param0: android.graphics.RectF, param1: android.graphics.Path.Direction): void;
			public addOval(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Path.Direction): void;
			public addCircle(param0: number, param1: number, param2: number, param3: android.graphics.Path.Direction): void;
			public addArc(param0: android.graphics.RectF, param1: number, param2: number): void;
			public addArc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public addRoundRect(param0: android.graphics.RectF, param1: number, param2: number, param3: android.graphics.Path.Direction): void;
			public addRoundRect(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Path.Direction): void;
			public addRoundRect(param0: android.graphics.RectF, param1: native.Array<number>, param2: android.graphics.Path.Direction): void;
			public addRoundRect(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: android.graphics.Path.Direction): void;
			public addPath(param0: android.graphics.Path, param1: number, param2: number): void;
			public addPath(param0: android.graphics.Path): void;
			public addPath(param0: android.graphics.Path, param1: android.graphics.Matrix): void;
			public offset(param0: number, param1: number, param2: android.graphics.Path): void;
			public offset(param0: number, param1: number): void;
			public setLastPoint(param0: number, param1: number): void;
			public transform(param0: android.graphics.Matrix, param1: android.graphics.Path): void;
			public transform(param0: android.graphics.Matrix): void;
			public finalize(): void;
		}
		export module Path {
			export class Direction {
				public static values(): native.Array<android.graphics.Path.Direction>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Path.Direction;
				public static CCW: android.graphics.Path.Direction;
				public static CW: android.graphics.Path.Direction;
			}
			export class FillType {
				public static values(): native.Array<android.graphics.Path.FillType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Path.FillType;
				public static EVEN_ODD: android.graphics.Path.FillType;
				public static INVERSE_EVEN_ODD: android.graphics.Path.FillType;
				public static INVERSE_WINDING: android.graphics.Path.FillType;
				public static WINDING: android.graphics.Path.FillType;
			}
			export class Op {
				public static values(): native.Array<android.graphics.Path.Op>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Path.Op;
				public static DIFFERENCE: android.graphics.Path.Op;
				public static INTERSECT: android.graphics.Path.Op;
				public static REVERSE_DIFFERENCE: android.graphics.Path.Op;
				public static UNION: android.graphics.Path.Op;
				public static XOR: android.graphics.Path.Op;
			}
		}
	}
}
