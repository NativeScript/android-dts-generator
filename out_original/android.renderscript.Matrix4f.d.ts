/// <reference path="./_helpers.d.ts" />

declare module android {
	export module renderscript {
		export class Matrix4f {
			public constructor();
			public constructor(param0: native.Array<number>);
			public getArray(): native.Array<number>;
			public get(param0: number, param1: number): number;
			public set(param0: number, param1: number, param2: number): void;
			public loadIdentity(): void;
			public load(param0: android.renderscript.Matrix4f): void;
			public loadRotate(param0: number, param1: number, param2: number, param3: number): void;
			public loadScale(param0: number, param1: number, param2: number): void;
			public loadTranslate(param0: number, param1: number, param2: number): void;
			public loadMultiply(param0: android.renderscript.Matrix4f, param1: android.renderscript.Matrix4f): void;
			public loadOrtho(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public loadOrthoWindow(param0: number, param1: number): void;
			public loadFrustum(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public loadPerspective(param0: number, param1: number, param2: number, param3: number): void;
			public loadProjectionNormalized(param0: number, param1: number): void;
			public multiply(param0: android.renderscript.Matrix4f): void;
			public rotate(param0: number, param1: number, param2: number, param3: number): void;
			public scale(param0: number, param1: number, param2: number): void;
			public translate(param0: number, param1: number, param2: number): void;
			public inverse(): boolean;
			public inverseTranspose(): boolean;
			public transpose(): void;
		}
	}
}
