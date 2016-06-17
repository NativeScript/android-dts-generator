/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />

declare module android {
	export module graphics {
		export class Camera {
			public constructor();
			public save(): void;
			public restore(): void;
			public translate(param0: number, param1: number, param2: number): void;
			public rotateX(param0: number): void;
			public rotateY(param0: number): void;
			public rotateZ(param0: number): void;
			public rotate(param0: number, param1: number, param2: number): void;
			public getLocationX(): number;
			public getLocationY(): number;
			public getLocationZ(): number;
			public setLocation(param0: number, param1: number, param2: number): void;
			public getMatrix(param0: android.graphics.Matrix): void;
			public applyToCanvas(param0: android.graphics.Canvas): void;
			public dotWithNormal(param0: number, param1: number, param2: number): number;
			public finalize(): void;
		}
	}
}
