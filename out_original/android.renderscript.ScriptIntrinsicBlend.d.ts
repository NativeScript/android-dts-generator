/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptIntrinsicBlend {
			public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicBlend;
			public forEachClear(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachClear(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDClear(): android.renderscript.Script.KernelID;
			public forEachSrc(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachSrc(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDSrc(): android.renderscript.Script.KernelID;
			public forEachDst(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachDst(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDDst(): android.renderscript.Script.KernelID;
			public forEachSrcOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachSrcOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDSrcOver(): android.renderscript.Script.KernelID;
			public forEachDstOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachDstOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDDstOver(): android.renderscript.Script.KernelID;
			public forEachSrcIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachSrcIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDSrcIn(): android.renderscript.Script.KernelID;
			public forEachDstIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachDstIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDDstIn(): android.renderscript.Script.KernelID;
			public forEachSrcOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachSrcOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDSrcOut(): android.renderscript.Script.KernelID;
			public forEachDstOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachDstOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDDstOut(): android.renderscript.Script.KernelID;
			public forEachSrcAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachSrcAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDSrcAtop(): android.renderscript.Script.KernelID;
			public forEachDstAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachDstAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDDstAtop(): android.renderscript.Script.KernelID;
			public forEachXor(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachXor(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDXor(): android.renderscript.Script.KernelID;
			public forEachMultiply(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachMultiply(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDMultiply(): android.renderscript.Script.KernelID;
			public forEachAdd(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachAdd(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDAdd(): android.renderscript.Script.KernelID;
			public forEachSubtract(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
			public forEachSubtract(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
			public getKernelIDSubtract(): android.renderscript.Script.KernelID;
		}
	}
}
