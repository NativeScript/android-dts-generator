/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptIntrinsicLUT {
			public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicLUT;
			public setRed(param0: number, param1: number): void;
			public setGreen(param0: number, param1: number): void;
			public setBlue(param0: number, param1: number): void;
			public setAlpha(param0: number, param1: number): void;
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
