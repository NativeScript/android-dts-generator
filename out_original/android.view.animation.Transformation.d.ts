/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class Transformation {
				public constructor();
				public clear(): void;
				public getTransformationType(): number;
				public setTransformationType(param0: number): void;
				public set(param0: android.view.animation.Transformation): void;
				public compose(param0: android.view.animation.Transformation): void;
				public getMatrix(): android.graphics.Matrix;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public toString(): string;
				public toShortString(): string;
				public static TYPE_ALPHA: number;
				public static TYPE_BOTH: number;
				public static TYPE_IDENTITY: number;
				public static TYPE_MATRIX: number;
				public mAlpha: number;
				public mMatrix: android.graphics.Matrix;
				public mTransformationType: number;
			}
		}
	}
}
