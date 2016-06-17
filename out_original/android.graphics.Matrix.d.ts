/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Matrix {
			public constructor();
			public constructor(param0: android.graphics.Matrix);
			public isIdentity(): boolean;
			public isAffine(): boolean;
			public rectStaysRect(): boolean;
			public set(param0: android.graphics.Matrix): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public reset(): void;
			public setTranslate(param0: number, param1: number): void;
			public setScale(param0: number, param1: number, param2: number, param3: number): void;
			public setScale(param0: number, param1: number): void;
			public setRotate(param0: number, param1: number, param2: number): void;
			public setRotate(param0: number): void;
			public setSinCos(param0: number, param1: number, param2: number, param3: number): void;
			public setSinCos(param0: number, param1: number): void;
			public setSkew(param0: number, param1: number, param2: number, param3: number): void;
			public setSkew(param0: number, param1: number): void;
			public setConcat(param0: android.graphics.Matrix, param1: android.graphics.Matrix): boolean;
			public preTranslate(param0: number, param1: number): boolean;
			public preScale(param0: number, param1: number, param2: number, param3: number): boolean;
			public preScale(param0: number, param1: number): boolean;
			public preRotate(param0: number, param1: number, param2: number): boolean;
			public preRotate(param0: number): boolean;
			public preSkew(param0: number, param1: number, param2: number, param3: number): boolean;
			public preSkew(param0: number, param1: number): boolean;
			public preConcat(param0: android.graphics.Matrix): boolean;
			public postTranslate(param0: number, param1: number): boolean;
			public postScale(param0: number, param1: number, param2: number, param3: number): boolean;
			public postScale(param0: number, param1: number): boolean;
			public postRotate(param0: number, param1: number, param2: number): boolean;
			public postRotate(param0: number): boolean;
			public postSkew(param0: number, param1: number, param2: number, param3: number): boolean;
			public postSkew(param0: number, param1: number): boolean;
			public postConcat(param0: android.graphics.Matrix): boolean;
			public setRectToRect(param0: android.graphics.RectF, param1: android.graphics.RectF, param2: android.graphics.Matrix.ScaleToFit): boolean;
			public setPolyToPoly(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
			public invert(param0: android.graphics.Matrix): boolean;
			public mapPoints(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): void;
			public mapVectors(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): void;
			public mapPoints(param0: native.Array<number>, param1: native.Array<number>): void;
			public mapVectors(param0: native.Array<number>, param1: native.Array<number>): void;
			public mapPoints(param0: native.Array<number>): void;
			public mapVectors(param0: native.Array<number>): void;
			public mapRect(param0: android.graphics.RectF, param1: android.graphics.RectF): boolean;
			public mapRect(param0: android.graphics.RectF): boolean;
			public mapRadius(param0: number): number;
			public getValues(param0: native.Array<number>): void;
			public setValues(param0: native.Array<number>): void;
			public toString(): string;
			public toShortString(): string;
			public finalize(): void;
			public static MPERSP_0: number;
			public static MPERSP_1: number;
			public static MPERSP_2: number;
			public static MSCALE_X: number;
			public static MSCALE_Y: number;
			public static MSKEW_X: number;
			public static MSKEW_Y: number;
			public static MTRANS_X: number;
			public static MTRANS_Y: number;
		}
		export module Matrix {
			export class ScaleToFit {
				public static values(): native.Array<android.graphics.Matrix.ScaleToFit>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Matrix.ScaleToFit;
				public static CENTER: android.graphics.Matrix.ScaleToFit;
				public static END: android.graphics.Matrix.ScaleToFit;
				public static FILL: android.graphics.Matrix.ScaleToFit;
				public static START: android.graphics.Matrix.ScaleToFit;
			}
		}
	}
}
