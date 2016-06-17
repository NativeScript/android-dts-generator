/// <reference path="./_helpers.d.ts" />

declare module android {
	export module renderscript {
		export class Matrix2f {
			public constructor();
			public constructor(param0: native.Array<number>);
			public getArray(): native.Array<number>;
			public get(param0: number, param1: number): number;
			public set(param0: number, param1: number, param2: number): void;
			public loadIdentity(): void;
			public load(param0: android.renderscript.Matrix2f): void;
			public loadRotate(param0: number): void;
			public loadScale(param0: number, param1: number): void;
			public loadMultiply(param0: android.renderscript.Matrix2f, param1: android.renderscript.Matrix2f): void;
			public multiply(param0: android.renderscript.Matrix2f): void;
			public rotate(param0: number): void;
			public scale(param0: number, param1: number): void;
			public transpose(): void;
		}
	}
}
