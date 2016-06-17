/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptIntrinsicConvolve5x5 {
			public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicConvolve5x5;
			public setInput(param0: android.renderscript.Allocation): void;
			public setCoefficients(param0: native.Array<number>): void;
			public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
			public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
			public forEach(param0: android.renderscript.Allocation): void;
			public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
			public getKernelID(): android.renderscript.Script.KernelID;
			public getFieldID_Input(): android.renderscript.Script.FieldID;
		}
	}
}
