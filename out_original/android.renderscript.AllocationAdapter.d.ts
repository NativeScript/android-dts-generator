/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />

declare module android {
	export module renderscript {
		export class AllocationAdapter {
			public setLOD(param0: number): void;
			public setFace(param0: android.renderscript.Type.CubemapFace): void;
			public setX(param0: number): void;
			public setY(param0: number): void;
			public setZ(param0: number): void;
			public static create1D(param0: android.renderscript.RenderScript, param1: android.renderscript.Allocation): android.renderscript.AllocationAdapter;
			public static create2D(param0: android.renderscript.RenderScript, param1: android.renderscript.Allocation): android.renderscript.AllocationAdapter;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: number): android.renderscript.Allocation;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type): android.renderscript.Allocation;
			public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Allocation, param2: android.renderscript.Type): android.renderscript.AllocationAdapter;
			public resize(param0: number): void;
		}
	}
}
