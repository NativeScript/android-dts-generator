/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.Float4.d.ts" />
/// <reference path="./android.renderscript.Matrix3f.d.ts" />
/// <reference path="./android.renderscript.Matrix4f.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptIntrinsicColorMatrix {
			public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicColorMatrix;
			public static create(param0: android.renderscript.RenderScript): android.renderscript.ScriptIntrinsicColorMatrix;
			public setColorMatrix(param0: android.renderscript.Matrix4f): void;
			public setColorMatrix(param0: android.renderscript.Matrix3f): void;
			public setAdd(param0: android.renderscript.Float4): void;
			public setAdd(param0: number, param1: number, param2: number, param3: number): void;
			public setGreyscale(): void;
			public setYUVtoRGB(): void;
			public setRGBtoYUV(): void;
			public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
			public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
			public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelID(): android.renderscript.Script.KernelID;
		}
	}
}
