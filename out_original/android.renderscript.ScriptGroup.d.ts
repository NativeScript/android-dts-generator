/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptGroup {
			public execute(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public setInput(param0: android.renderscript.Script.KernelID, param1: android.renderscript.Allocation): void;
			public setOutput(param0: android.renderscript.Script.KernelID, param1: android.renderscript.Allocation): void;
			public execute(): void;
		}
		export module ScriptGroup {
			export class Binding {
				public constructor();
				public constructor(param0: android.renderscript.Script.FieldID, param1: java.lang.Object);
			}
			export class Builder {
				public constructor();
				public constructor(param0: android.renderscript.RenderScript);
				public addKernel(param0: android.renderscript.Script.KernelID): android.renderscript.ScriptGroup.Builder;
				public addConnection(param0: android.renderscript.Type, param1: android.renderscript.Script.KernelID, param2: android.renderscript.Script.FieldID): android.renderscript.ScriptGroup.Builder;
				public addConnection(param0: android.renderscript.Type, param1: android.renderscript.Script.KernelID, param2: android.renderscript.Script.KernelID): android.renderscript.ScriptGroup.Builder;
				public create(): android.renderscript.ScriptGroup;
			}
			export class Builder2 {
				public constructor();
				public constructor(param0: android.renderscript.RenderScript);
				public addInput(): android.renderscript.ScriptGroup.Input;
				public addKernel(param0: android.renderscript.Script.KernelID, param1: android.renderscript.Type, param2: native.Array<java.lang.Object>): android.renderscript.ScriptGroup.Closure;
				public addInvoke(param0: android.renderscript.Script.InvokeID, param1: native.Array<java.lang.Object>): android.renderscript.ScriptGroup.Closure;
				public create(param0: string, param1: native.Array<android.renderscript.ScriptGroup.Future>): android.renderscript.ScriptGroup;
			}
			export class Closure {
				public getReturn(): android.renderscript.ScriptGroup.Future;
				public getGlobal(param0: android.renderscript.Script.FieldID): android.renderscript.ScriptGroup.Future;
			}
			export class Future {
			}
			export class Input {
			}
		}
	}
}
