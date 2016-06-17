/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />

declare module android {
	export module graphics {
		export class PathMeasure {
			public constructor();
			public constructor(param0: android.graphics.Path, param1: boolean);
			public setPath(param0: android.graphics.Path, param1: boolean): void;
			public getLength(): number;
			public getPosTan(param0: number, param1: native.Array<number>, param2: native.Array<number>): boolean;
			public getMatrix(param0: number, param1: android.graphics.Matrix, param2: number): boolean;
			public getSegment(param0: number, param1: number, param2: android.graphics.Path, param3: boolean): boolean;
			public isClosed(): boolean;
			public nextContour(): boolean;
			public finalize(): void;
			public static POSITION_MATRIX_FLAG: number;
			public static TANGENT_MATRIX_FLAG: number;
		}
	}
}
