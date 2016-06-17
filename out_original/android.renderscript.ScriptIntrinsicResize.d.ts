/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptIntrinsicResize {
			public static create(param0: android.renderscript.RenderScript): android.renderscript.ScriptIntrinsicResize;
			public setInput(param0: android.renderscript.Allocation): void;
			public getFieldID_Input(): android.renderscript.Script.FieldID;
			public forEach_bicubic(param0: android.renderscript.Allocation): void;
			public forEach_bicubic(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
			public getKernelID_bicubic(): android.renderscript.Script.KernelID;
		}
	}
}
